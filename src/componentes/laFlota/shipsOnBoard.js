
export let shipsOnBoard = () =>{

    let tiles = document.querySelectorAll(".tileSpan");
    let buttons = document.querySelectorAll(".tileButton");
    let allShips = 18;
   
    for (let i = 1; i < 17; i++) {
        let randomTile = Math.floor(Math.random()*tiles.length);
        let imageShip = document.createElement("img");
        imageShip.src = `./barco-pixel${i}.png`;
        
        if (tiles[randomTile].classList.contains("tileSpan")) {
            if (i < 11) {
                imageShip.classList = "enemy";
                tiles[randomTile].classList.add("enemy","shipInside");
                tiles[randomTile].classList.remove("tileSpan");
                buttons[randomTile].classList = "enemies";
             }
             else if (i == 11 || i == 15 || i == 16 ) {
                 imageShip.classList = "neutral";
                 tiles[randomTile].classList.add("neutral","shipInside");
                 tiles[randomTile].classList.remove("tileSpan");
                 buttons[randomTile].classList = "neutrals";
             }
             else if (i == 12  || i == 13 || i == 14) {
                imageShip.classList = "ally";
                tiles[randomTile].classList.add("ally","shipInside");
                tiles[randomTile].classList.remove("tileSpan");
                buttons[randomTile].classList = "allies";
             }
            tiles[randomTile].append(imageShip);

            for (let j = 1; j < allShips.length; j++) {
                if (tiles[randomTile].classList.contains("shipInside")) {
                    let randomTile2 = (randomTile+ 1) % tiles.length;
                    if (i < 11) {
                        enemies.push(imageShip);
                        imageShip.className = "enemy";
                        tiles[randomTile2].classList.add("enemy","shipInside");
                        tiles[randomTile2].classList.remove("tileSpan");
                         buttons[randomTile2].classList = "enemy";
                     }
                     else if (i == 11 || i == 15 || i == 16 ) {
                         neutral.push(imageShip);
                         imageShip.className = "neutral";
                         tiles[randomTile2].classList.add("neutral","shipInside");
                         tiles[randomTile2].classList.remove("tileSpan");
                         buttons[randomTile2].classList = "neutral";
                     }
                     else if (i == 12  || i == 13 || i == 14) {
                         allies.push(imageShip);
                      imageShip.className = "ally";
                      tiles[randomTile2].classList.add("ally","shipInside");
                      tiles[randomTile2].classList.remove("tileSpan");
                         buttons[randomTile2].classList = "ally";
                     }
                    tiles[randomTile2].append(imageShip);
                }; 
            }
        };
    };
}

