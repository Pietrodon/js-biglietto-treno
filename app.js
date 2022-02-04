let numKm =  parseInt(prompt('quanti km vuoi percorrere?'));
console.log(numKm);
// let userAge = 0

if (isNaN(numKm)) {
    alert('il dato km deve avere un valore numerico');
    numKm = parseInt(prompt('quanti km vuoi percorrere?'));
} else {


}


let userAge = parseInt(prompt('quanti anni hai??'));
console.log(userAge)
if (isNaN(userAge)){
    alert('il dato età deve avere un valore numerico');
    userAge = parseInt(prompt('quanti anni hai??'));
}


const ticketPrice = numKm * 0.21 ;
console.log(ticketPrice)

if ( userAge < 18 ){
    let discount = ((ticketPrice * 20) / 100);
    let newTicketPrice = (ticketPrice - discount);
    console.log(newTicketPrice)
} else if ( userAge > 65){
    let discount = ((ticketPrice * 40) / 100);
    let newTicketPrice = (ticketPrice - discount);
    console.log(newTicketPrice)
} else{
    
}







