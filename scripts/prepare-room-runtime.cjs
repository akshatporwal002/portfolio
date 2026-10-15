// Deployment derivatives and compact vector interaction paths; masters remain intact.
const fs=require('node:fs');
const path=require('node:path');
const sharp=require('sharp');
const root=path.resolve('public/art/layered-room');
async function main(){
 const rows=JSON.parse(fs.readFileSync(path.join(root,'asset-metadata.json')));
 const out={}; fs.mkdirSync(path.join(root,'runtime'),{recursive:true});
 for(const row of rows){
  const {data,info}=await sharp(path.join(root,row.file)).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  let x0=info.width,y0=info.height,x1=0,y1=0;const threshold=row.id==='pc-glass'?24:220;
  for(let y=0;y<info.height;y++)for(let x=0;x<info.width;x++)if(data[(y*info.width+x)*4+3]>=threshold){x0=Math.min(x0,x);y0=Math.min(y0,y);x1=Math.max(x1,x+1);y1=Math.max(y1,y+1);}
  // The generated arm master includes an extra base. Crop its SVG viewport
  // above that duplicate so the separately editable lamp base is used once.
  // Source PNG/WebP pixels are preserved; only the rendering bounds change.
  if(row.id==='lamp-arm'){
   y1=Math.round(y0+(y1-y0)*.85);x0=info.width;x1=0;
   for(let y=y0;y<y1;y++)for(let x=0;x<info.width;x++)if(data[(y*info.width+x)*4+3]>=threshold){x0=Math.min(x0,x);x1=Math.max(x1,x+1);}
  }
  if(!row.file.startsWith('objects/'))[x0,y0,x1,y1]=row.alphaBounds;
  const bw=x1-x0,bh=y1-y0;
  let d=''; const step=8;
  if(row.file.startsWith('objects/'))for(let y=y0;y<y1;y+=step){let start=-1;for(let x=x0;x<=x1+step;x+=step){const filled=x<x1 && data[(Math.min(y+4,info.height-1)*info.width+Math.min(x+4,info.width-1))*4+3]>=threshold;if(filled&&start<0)start=x;if(!filled&&start>=0){const right=Math.min(x,x1);d+=`M${((start-x0)/bw*100).toFixed(2)} ${((y-y0)/bh*100).toFixed(2)}h${((right-start)/bw*100).toFixed(2)}v${(Math.min(step,y1-y)/bh*100).toFixed(2)}h-${((right-start)/bw*100).toFixed(2)}z`;start=-1;}}}
  const size=row.file.startsWith('surfaces/')?1400:Math.max(400,Math.min(1000,bw));
  await sharp(path.join(root,row.file)).resize({width:size,withoutEnlargement:true}).webp({quality:88,alphaQuality:100}).toFile(path.join(root,'runtime',row.id+'.webp'));
  out[row.id]={src:`/art/layered-room/runtime/${row.id}.webp`,viewBox:[x0,y0,bw,bh].join(' '),width:row.width,height:row.height,path:d};
 }
 fs.writeFileSync('src/data/room-assets.json',JSON.stringify(out));
 console.log(`Prepared ${rows.length} runtime sprites.`);
}
main().catch(e=>{console.error(e);process.exitCode=1});
