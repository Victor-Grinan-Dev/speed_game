//alert("yo!")

const menuBar = document.querySelector("#menuBar");
const upButton = document.querySelector("#up");
const welcome = document.querySelector("#welcome");
const mobButton = document.querySelector("#mobileButton");
const nav = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");
window.onscroll = () => scrollFunction()

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        menuBar.classList.add("scrollUp");
        upButton.classList.remove("invisible");
        welcome.classList.remove("invisible");
        mobButton.classList.remove("scrollUp");
        
    } else {  
        menuBar.classList.remove("scrollUp"); 
        upButton.classList.add("invisible"); 
        mobButton.classList.add("scrollUp");   
    }
  }

const pageTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const mobMenu = () => {
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", mobMenu);
    }
    if (nav.classList.contains("responsive")) {
      nav.classList.remove("responsive");
      document.body.style.overflow = "";
    } else {
      nav.classList.add("responsive");
      document.body.style.overflow = "hidden";
    }
  };

  mobButton.addEventListener("click", mobMenu);
  upButton.addEventListener("click", pageTop);
