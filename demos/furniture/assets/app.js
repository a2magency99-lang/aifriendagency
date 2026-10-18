// رقم واتساب تجريبي — غيّره من هنا فقط
const WHATSAPP = '201552759343';
const wa=t=>'https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(t);
document.querySelectorAll('.wa-link').forEach(a=>{a.href=wa(a.dataset.msg||'مرحبا');a.target='_blank';a.rel='noopener'});
const nav=document.querySelector('.nav'),bur=document.querySelector('.burger');
bur.addEventListener('click',()=>{const o=nav.classList.toggle('open');bur.setAttribute('aria-expanded',o);bur.textContent=o?'إغلاق':'القائمة'});
nav.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');bur.textContent='القائمة'}));
document.getElementById('send').onclick=()=>{
  const st=document.querySelector('input[name=st]:checked').value;
  window.open(wa(`مرحبا سكون، أبي استشارة تصميم داخلي\nالمساحة: ${space.value} — ${area.value} م²\nالمدينة: ${ccity.value}\nالأسلوب: ${st}`),'_blank');
};
