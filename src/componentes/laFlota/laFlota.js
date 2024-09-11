
import { commonContent } from "../Common/common";
import { boardFlota } from "./boardFlota";

import "./laFlota.css"
import { scoreFlota } from "./scoreFlota";


export let laFlota= () => {
commonContent("Busca La Flota");
boardFlota();
scoreFlota();   
}