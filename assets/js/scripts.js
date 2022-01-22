function mobileMenu() {
  var mobileMenu = document.querySelector(".mobile-menu");
  if(mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  }
  else{
    mobileMenu.style.display = "block";
  }
}