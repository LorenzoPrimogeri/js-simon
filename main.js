/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
 tramite il prompt().Dopo che sono stati inseriti i 5 numeri
il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/
let arrayNumeri = [];
let numeroNumeri = 5;
const genera = document.getElementById("Generatore");
const container = document.getElementById("NumberContainer");
const risultato = document.getElementById("Risultato");
const NumeroUtente = document.getElementById("NumeriUtente");
genera.addEventListener('click', () => start());

function start() {
    container.innerHTML = " ";
    risultato.innerText = " ";
    NumeroUtente.innerText = " ";
    arrayNumeri = generaArrayNumeri(5);
    console.log(arrayNumeri);
    stampaNumeri(arrayNumeri, numeroNumeri);
    setTimeout(clearNumber, 5000);
    setTimeout(askNumber, 5000, arrayNumeri);
}
function generateRandomNumber(min, max) {
    const range = (max - min) + 1;
    return Math.floor(Math.random() * range + min);
}
function generaArrayNumeri(length) {
    const registro = [];
    while (registro.length < length) {
        const numero = generateRandomNumber(1, 20);
        if (!registro.includes(numero)) {
            registro.push(numero);
        }
    }
    return registro;
}
function stampaNumeri(arrayNumeri, ripetizione) {
    for (let i = 0; i < ripetizione; i++) {
        const numero = document.createElement("div");
        numero.innerText = arrayNumeri[i];
        numero.classList.add("cell");
        numero.id = "cell-" + (i + 1);
        container.appendChild(numero);
    }

};
function askNumber(arrayNumeri) {
    let i = 0;
    let numeriAzzeccati = [];
    while (i < numeroNumeri) {
        let numero = 0;

        do {
            numero = parseInt(prompt("inserisci il " + (i + 1) + " numero: "));
        } while (isNaN(numero));

        if (arrayNumeri.includes(numero)) {
            if (!numeriAzzeccati.includes(numero)) {
                numeriAzzeccati.push(numero);
            }
            console.log(numeriAzzeccati);
        }
        i++;
    }
    verifica(numeriAzzeccati);
}
function verifica(numeriAzzeccati) {
    risultato.innerText += "il tuo punteggio è:" + numeriAzzeccati.length;
    NumeroUtente.innerText = "i numeri azzeccati sono" + numeriAzzeccati;;
}
function clearNumber() {
    for (let i = 0; i < numeroNumeri; i++) {
        let numeri = document.getElementById("cell-" + (i + 1));
        console.log(numeri);
        numeri.innerHTML = " ";
    }
}