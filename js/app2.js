//////////////
/// EXO 1 ///
/////////////

var titre = document.getElementById("page-title");
var result = document.getElementById("result");

titre.innerHTML="Exo 01 JS";
titre.style.color="white"

// Demande du Prénom
 var prenom = prompt("Quel votre Prénom ?");

// Alert Bonjour ...
 alert("Bonjour " + prenom + " !");

// Petit coucou
result.innerHTML = "Bonjour " + prenom + ". J'espère que vous allez bien.";

//////////////
/// EXO 2 ///
/////////////

// Utilisation de CSS en JS
document.getElementById("div1").style.borderColor="blue";
document.getElementById("div2").style.borderColor="grey";
document.getElementById("div3").style.borderColor="red";
