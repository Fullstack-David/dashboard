let url = 'https://www.boredapi.com/api/activity?type=recreational';

fetch(url)
    .then(response => {
        if (!response.ok) { // kontrollerar om svaret är ok
            throw new Error('Network response was not ok.'); // kasta ett fel om svaret inte är ok            
        }
        return response.json(); // Returnera JSON-data om svaret är ok            
    })
    .then(data => {
        const boredApi = document.querySelector('.bored-api');
        
        let para = data.activity;
        let participants = data.participants;
        let price = data.price;
        let link = data.link;
        let aLink;

        // Om länken är tom, sätt aLink till en tom sträng, annars skapa en länk
        if (link === '') {
            aLink = ''
        } else {
            aLink = `<p><strong></strong><a href="${link}">Klick here to see how its work!</a></p>`
        }

        // Uppdatera HTML för DOM-elementet med klassen 'bored-api'
        boredApi.innerHTML = `
        <div class = 'header'>
            <h2>The Bored API</h2>
            <h4>Let's find you something to do</h4>
        </div>
        <div class="boredInput">         
          <p><strong>Activity:</strong> ${para}</p>
          <p><strong>Participants:<strong> ${participants}</p>
          <p><strong>Price:</strong> ${price} $</p>
          ${aLink}
        </div>
        `
        
    })

    .catch(error => {
        console.error('Error', error);
    })
  








