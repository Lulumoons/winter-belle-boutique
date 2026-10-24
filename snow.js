/* Winter Belle magical snow — layered drifting snow, twinkle, glow, sparkle dust (after Starlit Storybook) */
(function(){
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
function tile(n,rmin,rmax,size,a){var c=document.createElement('canvas');c.width=c.height=size;var x=c.getContext('2d');
 for(var i=0;i<n;i++){var px=Math.random()*size,py=Math.random()*size,r=rmin+Math.random()*(rmax-rmin),g=x.createRadialGradient(px,py,0,px,py,r*2.2);
  g.addColorStop(0,'rgba(255,255,255,'+a+')');g.addColorStop(.45,'rgba(232,242,238,'+a*.7+')');g.addColorStop(1,'rgba(220,235,230,0)');
  x.fillStyle=g;x.beginPath();x.arc(px,py,r*2.2,0,7);x.fill();}
 return c.toDataURL();}
var css='.wb-snow{position:fixed;inset:0;pointer-events:none;z-index:4;overflow:hidden}'+
'.wb-snow i{position:absolute;inset:-20%;background-repeat:repeat}'+
'.wb-s1{background-image:url('+tile(70,.6,1.1,400,.55)+');animation:wbfall 240s linear infinite}'+
'.wb-s2{background-image:url('+tile(40,1,1.8,500,.75)+');animation:wbfall2 170s linear infinite,wbtw 5s ease-in-out infinite alternate}'+
'.wb-s3{background-image:url('+tile(18,1.6,2.8,600,.95)+');animation:wbfall3 120s linear infinite,wbtw 3.6s ease-in-out infinite alternate-reverse;filter:drop-shadow(0 0 3px #f3e2b0)}'+
'@keyframes wbfall{to{background-position:-200px 2400px}}@keyframes wbfall2{to{background-position:300px 3000px}}@keyframes wbfall3{to{background-position:-400px 3600px}}'+
'@keyframes wbtw{from{opacity:.45}to{opacity:1}}'+
'.wb-shoot{position:fixed;top:14%;left:-10%;width:160px;height:1px;z-index:4;pointer-events:none;background:linear-gradient(90deg,transparent,#fff4d6);opacity:0;animation:wbshoot 13s 4s ease-in infinite}'+
'@keyframes wbshoot{0%{opacity:0;transform:translate(0,0) rotate(-18deg)}3%{opacity:1}12%{opacity:0;transform:translate(60vw,20vh) rotate(-18deg)}100%{opacity:0}}'+
'.wb-dust{position:fixed;pointer-events:none;z-index:60;width:6px;height:6px;border-radius:50%;background:radial-gradient(circle,#fff,#e4d29a 50%,transparent 70%);animation:wbdust 1s ease-out forwards}'+
'@keyframes wbdust{to{opacity:0;transform:translate(var(--dx),var(--dy)) scale(.2)}}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
var w=document.createElement('div');w.className='wb-snow';w.setAttribute('aria-hidden','true');w.innerHTML='<i class="wb-s1"></i><i class="wb-s2"></i><i class="wb-s3"></i>';document.body.appendChild(w);
var s=document.createElement('div');s.className='wb-shoot';s.setAttribute('aria-hidden','true');document.body.appendChild(s);
function spark(x,y){var d=document.createElement('span');d.className='wb-dust';d.style.left=x+'px';d.style.top=y+'px';d.style.setProperty('--dx',(Math.random()*40-20)+'px');d.style.setProperty('--dy',(Math.random()*30+10)+'px');document.body.appendChild(d);setTimeout(function(){d.remove()},1000)}
var last=0;if(matchMedia('(pointer:fine)').matches)addEventListener('pointermove',function(e){var n=performance.now();if(n-last<45)return;last=n;spark(e.clientX,e.clientY)},{passive:true});
document.querySelectorAll('.card img').forEach(function(f){f.addEventListener('pointerenter',function(){var r=f.getBoundingClientRect();for(var i=0;i<10;i++)spark(r.left+Math.random()*r.width,r.top+Math.random()*r.height*.6)})});
})();
