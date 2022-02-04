
const numKm =  parseInt ( prompt ('quanti km vuoi percorrere?') );
console.log(numKm);

if  ( isNaN (numKm) ) {
    alert('il dato km deve avere un valore numerico');
} else {
    const userAge = parseInt ( prompt ('quanti anni hai??') );
    console.log(userAge);
 // console.log(typeof userAge);
        if ( isNaN (userAge) ) {
            alert('il dato età deve avere un valore numerico');
        }
}

const ticketPrice = numKm * 0.21 ;
console.log(ticketPrice)

if (userAge<18){
    
}







