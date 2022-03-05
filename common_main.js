//alert("yo!")

const menuBar = document.querySelector("#menuBar");
const upButton = document.querySelector("#up");
const welcome = document.querySelector("#welcome");

window.onscroll = () => scrollFunction()

const pageTop = () => {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        menuBar.classList.add("scrollUp");
        upButton.classList.remove("invisible");
        welcome.classList.remove("invisible");
        
    } else {  
        menuBar.classList.remove("scrollUp"); 
        upButton.classList.add("invisible");    
    }
  }

upButton.addEventListener("click", pageTop);


