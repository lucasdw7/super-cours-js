//modification texte du header
console.log("Hello World from main.js");

const siteName = "lulu";
const username = document.getElementById("site-name");
if (username) {
  username.textContent = siteName;
}

const copyrightElement = document.getElementById("copyright-year");
if (copyrightElement) {
  const currentYear = new Date().getFullYear();
  copyrightElement.textContent = `Copyright © ${currentYear} - Tous droits réservés par ${siteName}`;
}

// on test les variables d'environement
console.log(import.meta.env.VITE_SOME_KEY); // "123"
console.log(import.meta.env.DB_PASSWORD); // undefined 

// Si on veux voir le resultat il faut mettre "VITE_ " au debut de la variable d'environement.

//* (base) On est dans /src/main.js
// ! ⬇ Ancienne version de base (counter)
// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
// setupCounter(document.querySelector('#counter'))
