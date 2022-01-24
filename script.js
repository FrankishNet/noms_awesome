
let prenoms = [
    "Evrim",
    "Farah",
    "Grey",
    "Kalin",
    "Lumj",
    "Helle",
    "Jamal"
];

let noms = [
    "Thanar",
    "Everlust",
    "Waprong",
    "Yespire",
    "Srob",
    "Reebsa",
    "Underbough"
];


function pogneRandom(tableau){
    let index = Math.floor(Math.random() * tableau.length);
    let choixRandom = tableau[index];
    return choixRandom;
}

function getNumberOfNames(){
    let nb = document.getElementById("nbNoms").value;
    if( isNaN(Number(nb)) || nb === "" ) {
        return 1;
    }
    return nb;
}

function generateRandomNoms(e){
    e.preventDefault();
    let nbNombs = getNumberOfNames();
    let nomsResult = "";

    for(let i = 0; i < nbNombs; i++){
        let nom = pogneRandom(prenoms) + " " + pogneRandom(noms);
        nomsResult = nomsResult + "<b>"+nom + "</b><br/>";
    }
    document.getElementById("listedenoms").innerHTML = nomsResult;
}

document.getElementById("mainForm").addEventListener("submit",generateRandomNoms);