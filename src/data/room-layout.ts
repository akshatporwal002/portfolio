export type Rect = readonly [number, number, number, number];
export type RoomLayer = { id: string; asset: string; wide: Rect; compact: Rect; interaction?: 'pc' | 'monitor' | 'books' | 'id-card' | 'lamp' | 'character'; light?: boolean; opacity?: number; shadow?: 'wall' | 'desk' | 'floor'; contact?: {support:'desktop'|'shelf';depth:number}; mount?: {parent:string;parentY:number;selfY:number} };
const layers: RoomLayer[] = [];
function add(id: string, asset: string, wide: Rect, compact: Rect, extra: Partial<RoomLayer> = {}) { layers.push({id,asset,wide,compact,...extra}); }

// Coordinates describe visible silhouettes, not transparent PNG padding.
// Wide and compact endpoints interpolate continuously, including attached shadows.
add('rug','rug',[140,900,950,170],[60,1170,750,200]);
add('bed','bed-complete',[1000,505,690,535],[865,845,690,535],{shadow:'floor'});
add('bed-plant','plant-complete',[1520,600,190,400],[1360,940,190,400],{shadow:'floor'});
add('shelf-shadow','shelf-cast',[266,256,560,65],[215,477,565,65],{opacity:.7});
add('bracket-left','shelf-bracket',[297,247,32,80],[243,467,32,72]);
add('bracket-right','shelf-bracket',[710,247,32,80],[710,467,32,72]);
add('shelf','shelf',[278,245,515,25],[225,463,550,25]);
// Complete plants keep their pot, leaves and hanging vines together.
add('shelf-plant-left','shelf-plant-complete',[226,131,142,300],[218,350,112,237],{shadow:'wall',mount:{parent:'shelf',parentY:.1,selfY:.47}});
add('shelf-plant-right','shelf-plant-complete',[691,175,74,185],[690,396,78,185],{shadow:'wall',mount:{parent:'shelf',parentY:.1,selfY:.47}});
for(let i=0;i<9;i++)add(`book-${i}`,['book-blue','book-amber','book-cream'][i%3],[363+i*18,140+(i%3)*5,17,105-(i%3)*5],[345+i*20,350+(i%3)*5,19,113-(i%3)*5],{interaction:'books',shadow:'wall',contact:{support:'shelf',depth:.1}});
add('shelf-picture','artwork',[553,181,52,56],[552,396,62,60],{mount:{parent:'shelf-frame',parentY:.1,selfY:0}});
add('shelf-frame','frame',[543,174,74,70],[544,389,77,74],{contact:{support:'shelf',depth:.1}});
add('desk-contact','desk-contact',[96,875,940,50],[35,1178,755,45],{opacity:.65});
add('desk-leg-left','desk-leg',[116,658,23,238],[52,955,20,250]);
add('desk-leg-right','desk-leg',[994,658,27,238],[785,955,22,250]);
add('cabinet','cupboard-complete',[160,667,195,230],[77,958,177,250],{shadow:'floor'});
add('desktop','desktop',[103,599,925,77],[43,913,765,68]);
add('pc-spill','pc-spill',[95,378,435,350],[2,677,350,330],{opacity:.38});
add('lamp-wall','lamp-wall',[485,292,560,483],[351,591,500,450],{light:true,opacity:.45});
add('monitor-cable','monitor-cable',[547,540,65,78],[424,853,48,64]);
add('monitor-stand','monitor-stand',[470,560,107,60],[364,868,110,55],{shadow:'desk',contact:{support:'desktop',depth:.3}});
add('pc','pc',[195,452,169,167],[95,742,150,164],{interaction:'pc',shadow:'desk',contact:{support:'desktop',depth:.5}});
add('monitor','monitor',[377,411,292,171],[265,688,294,179],{interaction:'monitor',shadow:'wall',mount:{parent:'monitor-stand',parentY:.32,selfY:1}});
add('tablet','tablet',[132,620,146,20],[60,936,124,20],{shadow:'desk',contact:{support:'desktop',depth:.72}});
add('keyboard','keyboard',[428,617,182,34],[291,930,199,38],{shadow:'desk',contact:{support:'desktop',depth:.7}});
add('mouse','mouse-forward',[627,621,32,28],[524,938,32,28],{shadow:'desk',contact:{support:'desktop',depth:.63}});
add('lamp','cylinder-lamp',[663,464,57,157],[578,777,57,157],{interaction:'lamp',shadow:'desk',contact:{support:'desktop',depth:.28}});
add('bottle','bottle',[685,526,29,92],[628,835,26,90],{shadow:'desk',contact:{support:'desktop',depth:.32}});
add('id-card','lanyard-id-complete',[380,636,42,150],[263,961,48,169],{interaction:'id-card',shadow:'wall'});
add('character','character-chair-complete',[548,376,480,615],[520,825,305,440],{interaction:'character',shadow:'floor'});
add('floor-plant','plant-complete',[-15,510,146,450],[-55,825,130,435],{shadow:'floor'});

export const roomLayers = layers;
export const roomInteractions = {
 pc: { label:'PC · research', tooltip:'Research', href:'/research' },
 monitor: { label:'Monitor · projects', tooltip:'Projects', href:'/projects' },
 books: { label:'Books · certifications and courses', tooltip:'Learning', href:'/certifications' },
 'id-card': { label:'ID card · CV', tooltip:'My CV', href:'/cv' },
 lamp: { label:'Desk lamp', tooltip:'Turn on the lamp' },
 character: { label:'Say hello to Akshat', tooltip:'About me' },
};

export function roomGeometry(width:number,height:number) {
 const wide=Math.min(1,Math.max(0,(width-430)/1000));
 const targetWidth=840+(1586-840)*wide;
 const scale=Math.min(width/targetWidth,(height-40)/(1450-400*wide));
 return {wide,scale,x:Math.max(0,(width/scale-targetWidth)/2),y:Math.max(0,(height/scale-(1400-408*wide))*.35),width:width/scale,height:height/scale};
}
export function layerRect(layer:RoomLayer,wide:number):Rect {
 const rect=layer.compact.map((n,i)=>n+(layer.wide[i]-n)*wide) as [number,number,number,number];
 const parentId=layer.contact?.support??layer.mount?.parent;
 if(parentId){
  const parent=layers.find(candidate=>candidate.id===parentId);
  if(!parent)throw new Error(`Missing room support: ${parentId}`);
  const support=layerRect(parent,wide);
  rect[1]=layer.contact?support[1]+support[3]*layer.contact.depth-rect[3]:support[1]+support[3]*layer.mount!.parentY-rect[3]*layer.mount!.selfY;
 }
 return rect;
}
