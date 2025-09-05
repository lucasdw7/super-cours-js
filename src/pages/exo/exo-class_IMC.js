// Classe pour représenter un utilisateur avec calcul d'IMC
class UserIMC {
  constructor(paramNameUser, paramWeightUser, paramSizeUser) {
    this.nameUser = paramNameUser;  // nom de l'utilisateur
    this.weightUser = paramWeightUser;  // poids (kg)
    this.sizeUser = paramSizeUser;  // taille (m)
  }
  // Méthode qui calcule l'IMC (poids / taille au carré)
  calculIMC() {
    const imc = this.weightUser / this.sizeUser ** 2;
    return imc.toFixed(2); // arrondi à 2 décimales
  }
  // Méthode qui affiche les infos de l'utilisateur dans la console
  display(){
    console.log (`L'utilisateur : `, this.nameUser, `pèse`, this.weightUser,`, mesure`, this.sizeUser,` et a donc un IMC de`, this.calculIMC() );
  }
}

// Création d'une liste d'utilisateurs
let list = [
new UserIMC("Sébastien Chabal", 135, 1.7),
new UserIMC("Escaladeuse", 45, 1.68),
new UserIMC("JOJO ", 300, 2),
new UserIMC("Gontrand ", 90, 1.75),
new UserIMC("Colonel Clock ", 200, 1.75),
new UserIMC("JOsiane de la Vega", 99, 1.55),
];

// On peut aussi faire une boucle sur la liste pour afficher chaque utilisateur
// On fait une boucle sur le tableau "list", qui a pour fonction fléchée 
// de prendre les éléments user et appelle sa méthodes .display()

// list.forEach(user => user.display());
list[0].display();
list[1].display();
list[2].display();
list[3].display();
list[4].display();
list[5].display();
