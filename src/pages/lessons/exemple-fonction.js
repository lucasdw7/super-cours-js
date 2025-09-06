console.log('-------FUNCTION-------');

// Déclaration d’une fonction classique (nommée)
// Ici la fonction s’appelle maSuperFonction
function maSuperFonction(){
    // Ce que la fonction va exécuter quand on l’appelle
    console.log('Ma fonction fonctionne');
    console.log(10+2); // Exemple : affiche 12
};

// Exécution de la fonction (appel)
maSuperFonction();


// ===============================
// Fonction avec paramètre
// ===============================
// Ici on attend un argument (unNom) qui sera utilisé à l’intérieur
function disMonNom(unNom){
    console.log(unNom);
};

// On appelle la fonction en lui passant un paramètre
disMonNom('JACKO');


console.log('-------PARAMETRE & RETURN-------');

//! EXO 5 : Function
// Fonction qui prend un nombre en paramètre
// Objectif : ajouter 33 à ce nombre et afficher le résultat
function fonctionUn(unTruc){
    console.log(33+unTruc);
}
fonctionUn(7); // => 40


// Fonction qui prend 2 paramètres et affiche leur addition
function fonctionDeux(unTruc,unBidule){
    console.log(unBidule+unTruc);
}
fonctionDeux(10,88); // => 98

// ===============================
// Exemple avec return
// ===============================
// Ici, la fonction calcule une soustraction et RENVOIE le résultat
function moins(a,b){
    return a-b;
};

// Le return permet de stocker le résultat dans une variable
let monResultat = moins(99,20); // => 79
console.log('Monresultat:',monResultat);

// Ou bien utiliser directement dans un console.log()
console.log('exec de la fonction direct dans console.log() : ',moins(99,20));


// ===============================
// PARAMÈTRE PAR DÉFAUT
// ===============================
// Ici, si l’utilisateur n’envoie pas de valeur,
// le paramètre prendra automatiquement "OuiOui"
function sayTheName(unNomBidon='OuiOui'){
    console.log(unNomBidon);
};

// Appel sans argument => utilisera la valeur par défaut
sayTheName(); // => "OuiOui"