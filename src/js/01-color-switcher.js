const startButton = document.querySelector("button[data-start]");
const stopButton = document.querySelector("button[data-stop]");
const body = document.querySelector("body");
console.log(startButton.classList)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  startButton.classList.add("active");
  console.log(startButton.classList)


let intervalId = null;
  startButton.addEventListener("click", () => {
    if(startButton.classList.contains("active")) {
    intervalId = setInterval(() => {
        body.style.background = getRandomHexColor();
    }, 1000);  
        startButton.classList.remove("active");
    }
return
    })

  stopButton.addEventListener("click", () => {
    clearInterval(intervalId);
    startButton.classList.add("active");
  });