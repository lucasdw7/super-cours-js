//TODO: via JS afficher le profil  utilisateur dans la page web
const userData = {
    name: 'John SEAGAL',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
};
const card = document.getElementsByClassName("userProfile")
// console.log(card);

//création de la div
const newDiv = document.createElement('div');
newDiv.style.backgroundColor = "cyan";
newDiv.style.backgroundImage = "linear-gradient(43deg, #0f033bff 0%, #2d1297ff 46%, #37daecff 100%)";
// newDiv.style.display = 'flex';
// newDiv.style.flexDirection = 'column';
newDiv.style.padding = '0.75rem';
newDiv.style.width = '45%';
newDiv.style.borderRadius = '1.5rem';
newDiv.style.boxShadow = '4px 8px 21px rgba(12, 16, 134, 0.9)';
app.append(newDiv);
console.log(newDiv);

//création de l'img
const imgTemplate = document.createElement('img');
imgTemplate.src = userData.img;
imgTemplate.style.width = '100%';
imgTemplate.className='img-fluid';
imgTemplate.style.borderRadius = '1rem';
newDiv.append(imgTemplate);
console.log(imgTemplate);

//création du titre
const title =document.createElement('h2');
title.innerText=userData['name'];
title.className = "texte"; //Assignation d'une class
newDiv.append(title);
console.log(title);

//création du email
const mail =document.createElement('p');
mail.innerText=userData['email'];
mail.className = "texte";
newDiv.append(mail);
console.log(mail);

//création de l'age
const years =document.createElement('p');
years.innerText=userData['age'];
years.className = "texte";
newDiv.append(years);
console.log(years);

//création de la date de naissance 
const bday =document.createElement('p');
bday.innerText=userData['dob'];
bday.className = "texte";
newDiv.append(bday);
console.log(bday);

//création d'active
const pass =document.createElement('p');
pass.innerText=userData['active'];
pass.className = "texte";
newDiv.append(pass);
console.log(pass);

/// Une Version Optimisée (un peu ) améliorable ///////////////////////////

// function applyStyles(element) {
//     element.style.backgroundColor = `background-color: #4158D0`;
//     element.style.backgroundImage = `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`;
//     element.style.color = `white`;
//     element.style.width = '500px';
//     element.style.margin = 'auto';
//     element.style.padding = '2rem';
// }

// function createAndAppendElement(tag, text, parentElement) {
//     const element = document.createElement(tag);
//     element.innerText = text;
//     parentElement.append(element);
// }

// let divUser = document.querySelector('.userProfile');
// applyStyles(divUser);

// const imgTemplate = document.createElement('img');
// imgTemplate.src = userData.img;
// imgTemplate.className = 'img-fluid';
// divUser.append(imgTemplate);

// createAndAppendElement('h1', userData.name, divUser);
// createAndAppendElement('h2', userData.email, divUser);
// createAndAppendElement('h3', userData.age, divUser);
// createAndAppendElement('h4', userData.dob, divUser);
// createAndAppendElement('h5', userData.active, divUser);
// createAndAppendElement('h5', '44 rue du truc', divUser);