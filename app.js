import { marvelHeros } from './assets/marvel.js'


console.log(marvelHeros);



const currentDate = document.querySelectorAll('.current-date');



const currentTime = document.querySelectorAll(".current-time");
const mainContainer = document.querySelector(".main-container");
const filesContainer = document.querySelector(".files-container");
const backButton = document.querySelectorAll('.backButton')
const marvelContainer = document.querySelector('.marvel-container')
const filesButton = document.querySelector(".four");
const marvelButton = document.querySelector('.five')
const todoContainer = document.querySelector('.todo-container')
const todoButton = document.querySelector('.six');

const threeCircles = document.querySelectorAll('.circle-text')
const smallCircles = document.querySelectorAll('.small-circle-text')















let ii = 0;

setInterval(() => {
  if(ii === 100) {
    ii = 0;
  } else {
    ii++;
  }

  threeCircles.forEach((circle) => {
    circle.textContent = ii + '%';

  })

  smallCircles.forEach((circle) => {
    circle.textContent = ii + '%';

  })


}, 1000)



todoButton.addEventListener('click', () => {
  mainContainer.style.display = 'none'
  todoContainer.style.display = 'flex'
})



backButton.forEach((button) => {
  button.addEventListener('click', () => {
    mainContainer.style.display = 'flex'
    filesContainer.style.display = 'none'
    marvelContainer.style.display = 'none'
    todoContainer.style.display = 'none'
  })

})



marvelButton.addEventListener('click', () => {
  mainContainer.style.display = 'none'
  marvelContainer.style.display = 'flex'
})



filesButton.addEventListener("click", () => {
  mainContainer.style.display = "none";
  filesContainer.style.display = "flex";
  
});



setTime()


setInterval(() => {
  setTime()
}, 2000)

const promptFiles = () => {};



function setTime() {
  currentTime.forEach((time) => {
    time.textContent = new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit'
    });
  })

  currentDate.forEach((Dte) => {
    Dte.textContent = new Date().toLocaleDateString();
  })
}



const changeHeroSelected = () => {
  
}









const createCalender = () => {







}