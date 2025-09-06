// // On sélectionne la div avec la classe "apiContacter" dans laquelle on affichera les infos récupérées
// const apiDiv = document.querySelector('.apiContacter');

// // Déclaration d'une fonction asynchrone pour contacter une API météo
// const contactApi = async () => {
//     // On fait un appel HTTP vers l'API Open-Meteo avec latitude et longitude en paramètres
//     const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
    
//     // Quelques logs pour vérifier que la requête s’est bien passée
//     console.log(response);         // objet brut de la réponse
//     console.log(response.ok);      // true si la requête est réussie (status 200–299)
//     console.log(response.status);  // code de statut HTTP (ex: 200, 404, 500…)

//     // La réponse (au format JSON brut) est transformée en objet JS exploitable
//     const dataTransformed = await response.json();

//     // Logs pour analyser la structure des données
//     console.log('dataTransformed');
//     console.log(dataTransformed);           // objet complet
//     console.log(dataTransformed.elevation); // exemple : accès direct à une propriété

//     // Affichage dans la page : latitude et longitude récupérées depuis l'API
//     apiDiv.innerText = dataTransformed.latitude + ' ' + dataTransformed.longitude;
// };

// // On appelle la fonction pour exécuter la requête dès le chargement
// contactApi();


//////////////// Version sécurisée avec try catch ////////////////////////


// Sélectionne l'élément HTML qui va afficher les infos récupérées
const apiDiv2 = document.querySelector('.apiContacter');

// Fonction asynchrone sécurisée pour appeler l'API
const contactApiSecurePlus = async () => {
    try {
        // Appel HTTP vers l'API Pokémon (ici on demande "corvaillus")
        const rawData = await fetch('https://tyradex.vercel.app/api/v1/pokemon/corvaillus');
        console.log(rawData); // Log de la réponse brute

        // Vérification manuelle que la réponse est valide
        if (!rawData.ok || rawData.status !== 200) { 
            // Si le statut n'est pas 200 (succès), on log une erreur et on arrête la fonction
            console.error("Erreur lors de la récupération des données : ", rawData.statusText);
            return;
        }

        // Transformation de la réponse JSON en objet JavaScript
        const transformedData = await rawData.json();
        console.log(transformedData); // Log pour vérifier la structure des données

        // Injection du nom FR du Pokémon dans la page HTML
        apiDiv2.innerHTML = transformedData.name.fr;
    } catch (error) {
        // Si une erreur survient (ex: problème réseau), on l'affiche dans la console
        console.error("Erreur lors de l'appel à l'API : ", error);
    }
}

// Appel immédiat de la fonction pour exécuter la requête
contactApiSecurePlus();

// ------------------------------
// 📝 MINI COURS : try...catch en JavaScript
// ------------------------------

/*
   try...catch sert à gérer les erreurs qui pourraient se produire 
   lors de l'exécution d'un bout de code.

   -> "try" : on met le code "à risque" dedans (ex: appel API, calculs, etc.)
   -> "catch" : on récupère l'erreur si quelque chose s'est mal passé
   -> "finally" (optionnel) : s'exécute toujours à la fin, qu'il y ait une erreur ou pas
*/

// Exemple simple :
// Ici on essaye de parser du JSON invalide
// try {
//     console.log("Début du try ✅");

//     // Ici, erreur volontaire car le JSON n'est pas correct
//     JSON.parse("{ mauvais json }");

//     console.log("Cette ligne ne sera jamais exécutée ❌");
// } catch (error) {
//     // Si une erreur est détectée dans "try", on arrive ici
//     console.error("⚠️ Une erreur est survenue :", error.message);
// } finally {
//     // Ce bloc s'exécute toujours (utile pour fermer une connexion, nettoyer des ressources, etc.)
//     console.log("Bloc finally exécuté 🚀");
// }

// console.log("Le programme continue normalement après le try...catch 👌");
