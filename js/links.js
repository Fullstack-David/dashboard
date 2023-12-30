const linkContainer = document.querySelector('.shortcut-links');
const addLinkBtn = document.querySelector('.add-link-btn');
const urlInput = document.querySelector('.url-input');
const urlName = document.querySelector('.url-name');
const linkElementParent = document.getElementById('linkElement-parent');
let links = [];


// Funktionen för att hämta länkar från local storage
function getLinksFromLocalStorage() {
    const storedLinks = localStorage.getItem('links');
    if (storedLinks) {
        links = JSON.parse(storedLinks);
        // Iterera över länkarna och visa dem
        links.forEach(link => {
            displayLink(link.link, link.name);
        });
    }
}

// Anropet för att hämta länkar när sidan laddas
document.addEventListener('DOMContentLoaded', () => {
    getLinksFromLocalStorage();
});

addLinkBtn.addEventListener('click', () => {
    addLinkBtn.style.display = 'none'
    urlInput.style.display = 'block';
    urlInput.focus();
});

urlInput.addEventListener('keydown', (e) => {
    
    if (e.key === 'Enter') {
        try {
            const inputUrl = new URL(urlInput.value);           
            urlInput.style.display = 'none'
            urlName.style.display = 'block';
            urlName.focus();  
        } catch (error) {
            alert("Felaktigt format på URL:en");
            
            
        }
             
    }   
});

urlName.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
   
    const name = urlName.value;

    if (name !== '') {
        
        saveLink(urlInput.value, name);
        displayLink(urlInput.value, name);
        resetInputs();
        urlName.style.display = 'none'
        urlInput.style.display = 'none'
    
    } 
})

// saveLink sparar en länk (URL och namn) i local storage och i minnet (links-array)
function saveLink(url, name) {
    if (isValidInput(url, name)){
        links.push({ link: url, name: name });
        localStorage.setItem('links', JSON.stringify(links));
        addLinkBtn.style.display = 'block';
        addLinkBtn.style.display = 'flex';
    } else {
        alert("Ange korrekt URL och/eller ett namn.");
    }
 
    
}

function isValidInput(url, name) {
    return url !== '' && name !== ''
}


// displayLink skapar och visar en länk i DOM baserat på URL och namn
function displayLink(url, name) {
    const linkElement = document.createElement('div');
    linkElement.classList.add('link');
    linkElement.innerHTML = `
    <li class="listElement">
        <a href="${url}" target="_blank">${name}</a>
        <span class="close material-symbols-outlined md-15" data-id="${url}" id="deleteBtn">do_not_disturb_on</span>
    </li>
        `;
    linkElementParent.appendChild(linkElement);
}

// removeLink tar bort en länk från local storage och från DOM baserat på URL
function removeLink(url) {
    links = links.filter((obj) => obj.link !== url);
    localStorage.setItem('links', JSON.stringify(links));
    document.querySelector(`[data-id="${url}"]`).parentElement.remove();
}
// resetInputs återställer värdena i URL-input och namn-input samt ändrar synligheten
function resetInputs() {
    urlInput.value = '';
    urlName.value = '';

}
// Händelselyssnare för att ta bort en länk när stängknappen klickas
linkContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('close')) {
        removeLink(e.target.getAttribute('data-id'));
    }
});
//localStorage.clear()