const d = document;
const ls = localStorage;

export default function darkTheme(btn, classDark) {
  let moon = "🌙",
    sun = "☀️";
  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $darkBtn.textContent = sun;
    ls.setItem("theme", "dark");
  };

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $darkBtn.textContent = moon;
    ls.setItem("theme", "light");
  };
  const $darkBtn = d.querySelector(".dark-mode-btn"),
    $selectors = d.querySelectorAll("[data-dark]");

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($darkBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  // Para obtener un elemento de Locale Storage debe usar getItem

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
}
