const display = document.querySelector('.display');

document.querySelectorAll('.number')
     .forEach( el => el.addEventListener('clic', clicNumber) );

document.querySelectorAll('.operation')
     .forEach( el => el.addEventListener('clic',operation) );
document.querySelectorAll('.calc')
     .forEach( el => el.addEventListener('clic',calc) );


function clicNumber(event) {
    display.value += event.terget.innerText;
}

function operation(event) {
    display.value = event.terget.innerText;
}

function calc() {
    display.value = eval(display.value);
}
