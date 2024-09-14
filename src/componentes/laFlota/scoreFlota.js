
import { attempsFlota } from "./attempstsFlota";
import { laFlota } from "./laFlota";
import { resetScoreFlota } from "./pointsFlota";


let pointsFlota = 0;

export let scoreFlota = () =>{

let storageScoreFlota = localStorage.getItem('Marcador Flota');
if (storageScoreFlota) {
pointsFlota = JSON.parse(storageScoreFlota); 
}
else{
    pointsFlota = 0;
}

    let mainPartFlota = document.querySelector(".Busca.La.FlotamainPart");
    let scoreSection = document.createElement("section");
    let score = document.createElement("p");
    let resetScoreButton = document.createElement("button");
    let divAttempts = document.createElement("div");
    let divAttemptsButtons = document.createElement("div");
    let instruction = document.createElement("p");
    let easyButton = document.createElement("button");
    let mediumButton = document.createElement("button");
    let hardButton = document.createElement("button");
    let newGame = document.createElement("button");

    scoreSection.id = "scoreSectionFlota";
    [resetScoreButton, easyButton, mediumButton, hardButton, newGame].forEach(button => button.classList.add("buttonsFlota"));
    score.textContent = "Puntuación: " + pointsFlota;
    score.id = "score";
    resetScoreButton.textContent = "Reiniciar puntuación";
    divAttempts.id = "divAttempts";
    divAttemptsButtons.id = "divAttemptsButtons";
    instruction.textContent = "Antes de empezar, elige la dificultad"
    easyButton.textContent = "60 intentos (fácil)";
    easyButton.id = "easyButton";
    mediumButton.textContent = "45 intentos (normal)";
    mediumButton.id = "mediumButton";
    hardButton.textContent = "30 intentos (difícil)";
    hardButton.id = "hardButton";
    newGame.id = "newGame";
    newGame.textContent = "Nueva partida";

    scoreSection.append(score);
    scoreSection.append(resetScoreButton);
    divAttempts.append(instruction);
    divAttemptsButtons.append(easyButton);
    divAttemptsButtons.append(mediumButton);
    divAttemptsButtons.append(hardButton);
    divAttempts.append(divAttemptsButtons);
    scoreSection.append(divAttempts);
    scoreSection.append(newGame);
    mainPartFlota.append(scoreSection);
  
    resetScoreButton.addEventListener("click",resetScoreFlota)
    newGame.addEventListener("click", laFlota)
    easyButton.addEventListener("click",function(){attempsFlota(60)});
    mediumButton.addEventListener("click",function(){attempsFlota(45)});
    hardButton.addEventListener("click",function(){attempsFlota(30)});

    localStorage.setItem("Marcador Flota", JSON.stringify(pointsFlota));
};