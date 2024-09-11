
import { header } from "../header/header"
import { mainPart } from "../mainPart/mainPart";
import { buttonSection } from "./buttonSection/buttonSection";
import "./landingPage.css"
import { footer } from "../Common/common";

export const landingPage = () => {
    header.innerHTML = "";
    mainPart.innerHTML = "";
    footer.innerHTML = "";

const h1 = document.createElement("h1");

h1.classList = "anton-sc-regular";
h1.textContent = "Zona de juegos";
header.classList = "headerLandingPage";
mainPart.classList = "mainPartLandingPage";
footer.classList = "footerLandingPage";

header.append(h1);
mainPart.append(buttonSection);
}

