var interval;
//-------- NEW PASSWORD REQUEST --------//
// Ask for a 10 characters Password with Lower, Upper Case and Number
var pressButton = document.getElementById("continue");
pressButton.addEventListener("click", checkPass);
var newPasswd = document.getElementById("newPass");

function checkPass() {
    var passChecker = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,20}$/;
	if (newPasswd.value.match(passChecker)) 
	{
        alert("Votre mot de passe " + newPasswd.value + "a bien été enregistré, pensez à le noter ou mémoriser^^");        
        redirectionFormulaire();
        return true;
	}
	else
	{
        alert("Vous devez entrez un mot de passe qui doit comprendre majuscules et minuscules, 10 caractères minimum et au moins un chiffre ");
        return false;
	}
}

// ------------------------------//
// FUNCTION REDIRECTION
// ------------------------------//

function redirectionFormulaire() {
    interval = setTimeout(pageFormulaire, 1000);
 
function pageFormulaire() {
      window.location.replace("formulaire.html");
    }
}



