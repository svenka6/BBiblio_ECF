//-------- Recupération Email & Génération Password --------//
// Récup URL by GET method
var url = location.href;

// Condition to avoid errors when submitting new Password //

    var urlSplit = url.split("=");
    var loginSplit = urlSplit[2].split("&");
    // Replace %40 by @ to get email
    var emailLogin = loginSplit[0].replace("%40", "@");
    // Display email on screen
    var loginInfo = document.getElementById("login").innerHTML = "LOGIN : " + emailLogin;

    // Generate random password
    var randomPassword = Math.random().toString(24).slice(-10);
    // Display password on screen
    document.getElementById("password").innerHTML = "PASSWORD : " + randomPassword;


