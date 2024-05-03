const body = document.querySelector("body");
const btn = document.getElementById("btn_one");
const icon = document.getElementById("moon");
function changeTheme() {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    btn.style.backgroundColor = "#fff";
    icon.style.color = "#0d151c";
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    btn.style.backgroundColor = "#0d151c";
    icon.style.color = "#fff";
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}
btn.addEventListener("click", changeTheme);
let prevScrollpos = window.scrollY;
window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("lg-nav").style.top = "0";
  } else {
    document.getElementById("lg-nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

const menu = document.querySelector(".nav_link");
const btn2 = document.querySelector(".bar");
const changeIcon = document.querySelector("#bars");

btn2.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("show");
  changeIcon.classList.toggle("fa-xmark");
}
