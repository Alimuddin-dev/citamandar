// toogle class active
const Navbarnav = document.querySelector(".navbar-nav");
// jika menu di klik
document.querySelector("#menu").onclick = () => {
  Navbarnav.classList.toggle("active");
};

// klik di luar nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !Navbarnav.contains(e.target)) {
    Navbarnav.classList.remove("active");
  }
});
