const nameInput = document.querySelector('.name-input');

// skapar en eventListener 
nameInput.addEventListener('keypress', function (e) {
    updateValue();
});

// Skapar en funktion där jag sätter min 'key'(name) lika med inputvalue i lokalStorage
function updateValue() {
    localStorage.setItem('name', nameInput.value)  
}
// skapar en event när sidan laddas så körs min getTitel funktion
document.addEventListener('DOMContentLoaded', function () {
    getTitel()
});

// skapar en funktion där jag hämtar min key.value från lokalStorage
function getTitel() {
      
    let titel = localStorage.getItem('name');  
    nameInput.value = titel;
}
  
