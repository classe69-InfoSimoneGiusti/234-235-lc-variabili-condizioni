const eta1 = parseInt(prompt('Inserisci eta prima persona'));
const eta2 = parseInt(prompt('Inserisci eta seconda persona'));

if (eta1 > eta2) {
    alert('La prima persona è più grande');
} else if ( eta1 == eta2 ) {
    alert('Le due persona hanno la stessa età');
} else {
    alert('La seconda persona è più grande')
}