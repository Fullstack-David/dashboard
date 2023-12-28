// Säkerställer att min JavaScript inte körs förräns DOM är helt laddad.
document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'zssxLbwBAssRvlJa066O2P40u9brHdNtHQfY3oqAQjg';
    const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}`;
    //const changeBackground = document.querySelector('.change-background');
    const changeBackgroundBtn = document.querySelector('.change-background-btn');
    const refreshBtn = document.querySelectorAll('.material-symbols-outlined')[1];

    // Funktion för att sätta standardbakgrundsbild på webbsidan.
    function setDefaultBackground() {
        const setDefaultBackgroundUrl = './assets/bg.jpg';
        document.body.style.backgroundImage = `url(${setDefaultBackgroundUrl})`
    }


    // Funktion för att hämta bakgrundsbild från en API och sätta den som webbsidans bakgrund.
    function fetchAndSetBackground() {
    
        // Fetchar min url
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.'); // Om reponsen inte är okej så ska en error kastas med innehåll                
                }
                return response.json(); // retunerar  den parsade JSON-data som en promise           
            })
            .then(data => {
                const imgUrl = data.urls.regular; // skapar varibel imgUrl och tilldelar värdet 'regular' i data-objektet
                document.body.style.backgroundImage = `url(${imgUrl})`; // ändrar body.background med imgUrl-värdet
            })
            .catch(error => console.error('Error:', error)); // Om något inte funkar så fångar jag den med catch-funktion
    };

    setDefaultBackground();


    changeBackgroundBtn.addEventListener('click', fetchAndSetBackground);
    refreshBtn.addEventListener('click', fetchAndSetBackground) 
    
})


