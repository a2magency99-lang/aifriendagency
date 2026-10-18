// ===== Demo settings: change in one place =====
const WHATSAPP_NUMBER = "201552759343"; // placeholder number for the demo
const waLink = (msg) => "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg || "");
document.querySelectorAll("[data-wa]").forEach(a => { a.href = waLink(a.dataset.wa); a.target = "_blank"; a.rel = "noopener"; });
const menuBtn = document.querySelector(".menu"), nav = document.getElementById("nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => { const o = nav.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", o); });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); }));
}

const form = document.getElementById("filter"), cards = [...document.querySelectorAll(".card")];
function apply() {
  const d = new FormData(form); let n = 0;
  const pu = d.get("purpose"), ty = d.get("type"), di = d.get("dist"), mx = +d.get("max");
  cards.forEach(c => {
    const ok = (pu === "all" || c.dataset.purpose === pu) && (ty === "all" || c.dataset.type === ty) && (di === "all" || c.dataset.dist === di) && (!mx || +c.dataset.price <= mx);
    c.hidden = !ok; if (ok) n++;
  });
  document.getElementById("count").textContent = n === 1 ? "عقار واحد" : n === 2 ? "عقاران" : n + " عقارات";
  document.getElementById("empty").hidden = n > 0;
}
form.addEventListener("submit", e => { e.preventDefault(); apply(); document.getElementById("listings").scrollIntoView({ behavior: "smooth" }); });
form.addEventListener("change", apply);
document.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => { form.dist.value = b.dataset.go; form.purpose.value = "all"; form.type.value = "all"; form.max.value = "0"; apply(); document.getElementById("listings").scrollIntoView({ behavior: "smooth" }); }));
const of = document.getElementById("ownerForm");
of.addEventListener("submit", e => { e.preventDefault(); const d = new FormData(of);
  window.open(waLink(`السلام عليكم، عندي عقار أبغى أسوّقه\nالاسم: ${d.get("name")}\nالنوع: ${d.get("type")}\nالحي: ${d.get("dist") || "-"}\nالغرض: ${d.get("purpose")}`), "_blank", "noopener"); });
