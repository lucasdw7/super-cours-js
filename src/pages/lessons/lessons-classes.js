// Création d'une Classe représentant un profil utilisateur
class UserProfile {
    //! Pas besoin de déclarer function devant le constructor et méthodes
    // Le constructor initialise les données d'un utilisateur
    constructor(paramNameUser, paramMailUser, paramPhoneUser) {
    // Attribut en IN MODE indispensable pour créer des new UserProfile
    this.nameUser = paramNameUser;
    this.mailUser = paramMailUser;
    this.phoneUser = paramPhoneUser;
    // Attribut en outMode
    // Attributs dérivés ou calculés
   this.contact = paramPhoneUser + paramMailUser; // concaténation téléphone+mail
        this.resume = this.getProfileInfo(); // infos de l'utilisateur
        this.count = 0; // exemple de compteur (pas encore utilisé)
    // this._nom = nom;  
    }
    // Méthode qui retourne le téléphone (⚠ dépend d'une variable externe "user")
    getPhone(){
        if(user==="connected")
        return this.phoneUser;
    }
    
    // Méthode qui renvoie une description complète de l'utilisateur
    getProfileInfo() {
        console.log('this ', this); // debug : affiche l'objet courant
    return `infos de l'utilisateur : 
            son nom : ${this.nameUser}
            son mail : ${this.mailUser}
            son Tél : ${this.phoneUser}`;
    }
}

// Création de plusieurs utilisateurs avec la classe UserProfile
const exampleUser1 = new UserProfile("José", "jose@gmail.com", "09876543");
console.log(exampleUser1);              // affiche l'objet complet
console.log(exampleUser1.nameUser);     // affiche "José"
console.log(exampleUser1.phoneUser);    // affiche le téléphone

const exampleUser2 = new UserProfile("Sarah", "sarah@gmail.com", "063736252");
console.log(exampleUser2.nameUser);     // affiche "Sarah"
exampleUser2.getProfileInfo();          // affiche les infos de Sarah

const exampleUser3 = new UserProfile("yann", "yann@gmail.com", "098765432");
exampleUser3.getProfileInfo();          // affiche les infos de Yann

console.log('--e-de-de-d', exampleUser1.nameUser); // debug affichage

// Fonction pour afficher les infos d'un utilisateur dans le <h2> de la page
function affichagePageWeb(oneUser) {
    const h2element = document.querySelector("h2");
    h2element.innerText = oneUser.getProfileInfo();
}

// Affiche les infos de José dans le <h2>
affichagePageWeb(exampleUser1);

/////////////// Exemple avec extends() et super() //////

// // Classe de base : profil utilisateur
// class UserProfile {
//   constructor(name, mail, phone) {
//     this.nameUser = name;
//     this.mailUser = mail;
//     this.phoneUser = phone;
//   }

//   // Méthode qui retourne les infos de base
//   getProfileInfo() {
//     return `Nom : ${this.nameUser}, Mail : ${this.mailUser}, Tél : ${this.phoneUser}`;
//   }
// }

// // Classe AdminProfile qui hérite de UserProfile
// class AdminProfile extends UserProfile {
//   constructor(name, mail, phone, role) {
//     // super() appelle le constructor de UserProfile
//     super(name, mail, phone);
//     // Attribut spécifique aux admins
//     this.role = role;
//   }

//   // Méthode supplémentaire pour l’admin
//   getAdminInfo() {
//     // On réutilise getProfileInfo() de la classe parent avec super
//     return `${super.getProfileInfo()}, Rôle : ${this.role}`;
//   }
// }

// // --- Exemple d’utilisation ---
// // Création d’un simple utilisateur
// const user = new UserProfile("Sarah", "sarah@gmail.com", "0612345678");
// console.log(user.getProfileInfo());

// // Création d’un admin
// const admin = new AdminProfile("José", "jose@gmail.com", "098765432", "SuperAdmin");
// console.log(admin.getAdminInfo());
