const scoreText = document.querySelector("#score");
const modalText =document.querySelector("#modalMessage")
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

const closeOverlayBtn = document.querySelector("#closeOverlay")
const overlay = document.querySelector("#overlay");

const circles = document.querySelectorAll(".circle");

const randomIndex = () => Math.floor(Math.random() * 4);

let active = 0;
let score = 0;
let pace = 4000;
let gameOn = false;
let clickGiven = false;
let rounds = 0;

const startGame = () => {
    gameOn = true;
    for (let i = 0; i < circles.length; i++){
        circles[i].style.pointerEvents = "auto";
    }
    let nextActive = pickNew(active);

    circles[nextActive].classList.toggle("active");
    circles[active].classList.remove("active");

    active = nextActive;
    console.log("active", active + 1, "at index ", active)
    timer = setTimeout(startGame, pace) 

    if (rounds >= 1) {
        stoptGame();
    }
    pace -= 100;
    rounds++

    function pickNew(active) {
        let nextActive = randomIndex(active)

        if (nextActive != active){
            return nextActive;
        }else{
            if (gameOn == true){
                return pickNew(active);
            }           
        }  
    }   
} 

circles.forEach((circle, i) => {
    circle.addEventListener("click", () => 
    clicked(i))
});

const clicked = (circle) => {
    if (gameOn == true){
        console.log("clicked circled was",  circle + 1)
        if (circle !== active){
            stoptGame();
        }else{
            score++;
            rounds--
            scoreText.textContent = `Score: ${score}` ;
            clickGiven = true;
            
        }
    }

}

const stoptGame = () => {
    console.log("stop game")
    overlay.classList.remove("invisible")
    modalText.textContent = score;
    gameOn = false;
}

const reloadGame = () => {
    window.location.reload();
}

closeOverlayBtn.addEventListener("click", reloadGame);
startBtn.addEventListener("click", startGame);
stopBtn.addEventListener("click", stoptGame); 


console.log(randomIndex())




/*
let before;
let currentCircle = circleButtons[randomIndex()];
console.log("current: ", currentCircle.id)

currentCircle.classList.add("higligthed");
console.log("end current: ", currentCircle.id)
//startGame()

const displayClicked = (action) => {
    console.log(action)
}




/*const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four"); */

//const currentCircleNodeList = document.querySelectoraAll("circle-button")

//Array.from(currentCircleNodeList).forEach(item => console.log(item))


//const circleButtons = [one, two, three, four];