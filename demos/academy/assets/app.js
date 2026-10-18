// ===== Demo settings: change in one place =====
const WHATSAPP_NUMBER = "966500000000"; // placeholder number for the demo
const waLink = (msg) => "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg || "");
document.querySelectorAll("[data-wa]").forEach(a => { a.href = waLink(a.dataset.wa); a.target = "_blank"; a.rel = "noopener"; });
const menuBtn = document.querySelector(".menu"), nav = document.getElementById("nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => { const o = nav.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", o); });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); }));
}

document.querySelectorAll(".cats button").forEach(b=>b.addEventListener("click",()=>{ const f=b.dataset.f;
  document.querySelectorAll(".cats button").forEach(x=>x.classList.toggle("on",x===b));
  document.querySelectorAll(".course").forEach(c=>c.hidden=!(f==="الكل"||c.dataset.cat===f)); }));
const ef=document.getElementById("enrollForm");
ef.addEventListener("submit",e=>{ e.preventDefault(); const d=new FormData(ef);
  window.open(waLink(`مرحبا نهج 👋\nالاسم: ${d.get("name")}\nالمجال: ${d.get("field")}\nأبغى خطة تعلّم مقترحة`),"_blank","noopener"); });
