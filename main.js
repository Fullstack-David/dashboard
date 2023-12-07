const input = document.querySelector('txtField')
const nameId = document.querySelector('nameId')
function check() {
    document.getElementById('txtField').value='new value here'
} 

input.addEventListener('click', function () {
    input.innerHTML = nameId.value;
    console.log(input);
});
