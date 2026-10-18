/* =====================================================================
   AI Friend Agency — site config. Change these two values in ONE place:
   every WhatsApp button and the email link on the page update from here.
   ===================================================================== */
const CONFIG = {
  WHATSAPP_NUMBER: "201552759343",          // international format, digits only (placeholder)
  CONTACT_EMAIL:   "hello@aifriendagency.com" // placeholder: replace with the real inbox
};

(function () {
  "use strict";
  var num = String(CONFIG.WHATSAPP_NUMBER).replace(/\D/g, "");
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    var msg = a.getAttribute("data-wa-msg") || "";
    a.href = "https://wa.me/" + num + (msg ? "?text=" + encodeURIComponent(msg) : "");
  });
  document.querySelectorAll("[data-email]").forEach(function (a) {
    a.href = "mailto:" + CONFIG.CONTACT_EMAIL;
    var t = a.querySelector("[data-email-text]");
    if (t) t.textContent = CONFIG.CONTACT_EMAIL;
  });
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

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
        var show = f === "all" || c.getAttribute("data-cat") === f;
        c.hidden = !show;
      });
    });
  });

})();
