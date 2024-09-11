
export let points = (event) =>{

  let pointsFlota;
  let storageScoreFlota = localStorage.getItem('Marcador Flota');
if (storageScoreFlota) {
pointsFlota = JSON.parse(storageScoreFlota); 
}
else{
     pointsFlota = 0;
};

    let allAttemps = document.querySelector("#attemps");
    let sumScore = document.querySelector("#score");
   
    let bombarded = event.target;
    let numAttempts = parseInt(allAttemps.textContent.match(/\d+/)[0]);
    let lessAttempts = numAttempts -1;
    let tileAlly = numAttempts +10;

    if (bombarded.classList.contains("enemies") ) {
      bombarded.classList = "touched";
        bombarded.style.backgroundColor = " rgba(255, 0, 0, 0.4)";
        pointsFlota += 15;
        sumScore.textContent = `Puntuación: ${pointsFlota}`;
        allAttemps.textContent = "Intentos restantes: " + lessAttempts;
        alert("Has hundido un enemigo, obtienes 15 puntos");
    }
    else if (bombarded.classList.contains("neutrals") ) {
        bombarded.classList = "touched";
        bombarded.classList.remove("neutrals");
          bombarded.style.backgroundColor = " rgba(255, 153, 0, 0.5)";
          pointsFlota -= 10;
          sumScore.textContent = `Puntuación: ${pointsFlota}`;
          allAttemps.textContent = "Intentos restantes: " + lessAttempts;
          alert("Eso no era un enemigo, pierdes 10 puntos");
      }
      if (bombarded.classList.contains("allies") ) {
        bombarded.classList = "touched";
          bombarded.style.backgroundColor =  "rgba(0, 128, 0, 0.4)";
          allAttemps.textContent = "Intentos restantes: " + tileAlly;
          alert("Has encontrado a un aliado, obtienes 10 intentos adicionales");
      }
    else if (bombarded.classList.contains("tileButton")) {
        bombarded.classList = "water";
        bombarded.style.backgroundColor = "transparent";
        pointsFlota --;
        sumScore.textContent = `Puntuación: ${pointsFlota}`;
        allAttemps.textContent = "Intentos restantes: " + lessAttempts;
    }

    let allEnemyShips = document.querySelectorAll(".enemies");
    let enemyRemanents = Array.from(allEnemyShips);
    let boardEnd = document.querySelector("#divBoard");
    let allTilesEnd = boardEnd.querySelectorAll("button");
    let newGameButton = document.querySelector("#newGame");
     if (enemyRemanents.length == 0) {
      allTilesEnd.forEach(tile => {
        tile.style.backgroundColor = "transparent";
      })
      alert("No queda ningún enemigo, has vencido");
      boardEnd.classList.add("blockTile");
      newGameButton.disabled = false;
     } 
     if (lessAttempts == 0) {
      allTilesEnd.forEach(tile => {
        tile.style.backgroundColor = "transparent";
      })
      alert("No has hundido a todos los enemigos");
      boardEnd.classList.add("blockTile");
      newGameButton.disabled = false;
     }
     localStorage.setItem("Marcador Flota", JSON.stringify(pointsFlota));
};


export let resetScoreFlota = (element) =>{
  let storageScoreFlota = localStorage.getItem('Marcador Flota');
  let pointsFlota = JSON.parse(storageScoreFlota); 
    let sumScore = document.querySelector("#score");
    if (pointsFlota > 10) {
      localStorage.removeItem("Marcador Flota");
        pointsFlota = 0;
        localStorage.setItem("Marcador Flota", JSON.stringify(pointsFlota));
        sumScore.textContent = `Puntuación: ${0}`;
    }
    else{
      alert("Para reiniciar la puntuación se necesitan mínimo diez puntos")
    }
};