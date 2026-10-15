import test from 'node:test';
import assert from 'node:assert/strict';
import {roomLayers,roomGeometry,layerRect} from '../src/data/room-layout.ts';

test('interactive objects stay in the room across phone, tablet and desktop sizes',()=>{
 for(const [width,height] of [[320,650],[360,740],[390,844],[430,932],[768,1024],[1024,768],[1280,800],[1440,900],[1920,1080]]){
  const g=roomGeometry(width,height);
  for(const layer of roomLayers.filter(layer=>layer.interaction)){
   const [x,y,w,h]=layerRect(layer,g.wide);
   assert.ok(x+g.x>=-1 && x+w+g.x<=g.width+1,`${width}: ${layer.id} cropped horizontally`);
   assert.ok(y+g.y>=0 && y+h+g.y<=g.height,`${width}: ${layer.id} cropped vertically`);
  }
 }
});
test('zoom and object placement have no breakpoint jumps',()=>{
 for(let width=321;width<=1920;width++){
  const previous=roomGeometry(width-1,900),current=roomGeometry(width,900);
  assert.ok(Math.abs(current.scale-previous.scale)<.004,`zoom jumped at ${width}`);
  for(const layer of roomLayers.filter(layer=>layer.interaction)){
   const a=layerRect(layer,previous.wide),b=layerRect(layer,current.wide);
   assert.ok(Math.abs(b[0]-a[0])<2 && Math.abs(b[1]-a[1])<2,`placement jumped at ${width}`);
  }
 }
});
test('bed crops beyond compact frame and remains beside desktop',()=>{
 const bed=roomLayers.find(layer=>layer.id==='bed'),desk=roomLayers.find(layer=>layer.id==='desktop');
 assert.ok(bed.compact[0]>=840);
 assert.ok(Math.abs(bed.wide[0]-(desk.wide[0]+desk.wide[2]))<40);
});

test('PC feet stay on the tabletop and clear of the tablet at every layout width',()=>{
 const pc=roomLayers.find(layer=>layer.id==='pc');
 const desk=roomLayers.find(layer=>layer.id==='desktop');
 const tablet=roomLayers.find(layer=>layer.id==='tablet');
 // The tabletop's top surface is a trapezoid; its front fascia is not support.
 for(let t=0;t<=100;t++){
  const wide=t/100,p=layerRect(pc,wide),d=layerRect(desk,wide),a=layerRect(tablet,wide);
  for(const [u,v] of [[.06,.91],[.7,.995],[.96,.915]]){
   const x=p[0]+p[2]*u,y=p[1]+p[3]*v,depth=(y-d[1])/d[3];
   const left=d[0]+d[2]*.08*(1-depth/.72),right=d[0]+d[2]*(.91+.09*depth/.72);
   assert.ok(depth>=0&&depth<=.72&&x>=left&&x<=right,`unsupported PC foot at ${wide}`);
   assert.ok(!(x>=a[0]&&x<=a[0]+a[2]&&y>=a[1]&&y<=a[1]+a[3]),`PC foot intersects tablet at ${wide}`);
  }
 }
});
test('grounding survives moving the supporting desk',()=>{
 const desk=roomLayers.find(layer=>layer.id==='desktop'),pc=roomLayers.find(layer=>layer.id==='pc'),monitor=roomLayers.find(layer=>layer.id==='monitor'),lamp=roomLayers.find(layer=>layer.id==='lamp');
 const before=[pc,monitor,lamp].map(layer=>layerRect(layer,.5));
 const originalWide=desk.wide,originalCompact=desk.compact;
 try{
  desk.wide=[desk.wide[0],desk.wide[1]+40,desk.wide[2],desk.wide[3]];
  desk.compact=[desk.compact[0],desk.compact[1]+40,desk.compact[2],desk.compact[3]];
  [pc,monitor,lamp].forEach((layer,i)=>assert.equal(layerRect(layer,.5)[1]-before[i][1],40));
 }finally{desk.wide=originalWide;desk.compact=originalCompact;}
});

test('shelf and its plants remain clear of the glass wall',()=>{
 for(let t=0;t<=100;t++){
  for(const id of ['shelf','bracket-left','shelf-plant-left','shelf-plant-right']){
   assert.ok(layerRect(roomLayers.find(layer=>layer.id===id),t/100)[0]>=211,`${id} crosses curtain/window`);
  }
 }
});
test('requested objects are single sprites and removed clutter stays absent',()=>{
 for(const id of ['bed','cabinet','floor-plant','id-card','character','lamp'])assert.ok(roomLayers.find(layer=>layer.id===id));
 for(const layer of roomLayers)assert.ok(!/^(drawer-|handle-|chair-|shelf-pot|shelf-leaves|floor-pot|floor-leaves|book-flat|desk-pen|desk-cup|speaker|lamp-arm|lamp-base|lamp-shade)/.test(layer.id));
});
