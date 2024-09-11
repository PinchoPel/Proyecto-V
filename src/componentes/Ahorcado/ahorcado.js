
import { commonContent } from "../Common/common";
import "./ahorcado.css"
import { gallows } from "./gallows";

import { scoreAhorcado } from "./score";


export let ahorcado = () => {

    commonContent("Ahorcado");
    gallows();
    scoreAhorcado();
};