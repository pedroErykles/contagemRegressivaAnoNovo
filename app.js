const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);
const daysElement = document.querySelector('#days')
const hoursElement = document.querySelector('#hours')
const minutesElement = document.querySelector('#minutes')
const secondsElement = document.querySelector('#seconds')
const nextYearElement = document.querySelector('#year')
nextYearElement.textContent = nextYear;
const countdownContainer = document.querySelector('#countdown')

const getTimeUnit = unit => unit < 10 ? `0${unit}` : unit;

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
    daysElement.textContent = getTimeUnit(days);
    hoursElement.textContent = getTimeUnit(hours);
    minutesElement.textContent = getTimeUnit(minutes);
    secondsElement.textContent = getTimeUnit(seconds);
}

const updateCountdown = () => {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60 ) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    insertCountdownValues({ days, hours, minutes, seconds });
    
}
setTimeout(() => {countdownContainer.style.display = 'flex';}, 1000)
setInterval(()=> {updateCountdown()}, 1000);