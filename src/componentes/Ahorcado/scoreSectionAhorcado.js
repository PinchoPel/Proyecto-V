
export let scoreSectionAhorcado = () => {
    let mainPart = document.querySelector(".AhorcadomainPart");
    let scoreSection = document.createElement("section");
    let scoreAhorcado = document.createElement("p");
    let inputLetter = document.createElement("input");
    let buttonLetter = document.createElement("button");
    let resetButtonAhorcado = document.createElement("button");
    let used = document.createElement("p");
    let resetScoreAhorcado = document.createElement("button");

    scoreSection.id = "scoreSectionAhorcado";
    scoreAhorcado.id = "scoreAhorcado";
    inputLetter.id = "inputLetter";
    inputLetter.placeholder = "Escribe una letra";
    inputLetter.maxLength = 1;
    buttonLetter.textContent = "Comprobar letra";
    buttonLetter.id = "buttonLetter";
    resetButtonAhorcado.id = "resetButtonAhorcado";
    resetScoreAhorcado.id = "resetScoreAhorcado";
    resetButtonAhorcado.textContent = "Reiniciar partida";
    resetScoreAhorcado.textContent = "Reiniciar puntuación";
    used.classList = "usedLetters";

    scoreSection.append(scoreAhorcado);
    scoreSection.append(resetScoreAhorcado);
    scoreSection.append(inputLetter);
    scoreSection.append(buttonLetter);
    scoreSection.append(resetButtonAhorcado);
    scoreSection.append(used);
    mainPart.append(scoreSection);

    inputLetter.focus();
    inputLetter.autocomplete = "off";
}