// Commutador clar/fosc (per defecte segueix el sistema)
(function () {
  const root = document.documentElement;
  try { const t = localStorage.getItem("tema"); if (t) root.dataset.theme = t; } catch (e) {}
  const dark = () => root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav.back");
    if (!nav) return;
    const btn = document.createElement("button");
    btn.className = "theme-toggle";
    const label = () => (btn.textContent = dark() ? "Mode clar" : "Mode fosc");
    label();
    btn.addEventListener("click", () => {
      root.dataset.theme = dark() ? "light" : "dark";
      try { localStorage.setItem("tema", root.dataset.theme); } catch (e) {}
      label();
      dispatchEvent(new Event("temachange"));
    });
    nav.append(btn);
  });
})();
