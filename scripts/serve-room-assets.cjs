const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve('public/art/layered-room');
http.createServer((req,res)=>{
  const requested=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  const file=path.resolve(root,'.'+(requested==='/'?'/gallery.html':requested));
  if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
  fs.readFile(file,(err,bytes)=>{if(err){res.writeHead(404);res.end('Not found');return;}
    res.setHeader('Content-Type',file.endsWith('.png')?'image/png':file.endsWith('.json')?'application/json':file.endsWith('.svg')?'image/svg+xml':'text/html; charset=utf-8');
    res.setHeader('Cache-Control','no-store');res.end(bytes);});
}).listen(3000,'0.0.0.0',()=>console.log('Room assets: http://localhost:3000/'));
