// richiesta numero di km e verifica che il dato inserito sia un valore numerico
let numKm =  parseInt(prompt('quanti km vuoi percorrere?'));
console.log(numKm);
if (isNaN(numKm)) {
    alert('il dato km deve avere un valore numerico');
    numKm = parseInt(prompt('quanti km vuoi percorrere?'));
}
// richiesta numero di eta e verifica che il dato inserito sia un valore numerico
let userAge = parseInt(prompt('quanti anni hai??'));
console.log(userAge)
if (isNaN(userAge)){
    alert('il dato età deve avere un valore numerico');
    userAge = parseInt(prompt('quanti anni hai??'));
}

// calcolo costo biglietto base
let ticketPrice = numKm * 0.21 ;
console.log(ticketPrice)

// richiamo elemento html
const htmlElement = document.getElementById('prezzo');

// calcolo e stampa sconto in base all'eta
if (userAge < 18){
    let discount = ((ticketPrice * 20) / 100);
    let newTicketPrice = (ticketPrice - discount);
    newTicketPrice = newTicketPrice.toFixed(2);
    console.log(newTicketPrice);
    htmlElement.innerHTML +=(newTicketPrice);
} else if(userAge > 65){
    let discount = ((ticketPrice * 40) / 100);
    let newTicketPrice = (ticketPrice - discount);
    newTicketPrice = newTicketPrice.toFixed(2);
    console.log(newTicketPrice);
    htmlElement.innerHTML +=(newTicketPrice);
} else{
    ticketPrice = ticketPrice.toFixed(2);
    console.log(ticketPrice);
    htmlElement.innerHTML +=(ticketPrice);
}







