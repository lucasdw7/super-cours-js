// compteur dde base 

// compteur de mensoges V1
const btnIncrement = document.querySelector('#increment-btn');
const btnReset = document.querySelector('#reset-btn');
const mensongeCounter = document.querySelector('#mensonge-counter');
const mensongeProgressBar = document.querySelector('#mensonge-progress');
mensongeProgressBar.value = 0;

// Step 1 on arrive dans la page on essais de récupérer le nombre de mensonge dans le localStorage sinon 0 
mensongeCounter.innerText = localStorage.getItem('mensonge-counter') || 0;

btnIncrement.addEventListener('click', () => {
   // console.log('click');
   
   //  let counter = parseInt(mensongeCounter.innerText);
    let counter = mensongeCounter.innerText;
    counter++;
    mensongeCounter.innerText = counter;
    localStorage.setItem('mensonge-counter', counter);
});

btnReset.addEventListener('click', () => {
   alert('Interdit Sale Tricheur !');
});