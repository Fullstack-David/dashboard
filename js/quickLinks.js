// quickLinks.js
const linkContainer = document.querySelector('.shortcut-links');
const addLinkBtn = document.querySelector('.add-link-btn');
const urlInput = document.querySelector('.url-input');
const urlName = document.querySelector('.url-name');
const linkElementParent = document.getElementById('linkElement-parent');
const faviconDisplay = document.getElementById('faviconDisplay');
let links = [];

function getFavicon(url) {
    const faviconUrl1 = `https://s2.googleusercontent.com/s2/favicons?domain_url=${url}`;
    return faviconUrl1;

}

function updateIconDisplay() {
    const urlInput = document.getElementById('urlInput').value;
    const faviconUrl1 = getFavicon(urlInput)

    document.getElementById('faviconDisplay').src = faviconUrl1;
}

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
    addLinkBtn.style.display = 'none'; // När 'addLinkBtn' klickas, sätts dess display-egenskap till 'none', vilket gömmer knappen från användargränssnittet.

    urlInput.style.display = 'block';  // Sätter 'urlInput' elementets display-egenskap till 'block', vilket gör att inputfältet visas för användaren.

    urlInput.focus(); // Sätter fokus på 'urlInput' elementet, vilket gör att användaren direkt kan börja skriva in en URL utan att behöva klicka i fältet först.
});

urlInput.addEventListener('keydown', (e) => {
    
    if (e.key === 'Enter') {
        try {
            // Försöker skapa en ny URL-instans med värdet från 'urlInput'.
            // Detta är ett sätt att validera URL:en. Om värdet inte är en giltig URL,
            // kommer konstruktorn att kasta ett undantag.
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
   
    const name = urlName.value; // Hämtar värdet (namnet) som användaren har angivit i 'urlName' input-fältet.

// Kontrollerar om det angivna namnet inte är en tom sträng.
    if (name !== '') {
        // Om namnet är giltigt (inte tomt), anropas funktionen 'saveLink' med
        // URL:en från 'urlInput' och det angivna namnet som argument.
        // Detta antyder att länken (URL:en) och dess namn sparas på något sätt, kanske i en databas eller lokal lagring.
        saveLink(urlInput.value, name);
        displayLink(urlInput.value, name);// Anropar funktionen 'displayLink' med URL:en och namnet som argument.
        resetInputs(); // Anropar funktionen resetInput som rensar fältet.

        // döljer urlName och urlInput och återställs inför nästa inmatning.
        urlName.style.display = 'none'
        urlInput.style.display = 'none'
    
    } 
})

// saveLink sparar en länk (URL och namn) i local storage och i minnet (links-array)
function saveLink(url, name) {
    if (isValidInput(url, name)){
        links.push({ link: url, name: name }); // Om inmnatningen är giltig, läggs ett nytt objekt med 'url' och 'namn' till arrayen 'links'
        
        localStorage.setItem('links', JSON.stringify(links));
        // addLinkBtn.style.display = 'block'; 
        addLinkBtn.style.display = 'flex'; 
    } else {
        alert("Ange korrekt URL och/eller ett namn.");
    }   
}

// Retunerar 'true' om url och namn är inte tomma strängar.
function isValidInput(url, name) {
    return url !== '' && name !== ''
}


// displayLink skapar och visar en länk i DOM baserat på URL och namn
function displayLink(url, name) {
    const faviconUrl = getFavicon(url); // Hämtar favicon URL
    const linkElement = document.createElement('div');
    linkElement.classList.add('link');
    linkElement.innerHTML = `
    <li class="listElement">
        <img src="${faviconUrl}" alt="Favicon" class="favicon">
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