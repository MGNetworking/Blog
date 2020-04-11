// voir : https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON

/* 1er parti recherche est changement du fichier contenant les noms des images
pour le background */

// creation d'un objet request
let request = new XMLHttpRequest();

// chargement de l'URL du fichier JSON
let requestURL = 'http://127.0.0.1:5500/Json/check_background.json';

// ouverture d'une requete , true = asynchrone
request.open('GET', requestURL, true);

// signale au serveur que j'attend du JSON
request.responseType = 'json';

// envoi au serveur de la requete
request.send();

// response du serveur et traitement
request.onload = function() {

    // récupération de la liste 
    var listeImage = request.response;

    // création d'un nombre aléatoire sur taille du fichier
    let imagerecherche = Math.floor(Math.random() * listeImage.image.length);

    // racupération du path de l'image
    let pathImage = listeImage.image[imagerecherche].path;

    // 2eme parti ajout de l'image 
    // recherche de l'élément id mainbody pour l'ajout de l'image
    let mainbody = document.querySelector("#mainbody");

    // modification du background en passante par l'objet style du DOM
    mainbody.style.backgroundImage = `url(/image/background/${pathImage})`;
}