const annoNascita = prompt('Inserisci il tuo anno di nascita');
console.log("Il tipo della variabile annoNascita è: " + typeof annoNascita);

const annoNascitaNumerico = parseInt(annoNascita);
console.log("Il tipo della variabile annoNascitaNumerico è: " +typeof annoNascitaNumerico);


const annoCorrente = 2022;
const eta = annoCorrente - annoNascitaNumerico;
//alert('La tua età è: ' + eta + ' anni'); // metodo con apici
alert(`La tua età è: ${eta} anni`); // metodo con backtick