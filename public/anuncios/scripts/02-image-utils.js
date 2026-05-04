/* global */
/* Image processing utilities — runs entirely in browser */

// Load a data URL into an Image element
function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// Convert canvas to data URL (PNG to keep alpha)
function canvasToDataURL(canvas, type = 'image/png', quality) {
  return canvas.toDataURL(type, quality);
}

/* =============== CHROMA KEY (fundo claro/branco -> transparente) =============== */
async function removeBgChroma(dataUrl, opts = {}) {
  const { tolerance = 35, edgeFeather = 3 } = opts;
  const img = await loadImg(dataUrl);
  const c = document.createElement('canvas');
  c.width = img.naturalWidth;
  c.height = img.naturalHeight;
  const ctx = c.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const id = ctx.getImageData(0, 0, c.width, c.height);
  const d = id.data;

  // Sample 4 corners to detect background color
  const samplePoints = [
    [2, 2],
    [c.width - 3, 2],
    [2, c.height - 3],
    [c.width - 3, c.height - 3],
    [Math.floor(c.width / 2), 2],
    [Math.floor(c.width / 2), c.height - 3]
  ];
  let br = 0, bg = 0, bb = 0, n = 0;
  for (const [x, y] of samplePoints) {
    const i = (y * c.width + x) * 4;
    br += d[i];
    bg += d[i + 1];
    bb += d[i + 2];
    n++;
  }
  br /= n; bg /= n; bb /= n;

  for (let i = 0; i < d.length; i += 4) {
    const dr = d[i] - br;
    const dg = d[i + 1] - bg;
    const db = d[i + 2] - bb;
    const dist = Math.sqrt(dr * dr + dg * dg + db * db);
    if (dist < tolerance) {
      d[i + 3] = 0;
    } else if (dist < tolerance + edgeFeather * 10) {
      // soft edge feather
      const t = (dist - tolerance) / (edgeFeather * 10);
      d[i + 3] = Math.round(d[i + 3] * t);
    }
  }
  ctx.putImageData(id, 0, 0);
  return canvasToDataURL(c);
}

/* =============== AUTO-AJUSTE (brilho/contraste/saturação) =============== */
async function autoAdjust(dataUrl, opts = {}) {
  const { brightness = 1.05, contrast = 1.15, saturation = 1.12 } = opts;
  const img = await loadImg(dataUrl);
  const c = document.createElement('canvas');
  c.width = img.naturalWidth;
  c.height = img.naturalHeight;
  const ctx = c.getContext('2d');

  // Use CSS filter for fast GPU-accelerated processing
  ctx.filter = `brightness(${brightness}) contrast(${contrast}) saturate(${saturation})`;
  ctx.drawImage(img, 0, 0);
  return canvasToDataURL(c, 'image/jpeg', 0.92);
}

/* =============== HISTOGRAM EQUALIZATION (auto-luminance) =============== */
async function autoLevels(dataUrl) {
  const img = await loadImg(dataUrl);
  const c = document.createElement('canvas');
  c.width = img.naturalWidth;
  c.height = img.naturalHeight;
  const ctx = c.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const id = ctx.getImageData(0, 0, c.width, c.height);
  const d = id.data;

  // Find min/max of luminance per channel
  let rMin = 255, rMax = 0, gMin = 255, gMax = 0, bMin = 255, bMax = 0;
  // Sample every 8th pixel for speed
  for (let i = 0; i < d.length; i += 32) {
    if (d[i] < rMin) rMin = d[i]; if (d[i] > rMax) rMax = d[i];
    if (d[i + 1] < gMin) gMin = d[i + 1]; if (d[i + 1] > gMax) gMax = d[i + 1];
    if (d[i + 2] < bMin) bMin = d[i + 2]; if (d[i + 2] > bMax) bMax = d[i + 2];
  }
  // Apply contrast stretch with 2% clipping
  const clip = 5;
  rMin = Math.max(0, rMin + clip); rMax = Math.min(255, rMax - clip);
  gMin = Math.max(0, gMin + clip); gMax = Math.min(255, gMax - clip);
  bMin = Math.max(0, bMin + clip); bMax = Math.min(255, bMax - clip);
  const rRange = rMax - rMin || 1;
  const gRange = gMax - gMin || 1;
  const bRange = bMax - bMin || 1;
  for (let i = 0; i < d.length; i += 4) {
    d[i] = Math.max(0, Math.min(255, ((d[i] - rMin) / rRange) * 255));
    d[i + 1] = Math.max(0, Math.min(255, ((d[i + 1] - gMin) / gRange) * 255));
    d[i + 2] = Math.max(0, Math.min(255, ((d[i + 2] - bMin) / bRange) * 255));
  }
  ctx.putImageData(id, 0, 0);
  return canvasToDataURL(c, 'image/jpeg', 0.92);
}

/* =============== SMART REMOVE BG via MediaPipe Selfie Segmentation =============== */
let _segmenter = null;
async function getSegmenter() {
  if (_segmenter) return _segmenter;
  // Lazy load MediaPipe Tasks Vision via CDN
  if (!window.MediaPipeVision) {
    await new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.type = 'module';
      s.textContent = `
        import { ImageSegmenter, FilesetResolver } from 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/vision_bundle.mjs';
        window.MediaPipeVision = { ImageSegmenter, FilesetResolver };
        window.dispatchEvent(new Event('mp-loaded'));
      `;
      window.addEventListener('mp-loaded', resolve, { once: true });
      setTimeout(() => reject(new Error('MediaPipe não carregou')), 15000);
      document.head.appendChild(s);
    });
  }
  const { ImageSegmenter, FilesetResolver } = window.MediaPipeVision;
  const fileset = await FilesetResolver.forVisionTasks(
    'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm'
  );
  _segmenter = await ImageSegmenter.createFromOptions(fileset, {
    baseOptions: {
      modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_multiclass_256x256/float32/latest/selfie_multiclass_256x256.tflite',
      delegate: 'GPU'
    },
    runningMode: 'IMAGE',
    outputCategoryMask: true,
    outputConfidenceMasks: false
  });
  return _segmenter;
}

async function removeBgSmart(dataUrl) {
  const img = await loadImg(dataUrl);
  const seg = await getSegmenter();
  const c = document.createElement('canvas');
  c.width = img.naturalWidth;
  c.height = img.naturalHeight;
  const ctx = c.getContext('2d');
  ctx.drawImage(img, 0, 0);

  // Run segmentation
  const result = seg.segment(img);
  const mask = result.categoryMask; // MPMask
  const maskData = mask.getAsUint8Array();
  const mw = mask.width;
  const mh = mask.height;

  // Categories for selfie_multiclass: 0=bg, 1=hair, 2=body-skin, 3=face-skin, 4=clothes, 5=others
  // Treat "background" (0) as transparent
  const id = ctx.getImageData(0, 0, c.width, c.height);
  const d = id.data;
  for (let y = 0; y < c.height; y++) {
    const my = Math.floor(y * mh / c.height);
    for (let x = 0; x < c.width; x++) {
      const mx = Math.floor(x * mw / c.width);
      const mi = my * mw + mx;
      const cat = maskData[mi];
      if (cat === 0) {
        const di = (y * c.width + x) * 4;
        d[di + 3] = 0;
      }
    }
  }
  ctx.putImageData(id, 0, 0);
  mask.close();
  return canvasToDataURL(c);
}

window.MLImgUtils = {
  removeBgChroma,
  removeBgSmart,
  autoAdjust,
  autoLevels
};
