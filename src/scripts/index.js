const handleDarkmode = () => {
  const button = document.querySelector("#header_button");
  const html = document.querySelector("html");

  button.addEventListener("click", () => {
    html.classList.toggle("dark");
  });
};

const scrollTop = () => {
  const button = document.querySelector("#footer_button");

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

(() => {
  handleDarkmode();
  scrollTop();
})();
