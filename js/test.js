const linkContainer = document.querySelector('.shortcut-links');
const addLinkBtn = document.querySelector('.add-link-btn');
const urlInput = document.querySelector('.url-input');
const urlName = document.querySelector('.url-name');
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

button.addEventListener('click', () => {
    urlInput.style.display = 'block';
    urlInput.focus();
});

urlInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        urlName.style.display = 'block';
        urlName.focus();
    }
});
/*
function simulateEnterKeyPress(element) {
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    element.dispatchEvent(event);
}
*/

/** 
 *  skapar en 'Enter' eventlistener för min urlName
 * skapar en name-variabeln och tilldelar värdet av urlName.value
 * om 'name' är inte tom
 * visa: 
 * funktionen 'saveLinks' med två argument: urlInput och name
 * funktionen 'displayLink' med två argument: urlInput och name
 * funktionen 'resetInputs'
*/

urlName.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;

    const name = urlName.value;
    if (name !== '') {
        saveLink(urlInput.value, name);
        displayLink(urlInput.value, name);
        resetInputs();
        //getLink(urlInput.value, name)
    } 
   
});

/**
 * skapar en saveLiink funktionen ocg tilldelar 2 argument 'url och name'
 *  pushar in en ny element i min links som är en global variabel med en tom array
 * sätter mina länkar som en sträng i localStorage
*/ 
// saveLink sparar en länk (URL och namn) i local storage och i minnet (links-array)
function saveLink(url, name) {
    //if (!url.match(/^(https?:\/\/)?[a-z0-9-]+(\.[a-z0-9-]+)*(\/[a-z0-9-]+)?$/)) {
        //alert("Ange en giltig URL.");
        //return;
    //}
    links.push({ link: url, name: name });
    localStorage.setItem('links', JSON.stringify(links));
}

/**
 * skapar displayLink funktionen och tilldelar jag den två parameter 
 * den ena är url() och den andra är name(urlName.value)
 * skapar min linkElement variabel och skapar en 'div'
 * ger min div ett class-namn
 * inuti min div(linkElement) skapar jag innerHTML a-tagg och en span
 * tilldelar url till href och namnet som användaren anger till a-taggen
 * sedan appendar jag diven(linkElement) till sin förälder linkContainer(shortcut-links)
 */
// displayLink skapar och visar en länk i DOM baserat på URL och namn
function displayLink(url, name) {
    const linkElement = document.createElement('div');
    linkElement.classList.add('link');
    linkElement.innerHTML = `
        <a href="${url}" target="_blank">${name}</a>
        <span class="close material-symbols-outlined md-15" data-id="${url}">do_not_disturb_on</span>
    `;
    linkContainer.appendChild(linkElement);
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
// Händelselyssnare för att visa/dölja inputs när knappen klickas
addLinkBtn.addEventListener('click', () => {
    
    addLinkBtn.remove()
});



// Händelselyssnare för att ta bort en länk när stängknappen klickas
linkContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('close')) {
        removeLink(e.target.getAttribute('data-id'));
    }
});
