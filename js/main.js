const hamburger = document.querySelector(".hamburger");
const nav__list = document.querySelector(".nav__list");


hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    nav__list.classList.toggle("active");
})

document.querySelectorAll(".nav__list__item__a").forEach(n => n.
    addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav__list.classList.remove("active");
}))


const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");

const newYear = '31 may 2022';

function countTimer(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const daysCalc = Math.floor(totalSeconds / 3600 / 24);
    const hoursCalc = Math.floor(totalSeconds / 3600) % 24;
    const minsCalc = Math.floor(totalSeconds / 60) % 60;
    const secondsCalc = Math.floor(totalSeconds % 60);
    
    days.innerHTML = daysCalc;
    hours.innerHTML = hoursCalc;
    mins.innerHTML = minsCalc;
    seconds.innerHTML = secondsCalc;
}
countTimer();

setInterval(countTimer, 1000);


var header = document.querySelector('header'),
    inicio = document.querySelector('.container__inicio'),
    alturaInicio = parseFloat(getComputedStyle(inicio).height) 



    

window.addEventListener('scroll', e=>{

     if(window.scrollY > alturaInicio - 80){
        header.classList.add("change")
    }
    else {
        header.classList.remove("change")
     }
     
   
})