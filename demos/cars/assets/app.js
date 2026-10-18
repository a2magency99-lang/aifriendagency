// رقم واتساب تجريبي — غيّره من هنا فقط
const WHATSAPP = '201552759343';
const wa=t=>'https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(t);
document.querySelectorAll('.wa-link').forEach(a=>{a.href=wa(a.dataset.msg||'مرحبا');a.target='_blank';a.rel='noopener'});
const ar=n=>String(n).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]);
// تواريخ افتراضية
const d0=new Date(),d1=new Date(Date.now()+3*864e5),iso=d=>d.toISOString().slice(0,10);
const from=document.getElementById('from'),to=document.getElementById('to');from.value=iso(d0);to.value=iso(d1);from.min=iso(d0);
const rates={'اقتصادية':149,'سيدان':259,'SUV':489,'فاخرة':890,'بيك أب':319};
const places={'الرياض':['التوصيل للمنزل','مطار الملك خالد الدولي','فرع العليا'],'جدة':['التوصيل للمنزل','مطار الملك عبدالعزيز الدولي','فرع التحلية'],'الدمام':['التوصيل للمنزل','مطار الملك فهد الدولي','فرع الشاطئ']};
const city=document.getElementById('city'),place=document.getElementById('place'),cls=document.getElementById('cls'),sum=document.getElementById('sum');
city.onchange=()=>{place.innerHTML=places[city.value].map(p=>`<option>${p}</option>`).join('');calc()};
function days(){return Math.max(1,Math.round((new Date(to.value)-new Date(from.value))/864e5))}
function calc(){const n=days(),r=rates[cls.value];sum.textContent=`تقدير مبدئي: ${ar(n)} يوم × ${ar(r)} ر.س = ${ar((n*r).toLocaleString('en'))} ر.س شامل الضريبة`}
[from,to,cls,place].forEach(e=>e.onchange=calc);calc();
document.getElementById('go').onclick=()=>{window.open(wa(`مرحبا درب، أبي أحجز سيارة\nالفئة: ${cls.value}\nالمدينة: ${city.value} — ${place.value}\nمن ${from.value} إلى ${to.value}`),'_blank')};
// فلتر الأسطول
document.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.filters button').forEach(x=>x.classList.toggle('on',x===b));
  const f=b.dataset.f;document.querySelectorAll('.car').forEach(c=>c.classList.toggle('hide',f!=='all'&&!c.dataset.c.split(' ').includes(f)));
});
