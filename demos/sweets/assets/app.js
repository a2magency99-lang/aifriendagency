// رقم واتساب تجريبي — غيّره من هنا فقط
const WHATSAPP = '966500000000';
const wa=t=>'https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(t);
document.querySelectorAll('.wa-link').forEach(a=>{a.href=wa(a.dataset.msg||'مرحبا');a.target='_blank';a.rel='noopener'});
const ar=n=>String(n).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]);
const nav=document.querySelector('.nav'),bur=document.querySelector('.burger');
bur.addEventListener('click',()=>{const o=nav.classList.toggle('open');bur.setAttribute('aria-expanded',o)});
nav.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
let n=0;const cartN=document.getElementById('cartN'),toast=document.getElementById('toast');let tt;
document.querySelectorAll('.add').forEach(b=>b.onclick=()=>{n++;cartN.textContent=ar(n);b.classList.add('done');b.textContent='أُضيف ✓';
  toast.textContent='أضفنا «'+b.dataset.n+'» للسلة';toast.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('on'),1800)});
const boxes=[...document.querySelectorAll('#opts input')],tot=document.getElementById('tot');
function sum(){const s=29+boxes.filter(b=>b.checked).reduce((a,b)=>a+ +b.dataset.p,0);tot.textContent=ar(s)+' ر.س';return s}
boxes.forEach(b=>b.onchange=sum);sum();
document.getElementById('orderBox').onclick=()=>{const items=boxes.filter(b=>b.checked).map(b=>b.value).join('، ')||'—';const c=document.getElementById('card').value;
  window.open(wa(`السلام عليكم، أبي بوكس مخصص من دار الحلا\nالمحتوى: ${items}\nالمجموع: ${sum()} ر.س${c?'\nبطاقة الإهداء: '+c:''}`),'_blank')};
