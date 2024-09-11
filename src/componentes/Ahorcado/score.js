
import { resetAhorcado } from "./resetAhorcado";
import { scoreSectionAhorcado } from "./scoreSectionAhorcado";


export let ahorcadoPoints = 0;

export let scoreAhorcado = () =>{
  let usedLetters = [];
   let failed = 1;
  let storageAhorcadoPoints = localStorage.getItem("Marcador Ahorcado");
  if (storageAhorcadoPoints) {
    ahorcadoPoints = JSON.parse(storageAhorcadoPoints);
  }
  else{
    ahorcadoPoints = 0;
  }
  scoreSectionAhorcado();

  let scoreAhorcado = document.querySelector("#scoreAhorcado");
  let used= document.querySelector(".usedLetters");
  let buttonLetter = document.querySelector("#buttonLetter");
  let resetButtonAhorcado = document.querySelector("#resetButtonAhorcado");
  let resetScoreAhorcado = document.querySelector("#resetScoreAhorcado");

  scoreAhorcado.textContent = "Puntuación: " + ahorcadoPoints;
  used.textContent = "Letras no acertadas: " + usedLetters;
  

    buttonLetter.addEventListener("click", () =>{

          let sumPoints = false;
           
  let value = inputLetter.value;
  value = value.replace(/[^A-Za-zñÑ]/g, '').toUpperCase();
  
          let allSpans = document.querySelectorAll("span"); 
          let spans = Array.from(allSpans);
          if (!spans.every(element => element.classList.contains("visible"))){
            resetButtonAhorcado.disabled = true;
         };
          
          for (let index = 0; index < allSpans.length; index++) {
              if (allSpans[index].innerText == value) {
                  allSpans[index].classList = "visible";
                  sumPoints = true;
                  scoreAhorcado.textContent = "Puntuación: " + (ahorcadoPoints += 5);
              }
          };
          if(sumPoints == false){
              failed++;
              scoreAhorcado.textContent = "Puntuación: " + (ahorcadoPoints -= 2);
            usedLetters.push(inputLetter.value.toUpperCase());
            used.textContent= "Letras no acertadas: " + usedLetters;
              let images = document.querySelector(".gallowsImage");
              images.src = `./horca${failed}.png`;
          };
          if (spans.every(element => element.classList.contains("visible"))) {
              alert("has ganado");
              buttonLetter.disabled= true;
              scoreAhorcado.textContent = "Puntuación: " + (ahorcadoPoints += 20);
              resetButtonAhorcado.disabled = false;
              usedLetters = [];
              failed = 1;
         }
         else if (failed > 6 && sumPoints == false) {
            buttonLetter.disabled = true;
          scoreAhorcado.textContent = "Puntuación: " + (ahorcadoPoints -= 10);
          alert("Has perdido la partida");
          for (let index = 0; index < allSpans.length; index++) {
            allSpans[index].classList = "visible";
          };
          failed = 1;
          resetButtonAhorcado.disabled = false;
          usedLetters = [];
      };

          inputLetter.value = "";
          inputLetter.focus();
          resetButtonAhorcado.addEventListener("click",resetAhorcado);
          localStorage.setItem('Marcador Ahorcado', JSON.stringify(ahorcadoPoints));
        })
          
    resetScoreAhorcado.addEventListener("click", () => {
      if (ahorcadoPoints > 0) {
        localStorage.removeItem("Marcador Ahorcado");
        ahorcadoPoints = 0;
        localStorage.setItem('Marcador Ahorcado', JSON.stringify(ahorcadoPoints));
      scoreAhorcado.textContent = "Puntuación: " + ahorcadoPoints;
      };
    })
  };