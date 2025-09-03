let leH1 = document.querySelector("h1");
console.log(leH1);

let status = false;

leH1.addEventListener("click", () => {
  if (status == false) {
    status = true;
    leH1.textContent = `-- 🥳 --`;
  } else {
    status = false;
    leH1.textContent = `Bonjour`;
  }

  console.log("ok ca click");
});

// correction version classique

// Exercice : DOM Events (on click sur le main title cela modifie son texte)
// const mainTitleElement = document.getElementById('main-title');
// console.log(mainTitleElement);
// mainTitleElement.addEventListener('click', () => {
//   mainTitleElement.textContent = 'Trop un truc De Botch le JS 🫠';
// });

// version optimiser du double click (ternaire)

// const mainTitleElement = document.getElementById("main-title");
// // Exercice : DOM Events (on click sur le main title cela modifie son texte) version avec Booleen (ternaire)
// let isClicked = false;
// mainTitleElement.addEventListener("click", () => {
//   mainTitleElement.textContent = isClicked
//     ? "Trop un truc De Botch le JS 🫠"
//     : "Les DOM Events en JavaScript";
//   isClicked = !isClicked;
// });

// Lessons Event Clavier
const inputTextElement = document.getElementById('input-text');
const renderKeyElement = document.getElementById('renderKey');
// console.log(inputTextElement);
inputTextElement.addEventListener('keyup', (eventDuclavier) => {
    // console.log(eventDuclavier);
    console.log('eventDuclavier.key', eventDuclavier.key);
    renderKeyElement.textContent += eventDuclavier.key;
 });

// length => nombres de caracteres
// disabled btn => désactiver un boutons

const btnClicMeElement = document.getElementById('btn');
const inputText = document.getElementById('input-exo');
const renderclavier = document.getElementById('texteresult');
inputText.addEventListener('keyup', (eventDuclavier) => {
    console.log(eventDuclavier);
    console.log('eventDuclavier.key', eventDuclavier.key);
    // ok mais bof car car interprète aussi les tab backspace etc...
    // renderclavier.textContent += eventDuclavier.key; 
    renderclavier.textContent += eventDuclavier.target.value;
    // if(inputText.value.length >= 5){
    //     btnClicMeElement.disabled = true;
    // }else{
    //     btnClicMeElement.disabled = false;
    // }
    // Ou version optimisée avec condition ternaire
    btnClicMeElement.disabled = inputText.value.length >= 5 ? true : false;
});

////////////////////////exo LocalStorage//////////////////////////////////

const inputDomElement  = document.querySelector('#input-text');
const renderKeyElementDom = document.querySelector('#renderKey');

inputDomElement.value = localStorage.getItem('monSuperTexte');
renderKeyElementDom.textContent = localStorage.getItem('monSuperTexte');

 inputDomElement.addEventListener('keyup', (event) => {
    console.log(event);
    
   //  renderKeyElementDom.textContent += event.target.value;
       renderKeyElementDom.textContent = inputDomElement.value;

    localStorage.setItem('monSuperTexte', event.target.value);
    renderKeyElementDom.innerText = localStorage.getItem('monSuperTexte');
 });
