
import { ahorcado } from "../../Ahorcado/ahorcado";
import { laFlota } from "../../laFlota/laFlota";
import { TresEnRaya } from "../../TresEnRaya/TresEnRaya";


import "./buttonSection.css"

export const buttonSection = document.createElement("section");
buttonSection.id = "buttonSection";

export const juegos = [
    {nombre: "Tres en Raya", funcion: TresEnRaya}, 
    {nombre: "Ahorcado", funcion: ahorcado}, 
    {nombre: "Busca La Flota", funcion: laFlota}
];

export const mainMenu = () => {
    buttonSection.innerHTML = "";

for (let index = 0; index < juegos.length; index++) {
    let gameButton = document.createElement("button");

    gameButton.textContent = juegos[index].nombre;
    gameButton.classList = "gameButton";
    gameButton.id = 'button' + (index +1);

    gameButton.addEventListener("click", juegos[index].funcion);
    
    buttonSection.append(gameButton);
}}

mainMenu();

