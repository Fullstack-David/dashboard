const quickLinks = document.querySelector('.quick-links')
const linkInput = document.getElementById('linkInput');
const ulList = document.querySelector('.ulList');
/*
// click event 
linkInput.addEventListener('click', (e) => {
    addItem()
});
*/

// Enter event 
linkInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addItem()
        console.log(linkInput)
    } else {
        console.log('Error')
    }
});



function addItem() {

    // skapar element inut min quick-link
    const li = document.createElement('li');
    const a = document.createElement('a');
    const delBtn = document.createElement('button');
    delBtn.textContent = 'X';


    // ger mina element ett class namn
    delBtn.className = 'delBtn';
    a.className = 'link';
    li.className = 'list-group-item';
    a.href = linkInput.value;

    // skall cärdet på li synas på skärmen
    li.textContent = a.value;
    //console.log(linkInput)
    console.log(a);
    a.textContent = linkInput.value;

    //appendar
    li.appendChild(delBtn);
    ulList.appendChild(li);
    li.appendChild(a);
    
    // event på knappen 
    delBtn.addEventListener('click', (e) => {
        delBtn.parentElement.remove();
    });
}


