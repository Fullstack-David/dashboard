let url = 'http://www.boredapi.com/api/activity?type=recreational';

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');                
        }
        return response.json();             
    })
    .then(data => {
        const boredApi = document.querySelector('.bored-api');
        
        let para = data.activity;
        let participants = data.participants;
        let price = data.price;
        let link = data.link;
        let aLink;

        //console.log("Data: ", data);

        if (link === '') {
            aLink = ''
        } else {
            aLink = `<p><strong></strong><a href="${link}">Klick here to see how its work!</a></p>`
        }

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
   








