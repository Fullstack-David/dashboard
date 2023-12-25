//localStorage.setItem('link', JSON.stringify(linkList));
let userNotes = document.getElementById('userNotes')

// Försök hämta användarens anteckningar från localStorage
let storeNotes = JSON.parse(localStorage.getItem('userNotes'));
userNotes.value = storeNotes;

// Försök att hämta befintliga anteckningar från localStorage
let noteStorage = JSON.parse(localStorage.getItem(''));

// Funktion för att spara användarens anteckningar till localStorage
function saveNote() {
    localStorage.setItem('userNotes', JSON.stringify(noteStorage));

}

// Lyssna på ändringar i input-fältet för anteckningar
userNotes.addEventListener('input', function () {
    // Uppdatera anteckningar när användaren skriver
    noteStorage = userNotes.value;
        
    // Spara anteckningarna till localStorage
    saveNote();
});





