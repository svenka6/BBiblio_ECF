var login = "mail@mail.com";
var password = "Fleurdelivre20";
var interval;


var inputLogin = document.getElementById("username");
var inputPassword = document.getElementById("password");
var loginCheck = document.getElementById("submit");

loginCheck.addEventListener("click", loginChecker)

function loginChecker() {
    if (inputLogin.value == login && inputPassword.value == password)
    {
        // alert("Connexion Reussie");
        redirectionFormulaire();
    }
    else if (inputLogin.value == login && inputPassword.value != password) 
    {
        alert("Utilisateur existant mais mot de passe incorrect");
    }
    else if (inputLogin.value != login || inputPassword.value != password)
    {
        alert("Identifiant ou mot de passe incorrect");
    }
}


// REDIRECTION NE MARCHE PAS TOUT LE TEMPS !!! ALERT PROBLEM - CHANGE METHOD > Text

function redirectionFormulaire() {
    // alert("Vous allez être redirigé vers votre espace dans quelques instants");
    interval = setTimeout(pageFormulaire, 2000);
 
function pageFormulaire() {
      window.location.replace("formulaire.html");
    }
}
