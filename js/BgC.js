// zssxLbwBAssRvlJa066O2P40u9brHdNtHQfY3oqAQjg

// https://api.unsplash.com/photos/random?client_id=${apiKey}


//zssxLbwBAssRvlJa066O2P40u9brHdNtHQfY3oqAQjg

// ¯\_(ツ)_/¯

// data.user.profile_image.large

document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'zssxLbwBAssRvlJa066O2P40u9brHdNtHQfY3oqAQjg';
    
    const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}`;
    const changeBackground = document.querySelector('.change-background');
    const changeBackgroundBtn = document.querySelector('.change-background-btn');

    changeBackgroundBtn.addEventListener('click', function () {
        
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
