import { arrays } from "./arrays"



export let randomWord = () => {

    let pista= document.querySelector("#hint");
    let palabra = document.querySelector("#wordGuess");

    let arrayKey = [];
     for (const array in arrays) {
        if (arrays.hasOwnProperty(array)) {
            arrayKey.push(array);
        }
    };

    let randomKey = Math.floor(Math.random()*arrayKey.length);
    
    let randomArray = arrayKey[randomKey]; 
    function espacios(randomArray) {
        return randomArray.replace(/([a-z])([A-Z])/g, '$1 $2');
    };
    pista.textContent= "Pista: " + espacios(randomArray);

    let wordsFromArray = arrays[randomArray]; 
    
    let getWord = Math.floor(Math.random()*wordsFromArray.length); 
    let word = wordsFromArray[getWord];
    
    for (let index = 0; index < word.length; index++) {
        let letra =  word[index];
        let span = document.createElement("span");
        span.textContent = letra.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        span.classList = "oculto";
        palabra.append(span);
    }  
};