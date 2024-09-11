import { points } from "./pointsFlota";
import { shipsOnBoard } from "./shipsOnBoard";


export let  boardFlota = () =>{
    let randomNumber = Math.floor(Math.random()*5)+1;

    let mainPartFlota = document.querySelector(".Busca.La.FlotamainPart");
    let boardSectionFlota = document.createElement("section");
    let imageSea = document.createElement("img");
    let divSea = document.createElement("div");
    let divShips = document.createElement("div");
    let divBoard = document.createElement("div");
    for (let index = 0; index < 100; index++) {
        let tileSpan = document.createElement("span");
        tileSpan.id =  index;
        tileSpan.classList = "tileSpan";
        divShips.append(tileSpan);
    };
    for (let index = 0; index < 100; index++) {
        let tileButton = document.createElement("button");
        tileButton.id =  index;
        tileButton.classList = "tileButton";
        divBoard.append(tileButton);
    } 

    boardSectionFlota.id = "boardSectionFlota";
    imageSea.classList = "imageSea";
    divSea.id = "divSea";
    divShips.id = "divShips";
    divBoard.id = "divBoard";
    imageSea.src = `./fondoMar${randomNumber}.jpg`;
    
    divSea.append(imageSea);
    boardSectionFlota.append(divSea);
    boardSectionFlota.append(divShips);
    boardSectionFlota.append(divBoard);
    mainPartFlota.append(boardSectionFlota);

    shipsOnBoard();
    
    divBoard.addEventListener("click", points)
};