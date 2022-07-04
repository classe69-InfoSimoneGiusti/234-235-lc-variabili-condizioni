const parola1 = prompt('Inserisci la prima parola');
const parola2 = prompt('Inserisci la seconda parola');

// per calcolare la lunghezza di una stringa, posso usare il metodo .lenght sulla variabile,
// esempip parola1.lenght

if ( parola1.length > parola2.length) {

    alert('La parola 1 è più lunga!');

} else if (parola2.length > parola1.length) {

    alert('La parola 2 è più lunga');

} else {

    alert('Le parole hanno la stessa lunghezza');
    
}