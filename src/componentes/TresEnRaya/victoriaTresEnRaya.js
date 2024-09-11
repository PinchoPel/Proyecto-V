import { blockBoard } from "./blockBoard";
import { sumPointsTresEnRaya } from "./scoreTresEnRaya";


export let victoriaTresEnRaya = () =>{

  let sumPoints = false;
  let resetBoard = document.querySelector(".resetBoardTresEnRaya");
  resetBoard.disabled = true;

    if (buttonTresEnRaya0.classList.contains("jugador1") && buttonTresEnRaya1.classList.contains("jugador1") && buttonTresEnRaya2.classList.contains("jugador1") || 
    buttonTresEnRaya4.classList.contains("jugador1") && buttonTresEnRaya5.classList.contains("jugador1") && buttonTresEnRaya3.classList.contains("jugador1") ||
    buttonTresEnRaya6.classList.contains("jugador1") && buttonTresEnRaya7.classList.contains("jugador1") && buttonTresEnRaya8.classList.contains("jugador1") ||
    buttonTresEnRaya0.classList.contains("jugador1") && buttonTresEnRaya3.classList.contains("jugador1") && buttonTresEnRaya6.classList.contains("jugador1") ||
    buttonTresEnRaya4.classList.contains("jugador1") && buttonTresEnRaya1.classList.contains("jugador1") && buttonTresEnRaya7.classList.contains("jugador1") ||
    buttonTresEnRaya2.classList.contains("jugador1") && buttonTresEnRaya5.classList.contains("jugador1") && buttonTresEnRaya8.classList.contains("jugador1") ||
    buttonTresEnRaya4.classList.contains("jugador1") && buttonTresEnRaya0.classList.contains("jugador1") && buttonTresEnRaya8.classList.contains("jugador1") ||
    buttonTresEnRaya4.classList.contains("jugador1") && buttonTresEnRaya2.classList.contains("jugador1") && buttonTresEnRaya6.classList.contains("jugador1")) {

      sumPointsTresEnRaya.sumCross ++;
      let  crossWins= document.querySelector(".scoreTresEnRayaCross");
      crossWins.textContent = "Puntuación Jugador ❌: " + sumPointsTresEnRaya.sumCross;
      alert("jugador ❌ gana");
      blockBoard();
      sumPoints = true;
      resetBoard.disabled = false;
      }

    else if (buttonTresEnRaya0.classList.contains("jugador2") && buttonTresEnRaya1.classList.contains("jugador2") && buttonTresEnRaya2.classList.contains("jugador2") ||
    buttonTresEnRaya4.classList.contains("jugador2") && buttonTresEnRaya5.classList.contains("jugador2") && buttonTresEnRaya3.classList.contains("jugador2") || 
    buttonTresEnRaya6.classList.contains("jugador2") && buttonTresEnRaya7.classList.contains("jugador2") && buttonTresEnRaya8.classList.contains("jugador2") ||
    buttonTresEnRaya0.classList.contains("jugador2") && buttonTresEnRaya3.classList.contains("jugador2") && buttonTresEnRaya6.classList.contains("jugador2") ||
    buttonTresEnRaya4.classList.contains("jugador2") && buttonTresEnRaya1.classList.contains("jugador2") && buttonTresEnRaya7.classList.contains("jugador2") ||
    buttonTresEnRaya2.classList.contains("jugador2") && buttonTresEnRaya5.classList.contains("jugador2") && buttonTresEnRaya8.classList.contains("jugador2") ||
    buttonTresEnRaya4.classList.contains("jugador2") && buttonTresEnRaya0.classList.contains("jugador2") && buttonTresEnRaya8.classList.contains("jugador2") ||
    buttonTresEnRaya4.classList.contains("jugador2") && buttonTresEnRaya2.classList.contains("jugador2") && buttonTresEnRaya6.classList.contains("jugador2")) {

      sumPointsTresEnRaya.sumCircle++;

        alert("jugador ⭕ gana");
        let  circleWins= document.querySelector(".scoreTresEnRayaCircle");
        circleWins.textContent = "Puntuación Jugador ⭕: " + sumPointsTresEnRaya.sumCircle;
        blockBoard();
        sumPoints = true;
        resetBoard.disabled = false;
      }
    let cross = document.querySelectorAll(".jugador1");
    let circle = document.querySelectorAll(".jugador2");
    if(cross.length > 4 && sumPoints == false || circle.length > 4 && sumPoints == false) {
        alert("La partida ha terminado en empate");
        blockBoard();
        resetBoard.disabled = false;
    };

   localStorage.setItem('Marcador Tres en Raya', JSON.stringify(sumPointsTresEnRaya));
 
};