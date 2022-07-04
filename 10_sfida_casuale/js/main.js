//faccio una puntata su pari o dispari

const puntata = prompt('Inserisci pari o dispari');

// scelgo un numero compreso tra 1 e 9

const numeroGiocatore = parseInt(prompt('Scegli un numero tra 1 e 9'));


if (numeroGiocatore >= 1 && numeroGiocatore <= 9) {

    // il computer genera un numero casuale tra 1 e 9 (fa la sua "scelta")
    const numeroComputer = Math.floor(Math.random() * 9) + 1;

    console.log('Il computer ha scelto il numero: ' + numeroComputer);

    // sommo i due valori scelti
    const somma = numeroGiocatore + numeroComputer;

    // se la somma è pari vince chi ha puntato sul pari

    let risultato;

    if (somma % 2 == 0) { // restituisce il resto della divisione
        risultato = 'pari';
    } else {
        risultato = 'dispari';
    }

    if (risultato == puntata) {
        alert ('Hai vinto tu!');
    } else {
        alert('Ha vinto il computer!');
    }


} else {
    alert('Numero inserito non valido!');
}