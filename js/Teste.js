// créer l'élement a
let elementA = document.createElement('a');
// ajout l'attribut href
elementA.href = 'galeries.html';
// créer un textNode (le texte du lien)
let labelLien = document.createTextNode('go galeries');
// ajout du texte a l'élément a
elementA.appendChild(labelLien);

// créer de la balise li
let liElement = document.createElement('li');
// ajout de l'élément a dans l'élement li
liElement.appendChild(elementA);

// recherche de l'élement ul et y ajouter l'élément li 
document.querySelector('#mainNav ul').appendChild(liElement);