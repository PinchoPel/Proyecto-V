

export let blockBoard = () => {
    let boardTresEnRaya = document.querySelector("#gridSection");
    let allTiles = document.querySelectorAll(".sectionButton");
    
   boardTresEnRaya.classList = "blockTile"; 
   for (const eachTile of allTiles) {
    eachTile.className = "blockTile";
   }
}