let cinema={
    nomfilm:prompt("entrez le nom du film"),
    heure:prompt("entrez l'heure"),
    salle:prompt("numero de la salle")
}
let monnom=prompt("entrez votre nom")
let salutation="Salut"
salutation+=monnom
let txt=", votre film "
salutation+=txt
salutation+=cinema.nomfilm
let text=" commence a "
salutation+=text
salutation+=cinema.heure
let text2=" dans la salle "
salutation+=text2
salutation+=cinema.salle
console.log(salutation)