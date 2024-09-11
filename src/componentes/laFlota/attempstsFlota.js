
export let attempsFlota = (level) => {

    let blockDivBoard = document.querySelector("#divBoard");
    let divAttempsSelected = document.querySelector("#divAttempts");
    let attemps = document.createElement("p");
    let newGameButton = document.querySelector("#newGame");

    blockDivBoard.classList.remove("blockTile");
    attemps.id = "attemps";
    attemps.textContent = `Intentos restantes: ${level}`;

    divAttempsSelected.innerHTML = "";
    divAttempsSelected.append(attemps);
    newGameButton.disabled = true;
}