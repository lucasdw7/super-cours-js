// Sélectionne le premier élément <h1> de la page
let leH1 = document.querySelector("h1");
console.log(leH1); // debug : affiche le h1 dans la console

// Variable pour suivre l'état du texte (toggle)
let status = false;

// Événement : à chaque clic sur le <h1>
leH1.addEventListener("click", () => {
  if (status == false) {
    // Si status est false → on change le texte et on passe status à true
    status = true;
    leH1.textContent = `-- 🥳 --`;
  } else {
    // Sinon → on remet le texte original et status à false
    status = false;
    leH1.textContent = `Bonjour`;
  }

  console.log("ok ca click"); // debug : confirme que le clic a été détecté
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

// Lessons Event Clavier ////////////////////////////////

// Sélectionne le champ texte où l'utilisateur tape
const inputTextElement = document.getElementById('input-text');

// Sélectionne l'élément où afficher les touches tapées
const renderKeyElement = document.getElementById('renderKey');

// Événement : à chaque touche relâchée (keyup)
inputTextElement.addEventListener('keyup', (eventDuclavier) => {
    // eventDuclavier contient les infos de la touche pressée
    console.log('eventDuclavier.key', eventDuclavier.key); // debug : affiche la touche tapée

    // Ajoute la touche pressée à l'élément cible
    renderKeyElement.textContent += eventDuclavier.key;
});

// length => nombres de caracteres ou d'éléments
// disabled btn => désactiver un boutons

// Sélectionne le bouton
const btnClicMeElement = document.getElementById('btn');
// Sélectionne l'input texte où l'utilisateur tape
const inputText = document.getElementById('input-exo');
// Sélectionne l'élément où afficher le texte saisi
const renderclavier = document.getElementById('texteresult');

// Événement : à chaque touche relâchée dans l'input
inputText.addEventListener('keyup', (eventDuclavier) => {
    console.log(eventDuclavier);  // debug : affiche l'événement complet
    console.log('eventDuclavier.key', eventDuclavier.key);  // debug : affiche juste la touche pressée

    
    // ok mais bof car car interprète aussi les tab backspace etc...
    // renderclavier.textContent += eventDuclavier.key; 
    // ⚠ Note : si on utilisait eventDuclavier.key directement, ça inclurait aussi Tab, Backspace, etc.
    // renderclavier.textContent += eventDuclavier.key; // ancienne version
    
    // Version améliorée : on affiche directement la valeur de l'input
    renderclavier.textContent += eventDuclavier.target.value;

    // if(inputText.value.length >= 5){
    //     btnClicMeElement.disabled = true;
    // }else{
    //     btnClicMeElement.disabled = false;
    // }
    // Ou version optimisée avec condition ternaire

    // ⚡ Gestion de l'état du bouton
    // Si la longueur du texte >= 5, le bouton devient désactivé, sinon activé
    // Version ternaire plus compacte
    btnClicMeElement.disabled = inputText.value.length >= 5 ? true : false;
});

////////////////////////exo LocalStorage//////////////////////////////////

// Sélection des éléments DOM
const inputDomElement  = document.querySelector('#input-text');     // input texte où l'utilisateur tape
const renderKeyElementDom = document.querySelector('#renderKey');   // élément où afficher le texte saisi

// Au chargement de la page, on récupère le texte stocké dans le localStorage
inputDomElement.value = localStorage.getItem('monSuperTexte');      // remplit l'input avec le texte sauvegardé
renderKeyElementDom.textContent = localStorage.getItem('monSuperTexte'); // affiche le texte sauvegardé dans l'élément de rendu

// Événement : à chaque touche relâchée
 inputDomElement.addEventListener('keyup', (event) => {
    console.log(event);  // debug : affiche l'événement complet
    
    // Met à jour le texte affiché avec la valeur actuelle de l'input
    renderKeyElementDom.textContent = inputDomElement.value;
    //  renderKeyElementDom.textContent += event.target.value;
    
    // Sauvegarde le texte actuel dans le localStorage
    localStorage.setItem('monSuperTexte', event.target.value);

// Met à jour à nouveau le rendu avec ce qui est stocké (utile si on voulait confirmer la persistance)
    renderKeyElementDom.innerText = localStorage.getItem('monSuperTexte');
   });
