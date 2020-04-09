// recherche element dans le DOM de mes images
let element = document.querySelectorAll('#mainContant ul li img');

for (let i = 0; i < element.length; i++) {

    element[i].addEventListener('click', imageAction, false);
    console.log(element[i]);
}

// evenement image
function imageAction(event) {

    // recupération de la cible (image click)
    let image = event.target;

    // recherche dans la DOM l'élément ou l'on ajout la future
    // image agrandi
    let tagfigure = document.getElementById('agrandissement');
    let tagImg = tagfigure.querySelector('img');

    // ajoute de la source clické a celle a agrandire
    tagImg.src = image.src;

    tagfigure.classList.toggle(`visible`);

    console.log(tagImg);
}