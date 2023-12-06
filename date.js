const timeDate = document.querySelector('.time-date');
const date = document.querySelector('.date');
const time = document.querySelector('.time');



function setTime() {    
    const today = new Date();
    const fullTime= today.toLocaleTimeString();
    time.innerHTML = fullTime;

}

function setDate() {
    
    const today = new Date();
    // hämtar year, month, day
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    date.innerText = `${year}-${month}-${day}`;
}


setInterval(setTime, 1000);
setTime();
setDate();