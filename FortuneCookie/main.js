const frame01 = document.querySelector('#frame01');
const frame02 = document.querySelector('#frame02');
const btnBreak = document.querySelector(".fortune-cookie");
const btnReset = document.querySelector(".again");

function handleTryClick(event) {
    event.preventDefault();
    frame01.classList.add('hide');
    frame02.classList.remove('hide');
}

function handleResetClick() {
    frame01.classList.remove('hide');
    frame02.classList.add('hide');
}

btnBreak.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);