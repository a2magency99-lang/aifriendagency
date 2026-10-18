/* =====================================================================
   AI Friend Agency — site config. Change these two values in ONE place:
   every WhatsApp button, the contact form and the email link update from here.
   ===================================================================== */
const CONFIG = {
  WHATSAPP_NUMBER: "201552759343",          // international format, digits only (placeholder)
  CONTACT_EMAIL:   "hello@aifriendagency.com" // placeholder: replace with the real inbox
};

(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.add("has-js");
  var num = String(CONFIG.WHATSAPP_NUMBER).replace(/\D/g, "");
  function waUrl(msg) { return "https://wa.me/" + num + (msg ? "?text=" + encodeURIComponent(msg) : ""); }

  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = waUrl(a.getAttribute("data-wa-msg") || "");
  });
  document.querySelectorAll("[data-email]").forEach(function (a) {
    a.href = "mailto:" + CONFIG.CONTACT_EMAIL;
    var t = a.querySelector("[data-email-text]");
    if (t) t.textContent = CONFIG.CONTACT_EMAIL;
  });
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // Service catalog tabs (without JS every category is shown, one after another).
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.classList.toggle("is-on", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
      var p = document.getElementById(t.getAttribute("aria-controls"));
      if (p) p.hidden = !on;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }
  if (tabs.length) {
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { select(t, false); });
      t.addEventListener("keydown", function (ev) {
        var k = ev.key, n = null;
        if (k === "ArrowLeft") n = tabs[(i + 1) % tabs.length];       // RTL: left = next
        if (k === "ArrowRight") n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (k === "Home") n = tabs[0];
        if (k === "End") n = tabs[tabs.length - 1];
        if (n) { ev.preventDefault(); select(n, true); }
      });
    });
    tabs.forEach(function (t, i) {
      t.tabIndex = i === 0 ? 0 : -1;
      var p = document.getElementById(t.getAttribute("aria-controls"));
      if (p) p.hidden = i !== 0;
    });
  }

  // Demo filter chips.
  document.querySelectorAll(".filters").forEach(function (bar) {
    var grid = bar.parentElement.querySelector(".demo-grid");
    if (!grid) return;
    bar.addEventListener("click", function (ev) {
      var btn = ev.target.closest("[data-filter]");
      if (!btn) return;
      var f = btn.getAttribute("data-filter");
      bar.querySelectorAll("[data-filter]").forEach(function (b) {
        var on = b === btn; b.classList.toggle("is-on", on); b.setAttribute("aria-pressed", on ? "true" : "false");
      });
      grid.querySelectorAll(".demo").forEach(function (c) {
        c.hidden = !(f === "all" || c.getAttribute("data-cat") === f);
      });
    });
  });

  // Consultation form: no backend — it opens WhatsApp with the details pre-filled.
  var form = document.getElementById("lead-form");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var v = function (n) { return (form.elements[n] && form.elements[n].value || "").trim(); };
      var err = form.querySelector(".form-err");
      if (!v("name") || v("whatsapp").replace(/\D/g, "").length < 7) {
        if (err) err.hidden = false;
        (v("name") ? form.elements.whatsapp : form.elements.name).focus();
        return;
      }
      if (err) err.hidden = true;
      var lines = [
        "مرحبًا، أريد استشارة مجانية / عرض سعر",
        "الاسم: " + v("name"),
        "الخدمة: " + v("service"),
        "رقم واتساب: " + v("whatsapp")
      ];
      if (v("store")) lines.push("رابط المتجر/الحساب: " + v("store"));
      var url = waUrl(lines.join("\n"));
      var w = window.open(url, "_blank", "noopener");
      if (!w) window.location.href = url;
    });
  }
})();
