document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");

if (menuButton && primaryNavigation) {
  const setMenuOpen = (isOpen) => {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    primaryNavigation.classList.toggle("is-open", isOpen);
    menuButton.querySelector(".sr-only").textContent = isOpen ? "Close navigation" : "Open navigation";
  };

  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  primaryNavigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!primaryNavigation.contains(event.target) && !menuButton.contains(event.target)) {
      setMenuOpen(false);
    }
  });
}
