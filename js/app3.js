//////////////
/// EXO 3 ///
/////////////

var titre = document.getElementById("page-title");
var result = document.getElementById("result");

titre.innerHTML="Exo 01 JS";
titre.style.color="white";

// Demande du Pseudo et mot de passe
var pseudo = prompt("Votre Pseudo : ");
var mdp = prompt("Votre mot de passe : ");

// Comparaison des données et réponses
 if (pseudo === mdp){
  alert("Connexion réussie !");
  result.innerHTML = "Connexion réussie !";
  result.style.color="green";
 }
 else{
  alert("Erreur, veuillez recommencer");
  result.innerHTML = "Erreur, veuillez recommencer";
  result.style.color="red";
 }
