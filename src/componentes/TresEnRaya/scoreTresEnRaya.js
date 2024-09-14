
export let sumPointsTresEnRaya = {
  sumCross : 0,
  sumCircle : 0,
};

export let scoreTresEnRaya = () =>{

  let storageScoreTresEnRaya = localStorage.getItem('Marcador Tres en Raya');
if (storageScoreTresEnRaya) {
  sumPointsTresEnRaya = JSON.parse(storageScoreTresEnRaya); 
}
else{
sumPointsTresEnRaya = { sumCross: 0, sumCircle: 0}
}
  const tresEnRayaMainPart = document.querySelector(".Tres.en.RayamainPart");
  let resetButtonTresEnRaya = document.createElement("button");
  let resetBoardTresEnRaya = document.createElement("button");
  let divScoreTresEnRaya = document.createElement("div");
  let scoreTresEnRayaCross = document.createElement("p");
  let scoreTresEnRayaCircle = document.createElement("p");

  divScoreTresEnRaya.classList = "divScoreTresEnRaya";
  scoreTresEnRayaCross.classList = "scoreTresEnRayaCross";
  scoreTresEnRayaCircle.classList = "scoreTresEnRayaCircle"
  scoreTresEnRayaCross.textContent = "Puntuación Jugador ❌: " + sumPointsTresEnRaya.sumCross;
  scoreTresEnRayaCircle.textContent = "Puntuación Jugador ⭕: " + sumPointsTresEnRaya.sumCircle;
  resetButtonTresEnRaya.classList = "resetButtonTresEnRaya";
  resetBoardTresEnRaya.classList = "resetBoardTresEnRaya";
  resetButtonTresEnRaya.textContent = "Reiniciar puntuaciones";
  resetBoardTresEnRaya.textContent = "Nueva Ronda";

  divScoreTresEnRaya.append(scoreTresEnRayaCross);
  divScoreTresEnRaya.append(scoreTresEnRayaCircle);
  divScoreTresEnRaya.append(resetButtonTresEnRaya);
  divScoreTresEnRaya.append(resetBoardTresEnRaya);
  tresEnRayaMainPart.append(divScoreTresEnRaya);

  let boardTresEnRaya = document.querySelector("#gridSection");
  let allTiles = document.querySelectorAll(".sectionButton");
  

  resetBoardTresEnRaya.addEventListener("click",() => {
    boardTresEnRaya.classList.remove("blockTile");
    for (const eachTile of allTiles) {
      eachTile.innerHTML = "";
     (eachTile.classList.remove("jugador1", "jugador2","blockTile"));
       eachTile.classList.add("sectionButton");
   };
  })


  resetButtonTresEnRaya.addEventListener("click", () =>{
    localStorage.removeItem('Marcador Tres en Raya');

    sumPointsTresEnRaya = {
      sumCross : 0,
      sumCircle : 0,
    };

    localStorage.setItem('Marcador Tres en Raya', JSON.stringify(sumPointsTresEnRaya));

    scoreTresEnRayaCross.textContent = "Puntuación Jugador ❌: " + sumPointsTresEnRaya.sumCross;
    scoreTresEnRayaCircle.textContent = "Puntuación Jugador ⭕: " + sumPointsTresEnRaya.sumCircle;
  })
};