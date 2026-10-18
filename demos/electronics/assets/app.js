// ===== Demo settings: change in one place =====
const WHATSAPP_NUMBER = "201552759343"; // placeholder number for the demo
const waLink = (msg) => "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg || "");
document.querySelectorAll("[data-wa]").forEach(a => { a.href = waLink(a.dataset.wa); a.target = "_blank"; a.rel = "noopener"; });
const menuBtn = document.querySelector(".menu"), nav = document.getElementById("nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => { const o = nav.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", o); });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); }));
}

// flash-sale countdown (demo: resets daily at midnight)
function tick(){ const n=new Date(), e=new Date(n); e.setHours(24,0,0,0); let s=Math.max(0,Math.floor((e-n)/1000));
  const h=String(Math.floor(s/3600)).padStart(2,"0"), m=String(Math.floor(s%3600/60)).padStart(2,"0"), x=String(s%60).padStart(2,"0");
  th.textContent=h; tm.textContent=m; ts.textContent=x; }
tick(); setInterval(tick,1000);
let count=0; const cc=document.getElementById("cartCount"), cart=document.querySelector(".cart"), toast=document.getElementById("toast"); let tt;
document.querySelectorAll(".add").forEach(b=>b.addEventListener("click",()=>{ count++; cc.textContent=count; cart.classList.remove("bump"); void cart.offsetWidth; cart.classList.add("bump");
  b.textContent="✓ أُضيف"; b.classList.add("done"); setTimeout(()=>{b.textContent="أضف للسلة"; b.classList.remove("done");},1600);
  toast.textContent="تمت إضافة «"+b.dataset.name+"» إلى السلة"; toast.classList.add("show"); clearTimeout(tt); tt=setTimeout(()=>toast.classList.remove("show"),2200); }));
document.querySelectorAll("[data-filter]").forEach(a=>a.addEventListener("click",()=>{ const f=a.dataset.filter;
  document.querySelectorAll(".cats a").forEach(c=>c.classList.toggle("on",c.dataset.filter===f));
  document.querySelectorAll(".prod").forEach(p=>p.hidden=!(f==="الكل"||p.dataset.cat===f)); }));
