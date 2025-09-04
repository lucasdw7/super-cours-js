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
]

let users = document.getElementById("userProfile");

teamData.forEach(user => {
    let card = document.createElement("div")
    card.classList.add("card-sm");
    card.classList.add("card-border");
    card.classList.add("bg-zinc-100");
    card.classList.add("text-neutral");
    card.classList.add("w-fit");
    card.classList.add("rounded-box")
    for (const key in user) {
        if(key != "Img"){
            let text= document.createElement('p');
            text.classList.add("p-4")
            text.innerText = user[key];
            card.append(text);
        } else {
            let img = document.createElement('img');
            img.classList.add("p-4")
            img.src = user[key];
            card.append(img);
        }
    }
    users.append(card);
});

const cardContainer = document.getElementById('team-container');


//////////////////////Correction//////////////////////////////

// // Fonction pour créer une carte d'équipe
// function createTeamCard(member) {
//     return `
//     <img
//         <div class="card bg-base-100 w-96 shadow-sm">
//             <figure>
//                 <img src="${member.image}" alt="${member.name}" />
//             </figure>
//             <div class="card-body">
//                 <h2 class="card-title">${member.name}</h2>
//                 <p><strong>Rôle:</strong> ${member.role}</p>
//                 <p>${member.bio}</p>
//                 <div class="card-actions justify-end">
//                     <a href="mailto:${member.email}" class="btn btn-primary">Contacter</a>
//                 </div>
//             </div>
//         </div>
//     `;
// }
// // Générer et ajouter les cartes au conteneur
// if (cardContainer) {
//     teamData.forEach(member => {
//         cardContainer.innerHTML += DOMPurify.sanitize( createTeamCard(member));
//         // cardContainer.innerHTML += DOMPurify.sanitize( createTeamCardProper(member));
//     });
// }