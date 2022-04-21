const d = document,
  ls = localStorage;

export function nocheDia(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");
  let moon = "🌛",
    sun = "🌞";
  const darkTheme = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $themeBtn.textContent = sun;
    ls.setItem("theme", "dark");
  };
  const lightTheme = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $themeBtn.textContent = moon;
    ls.setItem("theme", "light");
  };
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        darkTheme();
      } else {
        lightTheme();
      }
    }
  });
}
d.addEventListener("DOMContentLoaded", (e) => {
  if (ls.getItem("theme") === null) ls.setItem("theme", "light");
  if (ls.getItem === "light") lightTheme();
  if (ls.getItem === "dark") darkTheme();
});
