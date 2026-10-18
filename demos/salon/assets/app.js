// ===== Demo settings: change in one place =====
const WHATSAPP_NUMBER = "966500000000"; // placeholder number for the demo
const waLink = (msg) => "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg || "");
document.querySelectorAll("[data-wa]").forEach(a => { a.href = waLink(a.dataset.wa); a.target = "_blank"; a.rel = "noopener"; });
const menuBtn = document.querySelector(".menu"), nav = document.getElementById("nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => { const o = nav.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", o); });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); }));
}

document.querySelectorAll(".tabs button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".tabs button").forEach(x => x.setAttribute("aria-selected", x === b));
  document.querySelectorAll("[data-panel]").forEach(p => p.hidden = p.dataset.panel !== b.dataset.tab);
}));
const f = document.getElementById("bookForm");
if (f) f.addEventListener("submit", e => {
  e.preventDefault(); const d = new FormData(f);
  const msg = `أهلاً لُمى 🌸\nالاسم: ${d.get("name")}\nالخدمة: ${d.get("service")}\nالتاريخ: ${d.get("date") || "مرن"}\nالوقت: ${d.get("time")}`;
  window.open(waLink(msg), "_blank", "noopener");
});
