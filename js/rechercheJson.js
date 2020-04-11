// fonction qui recherche le fichier Json d'affichage
function rechercheJson(ville) {
    // requete permettant d'aller cherché le fichier
    fetch(`/Json/${ville}.json`).then(function(fetchReponse) {
        // si le fichier et trouver 
        if (fetchReponse.ok) {
            // renvoie du fichier
            return fetchReponse.json();
        } else {
            // si non message log 
            console.log("le fichier permettant l'affichage n'a pas etait trouver");
        }
        // recup fichier Json
    }).then(function(fichierJson) {
        console.log(fichierJson);
        // créer element ul
        let elementUl = document.createElement('ul');
        for (let i = 0; i < 4; i++) {
            //créer element img
            let elementIMG = document.createElement('img');
            // ajoute des attributs img
            elementIMG.src = fichierJson.ville[i].href;
            elementIMG.alt = fichierJson.ville[i].alt;
            elementIMG.title = fichierJson.ville[i].title;
            elementIMG.addEventListener('click', imageAction, false);
            // créer element li
            let elementLi = document.createElement('li');
            elementLi.appendChild(elementIMG);
            // ajoute de li a ul
            elementUl.appendChild(elementLi);
            // recherche local des element a ajouté
            let tagAjout = document.querySelector('.galleries main');
            // ajout a  de ul dans balise main
            tagAjout.appendChild(elementUl);
        }
    });
}