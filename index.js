let contenuTitre="Bonjour"
let contenuparagraphe="comment vous allez?"

let nouveauTitre=document.createElement("h1")
let nouveauparagraphe=document.createElement("p")
let nouvellediv=document.createElement("div")

nouveauTitre.textContent=contenuTitretitre
nouveauparagraphe.textContent=contenuparagraphe

nouvellediv.appendChild(contenuTitre)
nouvellediv.appendChild(contenuparagraphe)
let body=document.querySelector("body")
body.innerHTML=div
body.appendChild(nouvellediv)