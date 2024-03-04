// hämtar referense från DOM / date.js
const timeDate = document.querySelector('.time-date');
const date = document.querySelector('.date');
const time = document.querySelector('.time');


// skapar en function för tiden (lokal time)
function setTime() {    
    const today = new Date(); // Skapar en ny instans av Date-objektet och tilldelar det aktuella datumet och tiden till variabeln 'today'.

    const fullTime= today.toLocaleTimeString(); //konverterar det aktuella datumet & tiden till den lokala.
    time.innerHTML = fullTime;
}
// Skapar en function för datum (year, month and day)
function setDate() {    
    const today = new Date();
    // hämtar year, month, day från data-objektet 'today' och sparar de i varsin variabel.
    const monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'oktober', 'november', 'december']
    
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    date.innerHTML = `${day} ${monthNames[month]} ${year}`;
}

setInterval(setTime, 1000); // sätter min setTime function i en interval så att den uppdateras varje sekund.
setTime();
setDate();