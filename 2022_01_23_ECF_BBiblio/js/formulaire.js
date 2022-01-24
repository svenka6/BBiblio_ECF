// REDIRECTION VERS PAGE JURY OU AUTEUR SELON CHOIX //
// NE MARCHE PAS TOUT LE TEMPS ??????!!!!! //

// Récup URL by GET method
var url1 = location.href;
console.log(url1);
var interval1;
var interval2;



var pressButton = document.getElementById("formValid");
pressButton.addEventListener("click", formulaire);

function formulaire() {
    
    if (url1.includes("Jury")) 
    {
        // alert("Vous souhaitez être Jury");
        redirectionJury();
    }
    else
    {
        // alert("Vous êtes un Auteur/Editeur");
        redirectionAuteur();
    }
}

function redirectionJury() {
    interval1 = setTimeout(pageJury, 1000);
 
function pageJury() {
      window.location.replace("page-jury.html");
    }
}

function redirectionAuteur() {
    interval2 = setTimeout(pageAuteur, 1000);
 
function pageAuteur() {
      window.location.replace("page-auteur.html");
    }
}