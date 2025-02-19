/*
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


-stampo i numeri da 1 a 100
-se sono divisibili pee 3 allora avranno come valore fizz
-se divisibili per 5 allora saranno buzz
-se divisibili sia per tre che per 5 allora saranno fizzBuzz
- ricordati di inserire prima la condizione che raggruppa entrambe le possibilità



*/


for (let i = 1; i <= 100; i++) {
    
    let FizzBuzz;
    if (i % 3 === 0 && i % 5 === 0) {
        FizzBuzz = "FizzBuzz";
        console.log (FizzBuzz);
    } else if (i % 5 === 0){
        FizzBuzz = "Buzz";
        console.log (FizzBuzz);
    }
    else if (i % 3 === 0) {
        FizzBuzz = "Fizz"; 
        console.log (FizzBuzz);
    }
    

}

