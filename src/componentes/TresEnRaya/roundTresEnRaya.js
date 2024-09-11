
import { boardTresEnRaya } from "./boardTresEnRaya";

import "./TresEnRaya.css"
import {victoriaTresEnRaya} from "./victoriaTresEnRaya";



export let roundTresEnRaya = () =>{

  boardTresEnRaya();
  
      let jugador = 1;

      gridSection.addEventListener("click", (event) =>{
        
        if (jugador > 2) {
          jugador = 1;
        };

        if (!event.target.classList.contains('jugador1') && !event.target.classList.contains('jugador2')) {
          if (jugador == 1) {
            event.target.classList = "jugador1";
            jugador ++;
          }
          else if (jugador == 2) {
            event.target.classList = "jugador2";
            jugador ++;
          }
          victoriaTresEnRaya();
       }
});
}