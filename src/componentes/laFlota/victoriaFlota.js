
let victoriaFlota = () =>{
    let allEnemyShips = document.querySelectorAll(".neutrals")
    console.log(allEnemyShips.length);
    allEnemyShips.forEach(element => {
        remainEnemys = document.querySelectorAll(".neutrals").length;
        if (remainEnemys == 0) {
            alert("has ganado")
        }
    });
}
