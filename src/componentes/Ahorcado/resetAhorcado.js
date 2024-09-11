import { randomWord } from "./randomWord";


export let  resetAhorcado = () => {
    let wordToGuess = document.querySelector("#wordGuess")
   let letterButton = document.querySelector("#buttonLetter");
   let resetGallow = document.querySelector(".gallowsImage");
   let input = document.querySelector("#inputLetter")
   let used = document.querySelector(".usedLetters");
   resetGallow.src = `./horca1.png`
    wordToGuess.innerHTML = "";
    used.textContent = "Letras no acertadas: ";
    letterButton.disabled = false;
    randomWord();
    input.focus();
};
