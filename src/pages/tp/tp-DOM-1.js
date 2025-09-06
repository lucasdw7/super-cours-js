//TODO: via JS afficher le profil  utilisateur dans la page web

// Données utilisateur simulées (objet avec plusieurs propriétés)
const userData = {
    name: 'John SEAGAL',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
};
// Sélection des éléments avec la classe "userProfile"
const card = document.getElementsByClassName("userProfile")
// console.log(card);

// =======================
// Création du container (div principale)
// =======================
const newDiv = document.createElement('div');

// Style appliqué directement en JS (background dégradé, arrondi, ombre portée, etc.)
newDiv.style.backgroundColor = "cyan";
newDiv.style.backgroundImage = "linear-gradient(43deg, #0f033bff 0%, #2d1297ff 46%, #37daecff 100%)";
// newDiv.style.display = 'flex';   // Flexbox possible si besoin
// newDiv.style.flexDirection = 'column';
newDiv.style.padding = '0.75rem';
newDiv.style.width = '45%';
newDiv.style.borderRadius = '1.5rem';
newDiv.style.boxShadow = '4px 8px 21px rgba(12, 16, 134, 0.9)';

// Ajout de la div dans l’élément "app" du DOM
app.append(newDiv);
console.log(newDiv);

// =======================
// Création et insertion de l'image
// =======================
const imgTemplate = document.createElement('img');
imgTemplate.src = userData.img;              // Lien vers l’image
imgTemplate.style.width = '100%';            // L’image prend toute la largeur de la carte
imgTemplate.className='img-fluid';           // Classe CSS personnalisée
imgTemplate.style.borderRadius = '1rem';     // Coins arrondis
newDiv.append(imgTemplate);
console.log(imgTemplate);

// =======================
// Création et insertion du titre (nom)
// =======================
const title =document.createElement('h2');
title.innerText = userData['name'];          // On affiche la valeur de la clé "name"
title.className = "texte";                   // Assignation d’une classe CSS
newDiv.append(title);
console.log(title);

// =======================
// Création et insertion de l'email
// =======================
const mail =document.createElement('p');
mail.innerText=userData['email'];   // On affiche l’email
mail.className = "texte";
newDiv.append(mail);
console.log(mail);


// =======================
// Création et insertion de l’âge
// =======================
const years =document.createElement('p');
years.innerText=userData['age'];     // On affiche l’âge
years.className = "texte";
newDiv.append(years);
console.log(years);

// =======================
// Création et insertion de la date de naissance
// =======================
const bday =document.createElement('p');
bday.innerText=userData['dob'];  // On affiche la date de naissance
bday.className = "texte";
newDiv.append(bday);
console.log(bday);

// =======================
// Création et insertion du statut (active ou non)
// =======================
const pass =document.createElement('p');
pass.innerText=userData['active'];  // On affiche true / false
pass.className = "texte";
newDiv.append(pass);
console.log(pass);

/// Une Version Optimisée (un peu ) améliorable ///////////////////////////

// // ==============================
// // Fonction pour appliquer un style CSS directement en JS
// // ==============================
// function applyStyles(element) {
//     // ⚠️ Ici tu as mis `background-color:` dans la valeur, ça crée une erreur.
//     // En JS il faut juste mettre la couleur. Exemple correct : element.style.backgroundColor = "#4158D0";
//     element.style.backgroundColor = `#4158D0`;

//     // Dégradé appliqué en fond
//     element.style.backgroundImage = `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`;
//     element.style.color = `white`;   // Texte en blanc
//     element.style.width = '500px';   // Largeur fixe
//     element.style.margin = 'auto';   // Centrage horizontal
//     element.style.padding = '2rem';  // Espacement intérieur
// }

// // ==============================
// // Fonction utilitaire pour créer un élément HTML + lui donner du texte + l’ajouter à un parent
// // ==============================
// function createAndAppendElement(tag, text, parentElement) {
//     const element = document.createElement(tag); // Création de l’élément (h1, h2, etc.)
//     element.innerText = text;                    // On lui met le texte passé en paramètre
//     parentElement.append(element);               // On ajoute l’élément au parent
// }

// // ==============================
// // Sélection de la div qui contiendra les infos utilisateur
// // ==============================
// let divUser = document.querySelector('.userProfile');

// // Application du style défini plus haut
// applyStyles(divUser);

// // ==============================
// // Ajout de l’image utilisateur
// // ==============================
// const imgTemplate = document.createElement('img');
// imgTemplate.src = userData.img;      // URL de l’image
// imgTemplate.className = 'img-fluid'; // Classe CSS (ex: Bootstrap)
// divUser.append(imgTemplate);

// // ==============================
// // Ajout des différentes infos de l’objet userData
// // ==============================
// createAndAppendElement('h1', userData.name, divUser);   // Nom
// createAndAppendElement('h2', userData.email, divUser);  // Email
// createAndAppendElement('h3', userData.age, divUser);    // Âge
// createAndAppendElement('h4', userData.dob, divUser);    // Date de naissance
// createAndAppendElement('h5', userData.active, divUser); // Statut actif/inactif

// // Exemple d’ajout d’une donnée qui n’est PAS dans userData
// createAndAppendElement('h5', '44 rue du truc', divUser);