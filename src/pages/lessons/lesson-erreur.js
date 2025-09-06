// /*Décommentez le code pour l'exécuter */
// Ici, "prenom;" seul provoque une erreur car la variable n'existe pas
// -> Comme ce n'est pas dans un try...catch, l'erreur est bloquante
// -> L'alerte ne s'affichera pas

// prenom;
// alert('Ce message ne s\'affichera pas');


// ----------------------
// Exemple avec try...catch
// ----------------------
try {
    // Ici, "prenom" n'est toujours pas défini => génère une erreur
    prenom;

    // Cette ligne ne s'exécutera jamais car erreur juste avant
    alert('Bonjour');  

} catch(err) {
    // On arrive ici dès qu'une erreur est détectée
    console.log(err);

    // On affiche plusieurs infos utiles de l'erreur
    alert(`Erreur Détectée ALERTE STOPPEZ TOUT: 
        -----------
        Le Nom de l'erreur 
        ${err.name}        // Nom de l'erreur (ex: ReferenceError)
        -----------
        Le Message de l'erreur  :
        ${err.message}     // Message d'erreur (ex: "prenom is not defined")
        ----------
        L'emplacement de l'erreur:
        ${err.stack}`);    // La "stack trace" -> où l'erreur a été levée
}

// Ce message s'affiche car l'erreur a été capturée
alert(`Ce message s'affiche correctement`);


// ----------------------
// Exemple avec une fonction et throw
// ----------------------
/*Décommentez le code pour l'exécuter */
function division() {
    let x = prompt('Entrez un premier nombre (numérateur)');
    let y = prompt('Entrez un deuxième nombre (dénominateur)');
    
    // Vérification : si x ou y ne sont pas des nombres
    if (isNaN(x) || isNaN(y) || x == '' || y == '') {
        // On "lance" une erreur personnalisée
        throw new Error('Merci de rentrer deux nombres');

    } else if (y == 0) {
        // Division par zéro interdite
        // throw new Error('Division par 0 impossible')
        throw console.warn('Division par 0 impossible'); 
        // ⚠️ ici console.warn n'est pas une "erreur" mais un warning
        // donc ça ne se comporte pas exactement comme Error

    } else {
        // Si tout est OK on affiche le résultat
        alert(x / y);
    }
}


// ----------------------
// Execution en try...catch
// ----------------------
try {
    division(); // on exécute la fonction
} catch(err) {
    // Si une erreur a été "throw" dans la fonction, elle est capturée ici
    alert(err.message);
} finally {
    // Le bloc finally s'exécute TOUJOURS, qu'il y ait une erreur ou non
    alert(`Ce message s'affichera quoiqu'il arrive`);
}
