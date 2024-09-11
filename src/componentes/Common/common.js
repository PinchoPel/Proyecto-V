import { header } from "../header/header";
import { mainPart } from "../mainPart/mainPart";
import { landingPage } from "../landingPage/landingPage";
import { mainMenu } from "../landingPage/buttonSection/buttonSection";
import "./common.css"

export const footer = document.createElement("footer");

export let commonContent = (param) => {

    header.innerHTML = "";
    mainPart.innerHTML = "";
    footer.innerHTML = "";

    const h2= document.createElement("h2");
    const returnMenu = document.createElement("button");
    
   
    h2.textContent = param;
    h2.classList = param;
    returnMenu.classList = param + "returnMenu";
    header.classList = param + "header";
    mainPart.classList = param + "mainPart";
    footer.classList = param + "footer";

    header.append(h2);
    footer.append(returnMenu);

    returnMenu.textContent = "Volver al Menú de Juegos";
    returnMenu.addEventListener("click",function(){
        landingPage();
        mainMenu();
    })
}