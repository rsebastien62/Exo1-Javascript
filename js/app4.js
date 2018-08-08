//////////////
/// EXO 3 ///
/////////////

var titre = document.getElementById("page-title");
var contain = document.getElementById("contain");
var result = document.getElementById("result");
var nav = document.getElementById("nav");

titre.innerHTML="Exo 01 JS";
titre.style.color="white";

// Demande de choisir un nombre entre 1 et 4
var nombre = prompt("Choissisez un nombre entre 1 et 4 : ");

if (nombre === "1") {
   document.body.style.backgroundImage = "url('img/Londre.jpg')";
   nav.style.display="none";
   contain.style.backgroundColor="rgba(0,0,0,0.5)";
   result.innerHTML = "Vous vous retrouvez téléporté à Londre ! Ce n'est très pas loin mais ca évite de prendre le tunnel sous la manche ;)";
   result.style.color= "aliceblue";
   result.style.fontSize="1.2em";
   result.style.fontWeight="bold";
   result.style.position="absolute";
   result.style.top="150px";
    result.style.textAlign="center";
 }
  else if (nombre === "2") {
   document.body.style.backgroundImage = "url('img/Hawaii.jpg')";
   nav.style.display="none";
   contain.style.backgroundColor="rgba(0,0,0,0.5)";
   result.innerHTML = "Vous vous retrouvez téléporté à Hawaii au millieu des tortues de mer ! Vous choisi le meilleur nombre, bonne vacance :)";
   result.style.color= "aliceblue";
   result.style.fontSize="1.2em";
   result.style.fontWeight="bold";
   result.style.position="absolute";
   result.style.top="150px";
      result.style.textAlign="center";
 }
 else if (nombre === "3") {
   document.body.style.backgroundImage = "url('img/Japon.jpg')";
   nav.style.display="none";
   contain.style.backgroundColor="rgba(0,0,0,0.5)";
   result.innerHTML = "Vous vous retrouvez téléporté au Japon féodal ! Ce qui ressemble être des samourais vous regardent bizarrement.<br>Je serai vous, je me mettrai à courir XD";
   result.style.color= "aliceblue";
   result.style.fontSize="1.2em";
   result.style.fontWeight="bold";
   result.style.position="absolute";
   result.style.top="150px";
   result.style.textAlign="center";
 }
 else if (nombre === "4") {
   document.body.style.backgroundImage = "url('img/Futur.png')";
   nav.style.display="none";
   contain.style.backgroundColor="rgba(0,0,0,0.5)";
   result.innerHTML = "Vous vous retrouvez téléporté dans le futur ! :o";
   result.style.color= "aliceblue";
   result.style.fontSize="1.2em";
   result.style.fontWeight="bold";
   result.style.position="absolute";
   result.style.top="150px";
   result.style.textAlign="center";
 }
 else{
   document.body.style.backgroundImage = "url('img/Espace.jpg')";
   nav.style.display="none";
   contain.style.backgroundColor="rgba(0,0,0,0.5)";
   result.innerHTML = "J'ai un nombre entre 1 et 4 !<br>Vous vous retrouvez téléporté dans l'espace en dehors de la voie lacté !<br>Ba bravo maintenant comment vous allez revenir ? :(";
   result.style.color= "aliceblue";
   result.style.fontSize="1.2em";
   result.style.fontWeight="bold";
   result.style.position="absolute";
   result.style.top="150px";
   result.style.textAlign="center";
 }
