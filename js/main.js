document.getElementById("hamburger-img").addEventListener("click", () => {
  var navLink = document.getElementById("nav-link");
  var hamburgerImg = document.getElementById("hamburger-img");
  if (navLink.classList.contains("active")) {
    navLink.classList.remove("active");
    hamburgerImg.src = "/images/icon-hamburger.svg";
  } else {
    navLink.classList.add("active");
    hamburgerImg.src = "/images/icon-close.svg";
  }
});
