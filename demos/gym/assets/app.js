// رقم واتساب تجريبي — غيّره من هنا فقط
const WHATSAPP = '966500000000';
document.querySelectorAll('.wa-link').forEach(a=>{a.href='https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(a.dataset.msg||'مرحبا');a.target='_blank';a.rel='noopener'});
const nav=document.querySelector('.nav'),bur=document.querySelector('.burger');
bur.addEventListener('click',()=>{const o=nav.classList.toggle('open');bur.setAttribute('aria-expanded',o)});
nav.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const ar=n=>String(n).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]);
// الجدول
const days=['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
const pool=[['06:00','Mobility & Core','كابتن نورة · فرع السيدات',true],['07:00','HIIT 30','كابتن فهد'],['17:30','Box Fit','كابتن سلطان'],['18:30','Power Lift','كابتن فهد'],['19:30','HIIT 30','كابتن ريم · فرع السيدات',true],['20:30','Box Fit','كابتن سلطان'],['21:30','Mobility & Core','كابتن فهد']];
const dEl=document.querySelector('.days'),sEl=document.getElementById('slots');
function render(i){
  dEl.querySelectorAll('button').forEach((b,j)=>{b.classList.toggle('on',i===j);b.setAttribute('aria-selected',i===j)});
  const list=pool.filter((_,k)=>(k+i)%7!==3 && (i!==5 || k>1));
  sEl.innerHTML=list.map((s,k)=>{const left=(k*3+i*5)%14;return `<div class="slot"><span class="t">${s[0]}</span><div><b>${s[1]}</b><div class="who ${s[3]?'lad':''}">${s[2]}</div></div><span class="seats ${left<4?'low':''}">${left<4?'باقي '+ar(left+1)+' أماكن':'متاح'}</span></div>`}).join('');
}
days.forEach((d,i)=>{const b=document.createElement('button');b.textContent=d;b.setAttribute('role','tab');b.onclick=()=>render(i);dEl.appendChild(b)});
render(0);
// الاشتراكات
const disc={1:1,3:.9,12:.75},per={1:'شهر',3:'شهر · ٣ أشهر',12:'شهر · سنوي'};
document.querySelectorAll('.toggle button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.toggle button').forEach(x=>x.classList.toggle('on',x===b));
  const p=+b.dataset.period;
  document.querySelectorAll('.price b').forEach(e=>e.textContent=Math.round(e.dataset.p*disc[p]));
  document.querySelectorAll('.per').forEach(e=>e.textContent=per[p]);
});
// BMI
const h=document.getElementById('h'),w=document.getElementById('w'),o=document.getElementById('bmiOut');
function bmi(){const v=w.value/((h.value/100)**2);if(!isFinite(v)||v<=0){o.innerHTML='';return}
 const t=v<18.5?'أقل من الطبيعي — نقترح خطة بناء عضلات':v<25?'وزن طبيعي — حافظ عليه بخطة برو':v<30?'زيادة وزن — خطة تنشيف + HIIT':'نقترح خطة إليت مع أخصائي تغذية';
 o.innerHTML=`<span>مؤشرك<br><small class="muted">${t}</small></span><b>${v.toFixed(1)}</b>`}
h.oninput=w.oninput=bmi;bmi();
