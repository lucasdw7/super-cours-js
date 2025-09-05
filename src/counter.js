// Fonction pour activer un compteur interactif sur un élément HTML
export function setupCounter(element) {
  // Variable pour stocker la valeur du compteur
  let counter = 0

  // Fonction pour mettre à jour le compteur et l'afficher
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}` // Met à jour le contenu HTML
  }

  // Ajoute un écouteur d'événement : à chaque clic, incrémente le compteur
  element.addEventListener('click', () => setCounter(counter + 1))

  // Initialise le compteur à 0
  setCounter(0)
}