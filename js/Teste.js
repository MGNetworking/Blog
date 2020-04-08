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



// recherche de l'élément id mainbody
let mainbody = document.getElementById("mainbody");

// modification du background en passantr par l'objet style du DOM
mainbody.style.backgroundImage =
    'url(/image/background/green_forest_trees_summer_mist-wallpaper-2560x1440.jpg)';

// cette methode n'est pas recommandé
mainbody.setAttribute('style', 'background-image : url(/image/background/green_forest_trees_summer_mist-wallpaper-2560x1440.jpg) ');