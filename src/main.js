console.log("Hello World from main.js");

// modification texte du header //////////////////////////////////////////////

// Nom du site
const siteName = "lulu";
// Récupère l'élément avec l'id "site-name"
const username = document.getElementById("site-name");
// Si l'élément existe, change son texte par le nom du site
if (username) {
  username.textContent = siteName;
}

// modification auto de l'année du copyright /////////////////////////////////

// Récupère l'élément avec l'id "copyright-year"
const copyrightElement = document.getElementById("copyright-year");
// Si l'élément existe
if (copyrightElement) {
  // Crée un objet Date basé sur la date et l'heure actuelles, puis extrait uniquement l'année 
  const currentYear = new Date().getFullYear();
  // Affiche le texte avec l'année et le nom du site
  copyrightElement.textContent = 
  `Copyright © ${currentYear} - Tous droits réservés par ${siteName}`;
};

// Variables d'environements ////////////////////////////////////////////////

// on test les variables d'environement

// // Affiche la variable d'environnement "VITE_SOME_KEY"
// // (définie dans un fichier .env et accessible car elle commence par VITE_)
// console.log(import.meta.env.VITE_SOME_KEY); // "123"

// // Essaye d'afficher "DB_PASSWORD"
// // → retourne undefined car seules les variables préfixées par VITE_ sont exposées côté client
// console.log(import.meta.env.DB_PASSWORD); // undefined

// Si on veux voir le resultat il faut mettre "VITE_ " au debut de la variable d'environement.

///// Appel de la fonction pour afficher le timeline /////////////////////////////////
// //Ne marche pas encore ( ne s'affiche pas , me donne une erreur de vite )

// Importe la fonction renderTimeline depuis timelineService.js
// import { renderTimeline } from './services/timelineService.js';

// // Attend que le DOM soit entièrement chargé
// document.addEventListener('DOMContentLoaded', () => {
//   // Lance la fonction pour afficher la timeline
//   // et cible l'élément qui a l'id "timeline"
//   renderTimeline('#timeline');
// });


// Import de la librairie Markdown et DOMPurify pour sécuriser le HTML
import { marked } from 'marked';
import DOMPurify from 'dompurify';
  
  
  // Api Chuck ///////////////////////////////////////////////////////////////
  
  // Importe la fonction apiChuck depuis le fichier welcomeService.js
  import { apiChuck } from "/src/services/welcomeService.js";
  
  // Attend que tout le contenu de la page soit chargé
  document.addEventListener("DOMContentLoaded", async () => {
    // Récupère l'élément avec l'id "h1title"
    let welcome = document.getElementById("h1title");
    // Remplace le texte de l'élément par le résultat de l'API (via apiChuck)
    welcome.innerText = await apiChuck();
  });
  
  //------------ Correction ------//
//  // Importe la fonction fetchQuotes depuis welcomeService.js
// import { fetchQuotes } from './scripts/welcomeService';
// // Appelle immédiatement la fonction pour récupérer et afficher les citations
// fetchQuotes();

// Main de base ////////////////////////////////////////////////////////
  
  //* (base) On est dans /src/main.js
  // ! ⬇ Ancienne version de base (counter)

  // Importation des styles et des fichiers

  // import './style.css';
  // import javascriptLogo from './javascript.svg'
  // import viteLogo from '/vite.svg'
  // import { setupCounter } from './counter.js'

  // Injecte du HTML directement dans l’élément #app
  // document.querySelector('#app').innerHTML = `
  //   <div>
  //     <!-- Logo Vite avec un lien -->
  //     <a href="https://vite.dev" target="_blank">
  //       <img src="${viteLogo}" class="logo" alt="Vite logo" />
  //     </a>
  //     <!-- Logo JavaScript avec un lien -->
  //     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
  //       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
  //     </a>
  //     <h1>Hello Vite!</h1>
  //     <div class="card">
  //       <!-- Bouton compteur -->
  //       <button id="counter" type="button"></button>
  //     </div>
  //     <p class="read-the-docs">
  //       Click on the Vite logo to learn more
  //     </p>
  //   </div>
  // `
  //Active le compteur sur le bouton #counter
  // setupCounter(document.querySelector('#counter'))

