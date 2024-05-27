const darkBtn = document.querySelector(".theme-switcher .dark");
const lightBtn = document.querySelector(".theme-switcher .light");

window.addEventListener("load", () => {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const localTheme = localStorage.getItem("theme");
  localTheme === null ? setTheme(systemTheme) : setTheme(localTheme);
});

function setTheme(theme) {
  const activeBtn = theme === "dark" ? darkBtn : lightBtn;
  const inactiveBtn = theme === "dark" ? lightBtn : darkBtn;
  activeBtn.classList.add("active");
  inactiveBtn.classList.remove("active");
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

darkBtn.addEventListener("click", () => {
  setTheme("dark");
});

lightBtn.addEventListener("click", () => {
  setTheme("light");
});
