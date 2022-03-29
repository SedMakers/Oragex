var attente;
var nombre_qui_change;
var resultat;

function minutageGo(){
    nombre_qui_change = window.document.formulaire.minuteur.value;
    nombre_qui_change = parseInt(nombre_qui_change) + 1;
    window.document.formulaire.minuteur.value = nombre_qui_change;

    temps = nombre_qui_change;
    attente = setTimeout("minutageGo()", 1000);
}

function afficher(){
    clearTimeout(attente);

   
    resultat = (nombre_qui_change/3).toFixed(2); 
    nombre_qui_change = 0;
    window.document.formulaire.minuteur.value = nombre_qui_change;
    window.document.reponse.affichage.value = "Vous etes a : " + resultat + " km de l'orage.";
    //alert( resultat + " km");
}