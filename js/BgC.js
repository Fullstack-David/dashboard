// Säkerställer att min JavaScript inte körs förräns DOM är helt laddad.
document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'zssxLbwBAssRvlJa066O2P40u9brHdNtHQfY3oqAQjg';   
    const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}`;
    const changeBackground = document.querySelector('.change-background');
    const changeBackgroundBtn = document.querySelector('.change-background-btn');
    const backgrundImg = document.querySelector('.backgrundImg');

    // EventListener på min knapp
    changeBackgroundBtn.addEventListener('click', function () {
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
            document.body.style.backgroundImage = `url(${ imgUrl })`; // ändrar body.background med imgUrl-värdet
        })
        .catch(error => console.error('Error:', error)); // Om något inte funkar så fångar jag den med catch-funktion
    })

    // EventListener på min reload image
    backgrundImg.addEventListener('click', function () {
        
        fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');                
            }
            return response.json();             
        })
        .then(data => {
            console.log(data)
            const imgUrl = data.urls.regular;
            document.body.style.backgroundImage = `url(${ imgUrl })`;
               
            console.log(imgUrl)
        })
        .catch(error => console.error('Error:', error));
    })
})
