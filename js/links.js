const quickLinks = document.querySelector('.quick-links')
const linkInput = document.getElementById('linkInput');
const ulList = document.querySelector('.ulList');
const materialSymbolsOutlined = document.querySelector('.material-symbols-outlined');


// Enter EventListener 
linkInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addItem();       
    } 
});

// EventListener på min span(add)
materialSymbolsOutlined.addEventListener('click', addItem);

/* Lyssna på när dokumentet är helt laddat och 
redo för manipulation med JavaScript */
document.addEventListener('DOMContentLoaded', getquickLinks);

linkList = [];

// Funktion för att ladda tidigare sparade länkar
function getquickLinks() {
    let linkList = JSON.parse(localStorage.getItem('link')) || []; // Försöker hämta länkar från localStorage, annars sätt till en tom array
   
    linkList.forEach(displayLocal); // visa varje sparade länk på sidan          
}

// Funktion för att lägga till en ny länk
function addItem() {

    // skapar DOM-element för länken
    const li = document.createElement('li');
    const a = document.createElement('a');
    const delBtn = document.createElement('button');
    delBtn.textContent = '-';

    // ger mina element ett class namn    
    li.className = 'list-group-item';
    a.href = linkInput.value;
    a.className = 'link';
    delBtn.className = 'delBtn';
    
    // skall värdet på li synas på skärmen
    li.textContent = a.value;
    a.textContent = linkInput.value; 

    // appendar    
    ulList.appendChild(li);
    li.appendChild(a);
    li.appendChild(delBtn);
    
    // event på knappen 
    delBtn.addEventListener('click', (e) => {
        delBtn.parentElement.remove();
    });
    
    // Lägg till länken i arrayen och uppdatera localStorage
    linkList.push(linkInput.value);
    localStorage.setItem('link', JSON.stringify(linkList));
    
    // tömmer input efetr att användaren har skrivit 
    linkInput.value = ''; 
}

// Funktion för att visa en tidigare sparad länk
function displayLocal(link) {
     // skapar element inut min quick-link
     const li = document.createElement('li');
     const a = document.createElement('a');
     const delBtn = document.createElement('button');
     delBtn.textContent = '-';

     // ger mina element ett class namn    
     li.className = 'list-group-item';
     a.href = link;
     a.className = 'link';
     delBtn.className = 'delBtn';
    

     delBtn.value = link;     
     a.textContent = link; 
 
     // appendar    
     ulList.appendChild(li);
     li.appendChild(a);
     li.appendChild(delBtn);
     
    // Lägg till klick-händelser för att ta bort länk och uppdatera localStorage
    delBtn.addEventListener('click', (e) => {
        delBtn.parentElement.remove();
        linkList = JSON.parse(localStorage.getItem('link'));
        //console.log(linkList)
        linkList = linkList.filter((link) => {
            return link !== e.target.value;            
        });
        localStorage.setItem('link', JSON.stringify(linkList));
    });     
}






