"use client";

import Link from 'next/link';
import {useEffect,useId,useRef,useState,type CSSProperties,type KeyboardEvent} from 'react';
import artwork from '@/data/room-assets.json';
import {layerRect,roomGeometry,roomInteractions,roomLayers,type RoomLayer,type Rect} from '@/data/room-layout';

type Asset = {src:string;viewBox:string;width:number;height:number;path:string};
const assets:Record<string,Asset> = artwork;
type Interaction = keyof typeof roomInteractions;

function Sprite({asset,rect,clipId,highlight=false}:{asset:Asset;rect:Rect;clipId?:string;highlight?:boolean}) {
 return <svg x={rect[0]} y={rect[1]} width={rect[2]} height={rect[3]} viewBox="0 0 100 100" preserveAspectRatio="none" overflow="visible" pointerEvents="none">
  {clipId&&<defs><clipPath id={clipId}><path d={asset.path}/></clipPath></defs>}
  <g clipPath={clipId?`url(#${clipId})`:undefined}><svg width="100" height="100" viewBox={asset.viewBox} preserveAspectRatio="none"><image href={asset.src} width={asset.width} height={asset.height}/></svg>{highlight&&<path className="room-shape-highlight" d={asset.path}/>}</g>
 </svg>;
}

function Shadow({layer,rect}:{layer:RoomLayer;rect:Rect}) {
 const [x,y,w,h]=rect;
 if(layer.id==='character')return <g aria-hidden="true" pointerEvents="none">
  {/* Contacts follow the combined sprite's soles and caster footprint in perspective. */}
  <ellipse className="layer-shadow shadow-floor" cx={x+w*.62} cy={y+h*.965} rx={w*.38} ry={h*.035} fill="#100b16"/>
  {[[.13,.938,.12],[.40,.879,.09],[.33,.965,.045],[.54,.995,.055],[.78,.991,.055],[.95,.94,.045]].map(([u,v,r],i)=><ellipse key={i} className="object-contact-shadow" cx={x+w*u} cy={y+h*v} rx={w*r} ry={2.5} fill="#100b16"/>)}
 </g>;
 if(layer.id==='pc')return <g aria-hidden="true" pointerEvents="none">
  <svg x={x+5} y={y+2} width={w} height={h} viewBox="0 0 100 100" preserveAspectRatio="none" overflow="visible" className="layer-shadow shadow-desk"><polygon points="6,91 70,99.5 96,91.5 30,84" fill="#100b16"/></svg>
  <svg x={x} y={y} width={w} height={h} viewBox="0 0 100 100" preserveAspectRatio="none" className="pc-contact-shadow"><polygon points="6,91 70,99.5 96,91.5 30,84" fill="#0c0811"/></svg>
 </g>;
 // Cast shadows start at the receiving surface; tight contacts touch the feet.
 const projected:Rect=layer.shadow==='wall'?[x+10,y+14,w,h]:layer.shadow==='desk'?[x+6,y+h-4,w*.9,Math.max(5,Math.min(10,h*.08))]:[x+12,y+h-8,w*.94,Math.max(15,h*.07)];
 const contact=layer.shadow==='desk'||(layer.shadow==='floor'&&['plant-complete','cupboard-complete'].includes(layer.asset));
 return <g aria-hidden="true" pointerEvents="none">
  <svg x={projected[0]} y={projected[1]} width={projected[2]} height={projected[3]} viewBox="0 0 100 100" preserveAspectRatio="none" className={`layer-shadow shadow-${layer.shadow}`}><path d={assets[layer.asset].path} fill="#100b16"/></svg>
  {contact&&<ellipse className="object-contact-shadow" cx={x+w*.5} cy={y+h-.8} rx={w*.4} ry={layer.shadow==='floor'?3:1.5} fill="#100b16"/>}
 </g>;
}

export function PixelRoom({onHello,profileOpen}:{onHello:()=>void;profileOpen:boolean}) {
 const [lit,setLit]=useState(false);
 const [size,setSize]=useState({width:1440,height:1000});
 const [hover,setHover]=useState<Interaction|null>(null);
 const [forceReduced,setForceReduced]=useState(false);
 const container=useRef<HTMLDivElement>(null);
 const unique=useId().replaceAll(':','');
 useEffect(()=>{
  const node=container.current;if(!node)return;
  setForceReduced(new URLSearchParams(location.search).get('reduce')==='1');
  let frame=0;
  const observer=new ResizeObserver(entries=>{cancelAnimationFrame(frame);const {width,height}=entries[0].contentRect;frame=requestAnimationFrame(()=>setSize({width,height}));});
  observer.observe(node);return()=>{observer.disconnect();cancelAnimationFrame(frame);};
 },[]);
 const geometry=roomGeometry(size.width,size.height);
 const floorY=1150+(850-1150)*geometry.wide+geometry.y;
 const rect=(layer:RoomLayer):Rect=>{const r=layerRect(layer,geometry.wide);return [r[0]+geometry.x,r[1]+geometry.y,r[2],r[3]];};
 function activate(id:Interaction){if(id==='lamp')setLit(value=>!value);if(id==='character')onHello();}
 function keyboard(event:KeyboardEvent<SVGGElement>,id:Interaction){if(event.key==='Enter'||event.key===' '){event.preventDefault();activate(id);}}
 const status=hover ? hover==='lamp'?(lit?'Turn off the lamp':'Turn on the lamp'):roomInteractions[hover].tooltip : lit?'Make yourself at home.':'A quiet evening. Turn on the lamp.';
 return <div ref={container} className={`room-scene layered-room ${lit?'lamp-on':'lamp-off'} ${forceReduced?'room-reduced':''}`}>
  <div className="layered-stage" inert={profileOpen}>
   <svg className="room-canvas" viewBox={`0 0 ${geometry.width} ${geometry.height}`} preserveAspectRatio="none" aria-label="Akshat’s pixel art room. Explore the PC, monitor, books, CV card and desk lamp.">
    <defs><filter id={`${unique}-blur`} x="-20%" y="-30%" width="140%" height="160%"><feGaussianBlur stdDeviation="2"/></filter></defs>
    <g className="room-materials" aria-hidden="true">
     <Sprite asset={assets.walls} rect={[0,0,geometry.width,geometry.height]}/>
     <svg width={geometry.width} height={28+geometry.y*.15} aria-hidden="true"><rect width="100%" height="100%" fill="#49322c"/></svg>
     <Sprite asset={assets['ceiling-trim']} rect={[0,22+geometry.y*.15,geometry.width,8]} clipId={`${unique}-ceiling-trim`}/>
     <Sprite asset={assets.floor} rect={[0,floorY,geometry.width,Math.max(200,geometry.height-floorY)]}/>
     <Sprite asset={assets.trim} rect={[0,floorY-15,geometry.width,20]} clipId={`${unique}-trim`}/>
     <Sprite asset={assets['window-view']} rect={[-20+geometry.x,60,135,Math.max(460,floorY-150)]} clipId={`${unique}-window-view`}/>
     <Sprite asset={assets['window-frame']} rect={[-27+geometry.x,42,158,Math.max(500,floorY-123)]} clipId={`${unique}-window-frame`}/>
     <Sprite asset={assets['curtain-rail']} rect={[-40+geometry.x,10,250,35]} clipId={`${unique}-curtain-rail`}/>
     <Sprite asset={assets['curtain-left']} rect={[-83+geometry.x,28,93,floorY+25]} clipId={`${unique}-curtain-left`}/>
     <Sprite asset={assets['curtain-right']} rect={[108+geometry.x,28,95,floorY+25]} clipId={`${unique}-curtain-right`}/>
     {roomLayers.map(layer=><g key={layer.id} className={[layer.light?'lamp-effect':layer.id==='pc-spill'?'pc-effect':'',layer.interaction?'interactive-sprite':'',layer.interaction===hover?'sprite-active':'',layer.interaction==='lamp'?'sprite-lamp':''].join(' ')} style={layer.interaction?{'--hint-delay':`${Object.keys(roomInteractions).indexOf(layer.interaction)*1.4}s`} as CSSProperties:undefined} opacity={layer.opacity??1} data-layer={layer.id}>
      {layer.shadow&&<Shadow layer={layer} rect={rect(layer)}/>}
      <Sprite asset={assets[layer.asset]} rect={rect(layer)} clipId={assets[layer.asset].path?`${unique}-${layer.id}`:undefined} highlight={!!layer.interaction}/>
     </g>)}
    </g>
    <rect className="room-night-shade" width={geometry.width} height={geometry.height} pointerEvents="none"/>
    <g className="room-night-pc" aria-hidden="true" pointerEvents="none"><Sprite asset={assets.pc} rect={rect(roomLayers.find(layer=>layer.id==='pc')!)} clipId={`${unique}-night-pc`}/></g>
    <g className="room-hit-targets">
     {(Object.keys(roomInteractions) as Interaction[]).map((id,index)=>{
      const item=roomInteractions[id];
      const paths=roomLayers.filter(layer=>layer.interaction===id).map(layer=>{const r=rect(layer);return <svg key={layer.id} x={r[0]} y={r[1]} width={r[2]} height={r[3]} viewBox="0 0 100 100" preserveAspectRatio="none" overflow="visible"><path className="room-hit-path" d={assets[layer.asset].path}/></svg>;});
      const common={className:`room-target target-${id}`, 'data-room-object':id, 'aria-label':id==='lamp'?(lit?'Turn off the desk lamp':'Turn on the desk lamp'):item.label,tabIndex:0,style:{'--hint-delay':`${index*1.4}s`} as CSSProperties,onPointerEnter:()=>setHover(id),onPointerLeave:()=>setHover(null),onFocus:()=>setHover(id),onBlur:()=>setHover(null)};
      return 'href' in item?<a key={id} {...common} href={item.href}>{paths}</a>:<g key={id} {...common} role="button" aria-pressed={id==='lamp'?lit:undefined} onClick={()=>activate(id)} onKeyDown={event=>keyboard(event,id)}>{paths}</g>;
     })}
    </g>
   </svg>
  </div>
  <div className="room-instructions" aria-live="polite"><p>{status}</p><span>Explore the glowing objects, or use the links below.</span></div>
  <nav className="room-shortcuts" aria-label="Explore the room" inert={profileOpen}><button type="button" aria-pressed={lit} onClick={()=>setLit(value=>!value)}>{lit?'Lamp off':'Lamp on'}</button><Link href="/cv">CV</Link><Link href="/projects">Projects</Link><Link href="/research">Research</Link><Link href="/certifications">Learning</Link><button type="button" onClick={onHello}>About me</button></nav>

 </div>;
}
