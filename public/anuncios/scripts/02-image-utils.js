/* global */
/* Image processing utilities — runs entirely in browser
   OpenAI image features: removeBgVision, improveQuality, generateVariation
*/

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function canvasToDataURL(canvas, type = 'image/png', quality) {
  return canvas.toDataURL(type, quality);
}

function dataURLtoBlob(dataUrl) {
  const [header, base64] = dataUrl.split(',');
  const mime = header.match(/:(.*?);/)[1];
  const bin = atob(base64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return new Blob([arr], { type: mime });
}

async function resizeIfNeeded(dataUrl, maxPx = 1024, maxBytes = 3.8 * 1024 * 1024) {
  const img = await loadImg(dataUrl);
  let w = img.naturalWidth, h = img.naturalHeight;
  const scale = Math.min(1, maxPx / Math.max(w, h));
  w = Math.round(w * scale); h = Math.round(h * scale);
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  c.getContext('2d').drawImage(img, 0, 0, w, h);
  let result = c.toDataURL('image/png');
  if (dataURLtoBlob(result).size > maxBytes) result = c.toDataURL('image/jpeg', 0.88);
  return result;
}

function getOpenAIKey() {
  return (window.OPENAI_API_KEY || localStorage.getItem('openai_api_key') || '').trim();
}

// ---------------------------------------------------------------------------
// CHROMA KEY — local
// ---------------------------------------------------------------------------
async function removeBgChroma(dataUrl, opts = {}) {
  const { tolerance = 35, edgeFeather = 3 } = opts;
  const img = await loadImg(dataUrl);
  const c = document.createElement('canvas');
  c.width = img.naturalWidth; c.height = img.naturalHeight;
  const ctx = c.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const id = ctx.getImageData(0, 0, c.width, c.height);
  const d = id.data;
  const pts = [[2,2],[c.width-3,2],[2,c.height-3],[c.width-3,c.height-3],[Math.floor(c.width/2),2],[Math.floor(c.width/2),c.height-3]];
  let br=0,bg=0,bb=0,n=0;
  for(const[x,y]of pts){const i=(y*c.width+x)*4;br+=d[i];bg+=d[i+1];bb+=d[i+2];n++;}
  br/=n;bg/=n;bb/=n;
  for(let i=0;i<d.length;i+=4){
    const dr=d[i]-br,dg=d[i+1]-bg,db=d[i+2]-bb;
    const dist=Math.sqrt(dr*dr+dg*dg+db*db);
    if(dist<tolerance){d[i+3]=0;}
    else if(dist<tolerance+edgeFeather*10){d[i+3]=Math.round(d[i+3]*(dist-tolerance)/(edgeFeather*10));}
  }
  ctx.putImageData(id,0,0);
  return canvasToDataURL(c);
}

// ---------------------------------------------------------------------------
// AUTO-AJUSTE — local
// ---------------------------------------------------------------------------
async function autoAdjust(dataUrl,opts={}){
  const{brightness=1.05,contrast=1.15,saturation=1.12}=opts;
  const img=await loadImg(dataUrl);
  const c=document.createElement('canvas');
  c.width=img.naturalWidth;c.height=img.naturalHeight;
  const ctx=c.getContext('2d');
  ctx.filter=`brightness(${brightness}) contrast(${contrast}) saturate(${saturation})`;
  ctx.drawImage(img,0,0);
  return canvasToDataURL(c,'image/jpeg',0.92);
}

// ---------------------------------------------------------------------------
// AUTO-NÍVEIS — local
// ---------------------------------------------------------------------------
async function autoLevels(dataUrl){
  const img=await loadImg(dataUrl);
  const c=document.createElement('canvas');
  c.width=img.naturalWidth;c.height=img.naturalHeight;
  const ctx=c.getContext('2d');
  ctx.drawImage(img,0,0);
  const id=ctx.getImageData(0,0,c.width,c.height);
  const d=id.data;
  let rMin=255,rMax=0,gMin=255,gMax=0,bMin=255,bMax=0;
  for(let i=0;i<d.length;i+=32){
    if(d[i]<rMin)rMin=d[i];if(d[i]>rMax)rMax=d[i];
    if(d[i+1]<gMin)gMin=d[i+1];if(d[i+1]>gMax)gMax=d[i+1];
    if(d[i+2]<bMin)bMin=d[i+2];if(d[i+2]>bMax)bMax=d[i+2];
  }
  const clip=5;
  rMin=Math.max(0,rMin+clip);rMax=Math.min(255,rMax-clip);
  gMin=Math.max(0,gMin+clip);gMax=Math.min(255,gMax-clip);
  bMin=Math.max(0,bMin+clip);bMax=Math.min(255,bMax-clip);
  const rR=rMax-rMin||1,gR=gMax-gMin||1,bR=bMax-bMin||1;
  for(let i=0;i<d.length;i+=4){
    d[i]=Math.max(0,Math.min(255,((d[i]-rMin)/rR)*255));
    d[i+1]=Math.max(0,Math.min(255,((d[i+1]-gMin)/gR)*255));
    d[i+2]=Math.max(0,Math.min(255,((d[i+2]-bMin)/bR)*255));
  }
  ctx.putImageData(id,0,0);
  return canvasToDataURL(c,'image/jpeg',0.92);
}

// ---------------------------------------------------------------------------
// SMART REMOVE BG — MediaPipe local
// ---------------------------------------------------------------------------
let _segmenter=null;
async function getSegmenter(){
  if(_segmenter)return _segmenter;
  if(!window.MediaPipeVision){
    await new Promise((resolve,reject)=>{
      const s=document.createElement('script');
      s.type='module';
      s.textContent=`
        import{ImageSegmenter,FilesetResolver}from'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/vision_bundle.mjs';
        window.MediaPipeVision={ImageSegmenter,FilesetResolver};
        window.dispatchEvent(new Event('mp-loaded'));
      `;
      window.addEventListener('mp-loaded',resolve,{once:true});
      setTimeout(()=>reject(new Error('MediaPipe não carregou')),15000);
      document.head.appendChild(s);
    });
  }
  const{ImageSegmenter,FilesetResolver}=window.MediaPipeVision;
  const fileset=await FilesetResolver.forVisionTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm');
  _segmenter=await ImageSegmenter.createFromOptions(fileset,{
    baseOptions:{modelAssetPath:'https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_multiclass_256x256/float32/latest/selfie_multiclass_256x256.tflite',delegate:'GPU'},
    runningMode:'IMAGE',outputCategoryMask:true,outputConfidenceMasks:false
  });
  return _segmenter;
}
async function removeBgSmart(dataUrl){
  const img=await loadImg(dataUrl);
  const seg=await getSegmenter();
  const c=document.createElement('canvas');
  c.width=img.naturalWidth;c.height=img.naturalHeight;
  const ctx=c.getContext('2d');
  ctx.drawImage(img,0,0);
  const result=seg.segment(img);
  const mask=result.categoryMask;
  const maskData=mask.getAsUint8Array();
  const mw=mask.width,mh=mask.height;
  const id=ctx.getImageData(0,0,c.width,c.height);
  const d=id.data;
  for(let y=0;y<c.height;y++){
    const my=Math.floor(y*mh/c.height);
    for(let x=0;x<c.width;x++){
      if(maskData[my*mw+Math.floor(x*mw/c.width)]===0)d[(y*c.width+x)*4+3]=0;
    }
  }
  ctx.putImageData(id,0,0);
  mask.close();
  return canvasToDataURL(c);
}

// ---------------------------------------------------------------------------
// ★ OPENAI — Remover fundo via GPT-4o Vision + canvas masking
// ---------------------------------------------------------------------------
async function removeBgVision(dataUrl){
  const key=getOpenAIKey();
  if(!key)throw new Error('Configure sua chave OpenAI primeiro.');

  const resized=await resizeIfNeeded(dataUrl,512);
  const base64=resized.split(',')[1];

  const visionResp=await fetch('https://api.openai.com/v1/chat/completions',{
    method:'POST',
    headers:{'Content-Type':'application/json',Authorization:`Bearer ${key}`},
    body:JSON.stringify({
      model:'gpt-4o-mini',
      max_tokens:80,
      messages:[{role:'user',content:[
        {type:'image_url',image_url:{url:`data:image/png;base64,${base64}`,detail:'low'}},
        {type:'text',text:'Responda SOMENTE com um JSON no formato {"bg_r":N,"bg_g":N,"bg_b":N,"tolerance":N} onde bg_r/g/b é a cor RGB média do fundo (não do produto) e tolerance é 20-60 (maior se fundo for gradiente ou irregular). Não explique.'}
      ]}]
    })
  });
  if(!visionResp.ok){const err=await visionResp.json();throw new Error(err.error?.message||'Erro Vision API');}
  const visionData=await visionResp.json();
  let bgColor={bg_r:240,bg_g:240,bg_b:240,tolerance:35};
  try{
    const txt=visionData.choices[0].message.content;
    const m=txt.match(/\{[\s\S]*\}/);
    if(m)bgColor={...bgColor,...JSON.parse(m[0])};
  }catch(_){}

  const img=await loadImg(dataUrl);
  const c=document.createElement('canvas');
  c.width=img.naturalWidth;c.height=img.naturalHeight;
  const ctx=c.getContext('2d');
  ctx.drawImage(img,0,0);
  const id=ctx.getImageData(0,0,c.width,c.height);
  const d=id.data;
  const{bg_r,bg_g,bg_b,tolerance}=bgColor;
  const feather=15;
  for(let i=0;i<d.length;i+=4){
    const dr=d[i]-bg_r,dg=d[i+1]-bg_g,db=d[i+2]-bg_b;
    const dist=Math.sqrt(dr*dr+dg*dg+db*db);
    if(dist<tolerance){d[i+3]=0;}
    else if(dist<tolerance+feather){d[i+3]=Math.round(d[i+3]*(dist-tolerance)/feather);}
  }
  ctx.putImageData(id,0,0);
  return canvasToDataURL(c);
}

// ---------------------------------------------------------------------------
// ★ OPENAI — Melhoria de qualidade via gpt-image-1 edit
// ---------------------------------------------------------------------------
async function improveQuality(dataUrl){
  const key=getOpenAIKey();
  if(!key)throw new Error('Configure sua chave OpenAI primeiro.');

  const resized=await resizeIfNeeded(dataUrl,1024);
  let pngBlob=dataURLtoBlob(resized);
  if(pngBlob.type!=='image/png'){
    const img=await loadImg(resized);
    const c=document.createElement('canvas');
    c.width=img.naturalWidth;c.height=img.naturalHeight;
    c.getContext('2d').drawImage(img,0,0);
    pngBlob=dataURLtoBlob(c.toDataURL('image/png'));
  }

  const form=new FormData();
  form.append('model','gpt-image-1-mini');
  form.append('image',pngBlob,'image.png');
  form.append('prompt','Melhore esta foto de produto para e-commerce: corrija iluminação, aumente nitidez, equilibre cores e branqueie levemente o fundo mantendo o produto idêntico. Preserve todos os detalhes do produto sem alterar forma ou texto.');
  form.append('n','1');
  form.append('size','1024x1024');

  const resp=await fetch('https://api.openai.com/v1/images/edits',{
    method:'POST',
    headers:{Authorization:`Bearer ${key}`},
    body:form
  });
  if(!resp.ok){const err=await resp.json();throw new Error(err.error?.message||'Erro Images API');}
  const data=await resp.json();
  const b64=data.data[0].b64_json||data.data[0].url;
  if(typeof b64==='string'&&b64.startsWith('http')){
    const r=await fetch(b64);
    const bl=await r.blob();
    return new Promise(res=>{const fr=new FileReader();fr.onload=e=>res(e.target.result);fr.readAsDataURL(bl);});
  }
  return `data:image/png;base64,${b64}`;
}

// ---------------------------------------------------------------------------
// ★ OPENAI — Gerar variação via gpt-image-1
// ---------------------------------------------------------------------------
async function generateVariation(dataUrl){
  const key=getOpenAIKey();
  if(!key)throw new Error('Configure sua chave OpenAI primeiro.');

  const resized=await resizeIfNeeded(dataUrl,1024);
  let pngBlob=dataURLtoBlob(resized);
  if(pngBlob.type!=='image/png'){
    const img=await loadImg(resized);
    const c=document.createElement('canvas');
    c.width=img.naturalWidth;c.height=img.naturalHeight;
    c.getContext('2d').drawImage(img,0,0);
    pngBlob=dataURLtoBlob(c.toDataURL('image/png'));
  }

  const form=new FormData();
  form.append('model','gpt-image-1-mini');
  form.append('image',pngBlob,'image.png');
  form.append('prompt','Recrie esta foto de produto para e-commerce com fundo branco puro e limpo, iluminação profissional de estúdio, sombra suave, sem reflexos e alta definição. O produto deve ser idêntico ao original.');
  form.append('n','1');
  form.append('size','1024x1024');

  const resp=await fetch('https://api.openai.com/v1/images/edits',{
    method:'POST',
    headers:{Authorization:`Bearer ${key}`},
    body:form
  });
  if(!resp.ok){const err=await resp.json();throw new Error(err.error?.message||'Erro Images API');}
  const data=await resp.json();
  const b64=data.data[0].b64_json||data.data[0].url;
  if(typeof b64==='string'&&b64.startsWith('http')){
    const r=await fetch(b64);
    const bl=await r.blob();
    return new Promise(res=>{const fr=new FileReader();fr.onload=e=>res(e.target.result);fr.readAsDataURL(bl);});
  }
  return `data:image/png;base64,${b64}`;
}

// ---------------------------------------------------------------------------
// Export global
// ---------------------------------------------------------------------------
window.MLImgUtils={
  removeBgChroma,removeBgSmart,autoAdjust,autoLevels,
  removeBgVision,improveQuality,generateVariation,
};
