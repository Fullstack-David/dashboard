const quickLinks = document.querySelector('.quick-links')
const linkInput = document.getElementById('linkInput');
const ulList = document.querySelector('.ulList');

// Enter event 
linkInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addItem();       
    } 
});

/* Lyssna på när dokumentet är helt laddat och 
redo för manipulation med JavaScript */

document.addEventListener('DOMContentLoaded', function () {
    getquickLinks();
});

function getquickLinks() {
    let fastLinks = JSON.parse(localStorage.getItem('link'));
    
    fastLinks.forEach(link => {
        displayLocal(link);
    });  
}

linkList = [];

function addItem() {

    // skapar element inut min quick-link
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
    
    linkList.push(linkInput.value);

    // localStorage
    localStorage.setItem('link', JSON.stringify(linkList));
    
    // tömmer input
    linkInput.value = ''; 
}

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
     
     // event på knappen 
    delBtn.addEventListener('click', (e) => {
        delBtn.parentElement.remove();
        linkList = JSON.parse(localStorage.getItem('link'));
        console.log(linkList)
        linkList = linkList.filter((link) => {
            return link !== e.target.value;            
        });
        localStorage.setItem('link', JSON.stringify(linkList));
    });     
}






