
import { commonContent } from "../Common/common"
import { roundTresEnRaya } from "./roundTresEnRaya";
import { scoreTresEnRaya } from "./scoreTresEnRaya";

import "./TresEnRaya.css"


export let TresEnRaya = () => {
 
  commonContent("Tres en Raya");
  roundTresEnRaya();
  scoreTresEnRaya();
}