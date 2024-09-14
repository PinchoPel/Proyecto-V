import { scoreTresEnRaya } from "./scoreTresEnRaya";


export let resetScoreTresEnRaya = () => {

    localStorage.removeItem('Marcador Tres en Raya');

    let sumPointsTresEnRaya = {
        sumCross : 0,
        sumCircle : 0,
      };

      localStorage.setItem('Marcador Tres en Raya', JSON.stringify(sumPointsTresEnRaya));

    let storageScoreTresEnRaya = localStorage.getItem('Marcador Tres en Raya');
    sumPointsTresEnRaya = JSON.parse(storageScoreTresEnRaya); 
    let  crossReset= document.querySelector(".scoreTresEnRayaCross");
    let  circleReset= document.querySelector(".scoreTresEnRayaCircle");

    crossReset.textContent = "Puntuación Jugador ❌: " + sumPointsTresEnRaya.sumCross;
    circleReset.textContent = "Puntuación Jugador ⭕: " + sumPointsTresEnRaya.sumCircle;
}