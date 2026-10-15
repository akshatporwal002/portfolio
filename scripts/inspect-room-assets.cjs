const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');
const root = path.resolve('public/art/layered-room');
async function inspect() {
  fs.mkdirSync(path.join(root,'masks'),{recursive:true});
  const rows = [];
  for (const folder of ['objects', 'surfaces', 'lights', 'shadows']) {
    for (const name of fs.readdirSync(path.join(root, folder)).filter(n => n.endsWith('.png'))) {
      const file = path.join(root, folder, name);
      const meta = await sharp(file).metadata();
      const {data, info} = await sharp(file).ensureAlpha().raw().toBuffer({resolveWithObject:true});
      let x0=info.width, y0=info.height, x1=-1, y1=-1, transparent=0, partial=0;
      for(let y=0;y<info.height;y++) for(let x=0;x<info.width;x++) {
        const a=data[(y*info.width+x)*info.channels+info.channels-1];
        if(a===0) transparent++; else if(a<255) partial++;
        if(a>16) {x0=Math.min(x0,x);y0=Math.min(y0,y);x1=Math.max(x1,x);y1=Math.max(y1,y);}
      }
      rows.push({id:name.slice(0,-4),file:`${folder}/${name}`,width:meta.width,height:meta.height,hasAlpha:meta.hasAlpha,
        alphaBounds:[x0,y0,x1+1,y1+1],transparentPixels:transparent,partialAlphaPixels:partial,
        pivot:[(x0+x1+1)/2,y1+1],bytes:fs.statSync(file).size});
      if(folder==='objects') {
        // Derive a code-native interaction silhouette; leave source PNG pixels intact.
        // High alpha excludes fuzzy illumination. Deliberately do not mask glass reflections.
        const threshold=name==='pc-glass.png'?24:230;
        let d='';
        for(let y=0;y<info.height;y++) {
          let start=-1;
          for(let x=0;x<=info.width;x++) {
            const filled=x<info.width && data[(y*info.width+x)*info.channels+info.channels-1]>=threshold;
            if(filled && start<0) start=x;
            if(!filled && start>=0){d+=`M${start} ${y}h${x-start}v1H${start}z`;start=-1;}
          }
        }
        const maskName=name.replace('.png','.svg');
        fs.writeFileSync(path.join(root,'masks',maskName),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${info.width} ${info.height}" width="${info.width}" height="${info.height}"><path fill="white" d="${d}"/></svg>`);
        rows.at(-1).interactionMask=`masks/${maskName}`;
        rows.at(-1).maskAlphaThreshold=threshold;
      }
    }
  }
  fs.writeFileSync(path.join(root,'asset-metadata.json'), JSON.stringify(rows,null,2)+'\n');
  console.log(JSON.stringify({assets:rows.length,missingTransparency:rows.filter(r=>r.file.startsWith('objects/') && !r.transparentPixels).map(r=>r.id),megabytes:rows.reduce((n,r)=>n+r.bytes,0)/1024/1024},null,2));
}
inspect().catch(e=>{console.error(e);process.exitCode=1;});
