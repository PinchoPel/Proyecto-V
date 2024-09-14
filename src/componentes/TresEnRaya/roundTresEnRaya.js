
import { boardTresEnRaya } from "./boardTresEnRaya";

import "./TresEnRaya.css"
import {victoriaTresEnRaya} from "./victoriaTresEnRaya";



export let roundTresEnRaya = () =>{

  boardTresEnRaya();

  let allButtons = document.querySelectorAll(".sectionButton");
  let jugador = 1;

  allButtons.forEach(element => {
    
    element.addEventListener("click", (event) =>{
    
      if (jugador > 2) {
        jugador = 1;
      };

      if (!element.classList.contains('jugador1') && !element.classList.contains('jugador2')) {
        if (jugador == 1) {
          let cross = document.createElement("img");
          cross.id = "crossimg";
          cross.src = "./cross-svgrepo-com.png";
          event.target.classList = "jugador1";
          jugador ++;
          event.target.append(cross);
        }
        else if (jugador == 2) {
          let circle = document.createElement("img");
          circle.src = "./circle-svgrepo-com.png";
          circle.id = "circleimg";
          event.target.classList = "jugador2";
          jugador ++;
          event.target.append(circle);
        }
        victoriaTresEnRaya();
     }
});
  })
}
