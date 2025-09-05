//////// Change du H1 avec l'API Chuck Norris

// Exporte la Fonction asynchrone qui récupère une blague aléatoire de Chuck Norris depuis l'API
export async function apiChuck() {
  // Envoie une requête HTTP GET à l'API
  // fetch() = récupère les données 
  // await = attend que la réponse arrive avant de continuer
  const data = await fetch("https://api.chucknorris.io/jokes/random");

  // Transforme la réponse en objet JSON
  const transformedData = await data.json();

  // Retourne uniquement le texte de la blague
  return transformedData.value;
}
///////////////////////// Correction ////////////////////////////

// Fonction asynchrone qui récupère une blague aléatoire et l'affiche dans le <h1>
export  async function fetchQuotes  () {
    // Sélectionne le premier élément <h1> de la page
    let mainTitle = document.querySelector('h1');
    
    // Vérifie si l'URL est celle de la page d'accueil
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        // if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {

        //Data va récup Toutes les données de l'api de Chuck Norris
        // Envoie une requête à l'API Chuck Norris
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        
        // Logs pour debug : réponse brute, statut et succès
        console.log(response);
        console.log(response.ok);
        console.log(response.status);

        //Plutôt que de Travailler sur la réponse, on va la transformé en objet JS 
        const dataTransformed = await response.json();
        console.log(dataTransformed);

        // Affiche la blague
        mainTitle.innerText = dataTransformed.value; 
    }
    // SALE NOOB ya aucune Gestion d'erreur JEff (note a soi meme)
};