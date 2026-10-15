const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve('public/art/layered-room');
const assets=JSON.parse(fs.readFileSync(path.join(root,'asset-metadata.json')));
const groups={
 architecture:['walls','ceiling','floor','trim','ceiling-trim','window-frame','window-view','curtain-rail','curtain-left','curtain-right'],
 bed:['bed-complete','plant-complete'],
 character:['character-chair-complete','rug'],
 shelf:['shelf','shelf-bracket','book-blue','book-amber','book-cream','shelf-plant-complete','frame','artwork'],
 desk:['cupboard-complete','mouse-forward','lanyard-id-complete','cylinder-lamp','desktop','cabinet','drawer','drawer-handle','desk-leg','pc','pc-glass','monitor','monitor-stand','monitor-cable','keyboard','mouse','lamp-base','lamp-arm','lamp-shade','bottle','tablet','stationery-cup','pencil','pen','speaker','book-flat','lanyard','id-holder','id-insert','plant-foliage','plant-pot']
};
const interactions={'character-chair-complete':'/about','lanyard-id-complete':'/cv','cylinder-lamp':'toggle-lamp',pc:'/research',monitor:'/projects','id-holder':'/cv','id-insert':'/cv','book-blue':'/certifications','book-amber':'/certifications','book-cream':'/certifications',character:'/about','lamp-shade':'toggle-lamp','lamp-base':'toggle-lamp','lamp-arm':'toggle-lamp'};
for(const a of assets){
 a.group=Object.keys(groups).find(k=>groups[k].includes(a.id)) || (a.file.startsWith('lights/')?'lighting':'shadows');
 a.route=interactions[a.id]||null;
 if(a.interactionMask){
  const mask=fs.readFileSync(path.join(root,a.interactionMask),'utf8');
  const d=mask.match(/d="([^"]+)"/)[1];
  const shadow=`shadows/${a.id}-cast.svg`;
  fs.writeFileSync(path.join(root,shadow),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${a.width} ${a.height}" width="${a.width}" height="${a.height}"><defs><filter id="soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4"/></filter></defs><path fill="#160e19" opacity=".3" filter="url(#soft)" d="${d}"/></svg>`);
  a.castShadow={file:shadow,receiver:['architecture','shelf'].includes(a.group)?'wall':a.group==='desk' && !['desktop','desk-leg','cabinet','drawer','drawer-handle','plant-foliage','plant-pot'].includes(a.id)?'desktop':'floor',projection:'adjust during scene assembly; use same parent transform as object'};
 }
}
const manifest={version:1,phase:'assembled-local',reference:'/design-reference/room-compositions/desktop-v2.png',generator:'built-in image_gen',assetCount:assets.length,
 liveSceneImplemented:true,layoutSource:'src/data/room-layout.ts',renderer:'src/app/pixel-room.tsx',deployed:false,layout:{bed:'immediately beside right end of desk; progressively crop on narrow screens',walls:'extended bare surface; floor and ceiling positioned separately',responsive:'continuous group interpolation; workspace always visible'},
 notes:['Source PNGs preserve generated detail and internal self shading. Use SVG silhouette masks to exclude residual soft external glow.','Cast SVGs are independent alpha-derived silhouettes; receiving-surface projection and intensity require adjustment in the assembled scene.','Bed, cupboard, complete plants, lanyard with badge and seated character with chair are each consolidated PNG sprites. Earlier component masters are retained for reference; only assets named in room-layout.ts are rendered.','PC chassis contains internal hardware; glass and fan effects are optional overlays, not a fully exploded internal computer.','Source art is unoptimized. Produce deployment sizes after scene scale is finalized.'],groups,assets};
fs.writeFileSync(path.join(root,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(`Packaged ${assets.length} PNG assets and ${assets.filter(a=>a.interactionMask).length} separate mask/cast pairs.`);
