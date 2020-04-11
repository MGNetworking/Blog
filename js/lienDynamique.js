// ajoute d'un listener sur la page 
// ce listener ecoute le chargement   
window.addEventListener('load', () => {

    // recuépration de la recherche lié au choix utilisateur
    let recherche = new URLSearchParams(window.location.search);

    // si un élement id est contenu dans la recherche 
    // lancer par le choix utilisateur
    if (recherche.has('id')) {

        let galerie = recherche.get('id');
        rechercheJson(galerie);

        // si non je le renvoie sur la page de la recherche
    } else {

        // replace le chemin de la page courant vers la nouvelle page
        window.location.pathname = '/webPage/galeries.html';
    }

}, false);

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
        let ficher = fichierJson.nancy[0].image;
        console.log(ficher);

        // faire ma boucle pour mettre mes images

        // créé mes lien <a>
    })

}