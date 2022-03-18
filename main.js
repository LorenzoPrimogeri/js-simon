/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
 tramite il prompt().Dopo che sono stati inseriti i 5 numeri
il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/
//Dichiarazione variabili che possono servire in tutto il codice
let arrayNumeri = [];
const numeroNumeri = 5; //numeri generati 
const genera = document.getElementById("Generatore");
const container = document.getElementById("NumberContainer");
const risultato = document.getElementById("Risultato");
const NumeroUtente = document.getElementById("NumeriUtente");
genera.addEventListener('click', () => start());
//funzione che avvia tutte le funzioni
function start() {
    //reset 
    container.innerHTML = " ";
    risultato.innerText = " ";
    NumeroUtente.innerText = " ";
    //reset 
    arrayNumeri = generaArrayNumeri(5);
    console.log(arrayNumeri);
    stampaNumeri(arrayNumeri, numeroNumeri);
    setTimeout(clearNumber, 5000);
    setTimeout(askandCheckNumber, 6000, arrayNumeri);
    // rimuovo il click dopo il genera
    genera.classList.add("no-pointer");
    setTimeout(pointer, 6000);
}
//funzione che aggiunge il click al bottone
function pointer() {
    genera.classList.remove("no-pointer");
}
//funzione che genera un numero casuale
function generateRandomNumber(min, max) {
    const range = (max - min) + 1;
    return Math.floor(Math.random() * range + min);
}
//funzione che genera un array di numeri casuale
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
//funzione che stampa a video i numeri
function stampaNumeri(arrayNumeri, ripetizione) {
    for (let i = 0; i < ripetizione; i++) {
        const numero = document.createElement("div");
        numero.innerText = arrayNumeri[i];
        numero.classList.add("cell");
        numero.id = "cell-" + (i + 1);
        container.appendChild(numero);
    }

};
//funzione che chiede i numeri al utente e li verifica
function askandCheckNumber(arrayNumeri) {
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
    stampaRisultato(numeriAzzeccati);
}
//funzione che stampa il risultato
function stampaRisultato(numeriAzzeccati) {
    risultato.innerText += "il tuo punteggio è: " + numeriAzzeccati.length;
    NumeroUtente.innerText = "i numeri azzeccati sono " + numeriAzzeccati;;
}
// funzione che rimuove i numeri
function clearNumber() {
    for (let i = 0; i < numeroNumeri; i++) {
        let numeri = document.getElementById("cell-" + (i + 1));
        console.log(numeri);
        numeri.innerHTML = " ";
    }
}