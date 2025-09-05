// compteur de mensonge 

// --- Sélection des éléments du DOM ---
const btnIncrement = document.querySelector('#increment-btn');   // bouton pour ajouter 1 au compteur
const btnReset = document.querySelector('#reset-btn');           // bouton pour réinitialiser (bloqué ici)
const mensongeCounter = document.querySelector('#mensonge-counter'); // élément affichant la valeur du compteur
const mensongeProgressBar = document.querySelector('#mensonge-progress'); // barre de progression liée au compteur

// Initialisation de la barre de progression à 0
mensongeProgressBar.value = 0;

// --- Étape 1 : Récupération de l'état initial ---
// Au chargement, on tente de récupérer le compteur depuis le localStorage
// Si rien n'existe, on initialise à 0
mensongeCounter.innerText = localStorage.getItem('mensonge-counter') || 0;

// --- Événement : Incrémentation ---
btnIncrement.addEventListener('click', () => {
   // console.log('click');
   
   // On récupère la valeur actuelle du compteur
   let counter = mensongeCounter.innerText;
      //  let counter = parseInt(mensongeCounter.innerText);
      // ⚠️ Par défaut `innerText` est une string → il vaut mieux le transformer en nombre
      // counter = parseInt(counter);

    // On incrémente le compteur  
    counter++;
    // On met à jour l'affichage
    mensongeCounter.innerText = counter;
    // On sauvegarde la nouvelle valeur dans le localStorage
    localStorage.setItem('mensonge-counter', counter);
    // (optionnel) on pourrait aussi mettre à jour la barre de progression ici
    // mensongeProgressBar.value = counter;
});

// --- Événement : Reset ---
// Ici le bouton reset est volontairement bloqué pour éviter la triche
btnReset.addEventListener('click', () => {
   alert('Interdit Sale Tricheur !');

//     Si on voudrais que ca marche on pourrer déclacher un événment qui reset le counter avec un confirmation avant 

// btnReset.addEventListener('click', () => {
//    // Optionnel : demander confirmation à l'utilisateur
//     const confirmReset = confirm("Voulez-vous vraiment réinitialiser le compteur ?");
//     if (confirmReset) {
//         // Réinitialise le compteur à 0 dans le DOM
//         mensongeCounter.innerText = 0;

//         // Réinitialise la barre de progression
//         mensongeProgressBar.value = 0;

//         // Supprime ou remet à zéro la valeur dans le localStorage
//         localStorage.setItem('mensonge-counter', 0);
});