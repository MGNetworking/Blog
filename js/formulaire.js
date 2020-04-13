/*ce script permet la validation du formlaire  apres voir 
vérifier que les champs ont bien etait compléter */

// recup de l'élément form
let eltForm = document.getElementById('formContact');

// créer un evenement submit
eltForm.addEventListener('submit', (event) => {
    // suprime l'envoi par defaut
    event.preventDefault();
    // recup les éléments
    let champsForm = document.querySelectorAll('input[required],textarea[required]');

    // supprime les message précédant
    champsForm.forEach((elementReset) => {
        resteValidation(elementReset);
    })

    let testeChamps = true;
    // pour chaque éléments
    champsForm.forEach((formElement) => {

        // verif validation champs
        if (!validation(formElement)) {
            testeChamps = false;
            console.log("Valeur : " + testeChamps);
        }
    });

    // envoi si tout les champs sont ok
    if (testeChamps) {
        console.log("submit: " + testeChamps);
        event.target.submit();
    }

}, false);

// check
function validation(formElement) {

    // checkValidity est une methode de HTMLSelection
    if (formElement.checkValidity()) {

        return true;

    } else {

        // ajout de la classe invalid
        formElement.classList.add('invalid');
        // report du message d'erreur
        formElement.previousElementSibling.insertAdjacentHTML('beforeend', `<span class="erreurMessage">${formElement.validationMessage}<span/>`);

        return false;
    }
}

// remise a 0 des champs invalidés
function resteValidation(formElement) {

    // suprime la classe invalide
    formElement.classList.remove('invalid');
    let champsLabel = formElement.previousElementSibling;

    while (champsLabel.firstElementChild) {
        champsLabel.removeChild(champsLabel.firstElementChild);
    }
    // mise a true de propriete voir interface validityState
    formElement.valid = true;
    console.log(formElement);
}