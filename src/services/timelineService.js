///////////////////Exo V1 //////////////////////////////

// //imortation des données du tableau de la timeline depuis un autre fichier 
// import { timelineSteps } from "./timelineDataService";


// // Fonction pour générer la timeline dans un élément ciblé par son ID
// export function renderTimeline(id) {
//   // Sélectionne l'élément HTML cible (ex: <ul id="timeline">)
//   const cible = document.querySelector(id);

//   // Parcourt chaque étape de la timeline
//   timelineSteps.forEach((element) => {
//     // Crée un nouvel élément <li> pour cette étape
//     let li = document.createElement("li");

//     // Crée une div centrale pour la ligne de la timeline
//     let div = document.createElement("div");
//     div.classList.add("timeline-middle"); // ajoute la classe CSS
//     li.appendChild(div); // ajoute la div au <li>
//     console.log(cible); // debug : affiche l'élément cible dans la console

//     // Crée une div pour le texte de l'étape
//     let divtext = document.createElement("div");
//     divtext.classList.add(`timeline-${element.side}`); // position gauche/droite

//     // Crée un élément <time> pour afficher la date
//     let divtime = document.createElement("time");

//     // Crée une div pour le titre
//     let divtitle = document.createElement("div");

//     // // ajouter l'élément <li> à cible
//     // cible.append(li);
//   });
// }

/////////////////// Coorection //////////////////////////////

    // // src/services/timelineService.js
// Import des données de la timeline
// import { timelineSteps } from './timelineData.js';
// Import de DOMPurify pour sécuriser le HTML généré
// import DOMPurify from 'dompurify';

// Fonction pour générer et afficher la timeline dans un container
export function renderTimeline(containerId) {
    // Sélectionne l'élément HTML cible où afficher la timeline
    const timelineEl = document.querySelector(containerId);
    console.log(timelineEl); // debug : vérifie l'élément cible

    try {
        // Génération dynamique des items tkt on DOMPurifie le innerHTML
        // Génère le HTML pour chaque item de la timeline
        // map() transforme chaque item en bloc HTML
        // join("") assemble tous les items en une seule chaîne
        // DOMPurify.sanitize() sécurise le HTML pour éviter les failles XSS
        timelineEl.innerHTML = DOMPurify.sanitize(
            timelineSteps.map((item, index) => `
                <li>
                    ${index !== 0 ? "<hr />" : ""} <!-- Sépare les items par une ligne sauf le premier -->
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                             fill="currentColor" class="h-5 w-5">
                            <path fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="timeline-${item.side} mb-10 ${item.side === "start" ? "md:text-end" : ""}">
                        <time class="font-mono italic">${item.year}</time> <!-- Affiche la date -->
                        <div class="text-lg font-black">${item.title}</div> <!-- Affiche le titre -->
                        ${item.text} <!-- Affiche la description -->
                    </div>
                </li>
            `).join("")
        );
    } catch (error) {
        // Gestion d'erreur si le rendu échoue
        console.log("Erreur lors du rendu de la timeline: faudrais optimiser", error);
        if (timelineEl) {
            timelineEl.innerHTML = "<p>Désolé, la timeline n'a pas pu être chargée.</p>";
        }
    };
}
