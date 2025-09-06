///////////// Fonction pour créer une carte d'équipe ///////////////////

// Tableau contenant les données de l'équipe
const teamData = [
  {
    Name: "Margot",
    Email: "margot.ruppert@gmail.com",
    Img: "https://picsum.photos/200",
  },
  {
    Name: "Lucas",
    Email: "lulu.delpeyrou@gmail.com",
    Img: "https://picsum.photos/200",
  },
  {
    Name: "Maxime",
    Email: "maxime.cloarec@gmail.com",
    Img: "https://picsum.photos/200",
  },
];

// Sélection de l'élément DOM qui accueillera les profils
let users = document.getElementById("userProfile");

// Parcours de chaque utilisateur du tableau teamData
teamData.forEach((user) => {
  // Création d'une carte (container pour chaque user)
  let card = document.createElement("div");
  // Ajout de classes Tailwind/DaisyUI pour le style
  card.classList.add("card-sm");
  card.classList.add("card-border");
  card.classList.add("bg-zinc-100");
  card.classList.add("text-neutral");
  card.classList.add("w-fit");
  card.classList.add("rounded-box");

  // Parcours de toutes les propriétés de l'objet (key) de user (Name, Email, Img)
  for (const key in user) {
    if (key != "Img") {
      // Si ce n'est PAS une image → créer un <p> pour le texte
      let text = document.createElement("p");
      text.classList.add("p-4");
      text.innerText = user[key]; // affiche Name ou Email
      card.append(text);
    } else {
      // Si c'est "Img" → créer un <img> pour l'image
      let img = document.createElement("img");
      img.classList.add("p-4");
      img.src = user[key]; // définit la source de l'image
      card.append(img);
    }
  }
  // On ajoute la carte de l'utilisateur dans la section "users"
  users.append(card);
});

// Sélection d'un container supplémentaire (peut-être utilisé plus tard pour d'autres affichages)
const cardContainer = document.getElementById("team-container");

//////////////////////Correction//////////////////////////////

// // Fonction pour créer une carte d'équipe
// function createTeamCard(member) {
//     // La fonction retourne du code HTML
//     return `
//         <div class="card bg-base-100 w-96 shadow-sm">
//             <figure>
//                 <img src="${member.Img}" alt="${member.Name}" />
//             </figure>
//             <div class="card-body">
//                 <h2 class="card-title">${member.Name}</h2>
//                 <p><strong>Rôle:</strong> ${member.role}</p>
//                 <p>${member.bio}</p>
//                 <div class="card-actions justify-end">
//                     <a href="mailto:${member.Email}" class="btn btn-primary">Contacter</a>
//                 </div>
//             </div>
//         </div>
//     `;
// }
// // Générer et ajouter les cartes au conteneur
// if (cardContainer) {
//     // Boucle "Pour chaque membre de l'équipe"
//     teamData.forEach(member => {
//         // On génère la carte HTML et on nettoie avec DOMPurify pour éviter les injections
//         cardContainer.innerHTML += DOMPurify.sanitize( createTeamCard(member));

//         // Variante possible si tu veux une autre version de la fonction
//         // cardContainer.innerHTML += DOMPurify.sanitize( createTeamCardProper(member));
//     });
// }
