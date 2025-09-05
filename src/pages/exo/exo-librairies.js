//lesson event de clavier et librairies

// Import d'une collection d'easter eggs (non utilisée ici mais prête à être utilisée)
import collection from 'easter-egg-collection'


// Import de la librairie Markdown et DOMPurify pour sécuriser le HTML
import { marked } from 'marked';
import DOMPurify from 'dompurify';

// --- Sélection des éléments du DOM ---
const inputTextElement = document.getElementById('input-text');  // champ texte où l'utilisateur tape
const renderKeyElement = document.getElementById('renderKey');  // élément où afficher le texte formaté
// console.log(inputTextElement);

// --- Événement : à chaque touche relâchée ---
inputTextElement.addEventListener('keyup', (eventDuclavier) => {
    // eventDuclavier contient les informations de la touche pressée
    console.log('eventDuclavier.key', eventDuclavier.key);  // debug : affiche la touche tapée
    // console.log(eventDuclavier);

    // Convertit le texte de l'input en HTML Markdown sécurisé
    // marked.parse() transforme Markdown → HTML
    // DOMPurify.sanitize() nettoie le HTML pour éviter les failles XSS
    renderKeyElement.innerHTML = DOMPurify.sanitize( marked.parse(inputTextElement.value));
   
    // ⚠ Optionnel : si tu voulais juste afficher la touche pressée, tu pourrais utiliser :
    // renderKeyElement.textContent += eventDuclavier.key;
});