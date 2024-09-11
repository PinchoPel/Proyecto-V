import { randomWord } from "./randomWord";


export let gallows = () => {
    
    let mainPart = document.querySelector(".AhorcadomainPart");
    let gallowsSection = document.createElement("section");
    let gallowsImage = document.createElement("img");
    let wordDiv = document.createElement("div");
    let hint = document.createElement("p");
    let wordGuess = document.createElement("p");

    gallowsSection.id = "gallowsSection";
    gallowsImage.classList = "gallowsImage";
    gallowsImage.src= "./horca1.png";
    wordDiv.id= "wordDiv";
    hint.id = "hint";
    wordGuess.id = "wordGuess";

    wordDiv.append(hint);
    wordDiv.append(wordGuess);
    gallowsSection.append(gallowsImage);
    gallowsSection.append(wordDiv);
    mainPart.append(gallowsSection);
    randomWord();
}