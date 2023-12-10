
const linkInput = document.querySelector('#linkInput');
//const quickLinkButton = document.querySelector('.quick-links-button');
const ulList = document.querySelector('.ulList');

/*
linkInput.addEventListener('click', (e) => {
    const linkValue = linkInput.value;
        
    if (linkValue !== '') {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.href = linkValue;
        a.textContent = linkValue;
        a.target = '_blank';

        a.addEventListener('click', (event) => {
            event.preventDefault();
            window.open(linkValue, '_blank');
        });

        li.appendChild(a);
        ulList.appendChild(li);
        linkInput.value = '';
    }
});
*/

linkInput.addEventListener('mouseout', (e) => {
        // Hantera händelsen när musen går ut från linkInput här, om nödvändigt
});
linkInput.addEventListener('click', (e) => { 
    const linkValue = linkInput.value;
        
    if (linkValue !== '') {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.href = linkValue;
        a.textContent = linkValue;
        a.target = '_blank';

        a.addEventListener('click', (event) => {
            event.preventDefault();
            window.open(linkValue, '_blank');
        });

        li.appendChild(a);
        ulList.appendChild(li);
        linkInput.value = '';
    }
})


    