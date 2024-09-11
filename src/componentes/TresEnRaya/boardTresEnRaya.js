
export let boardTresEnRaya = () => {
  const gridSection = document.createElement("section");
  const tresEnRayaMainPart = document.querySelector(".Tres.en.RayamainPart");

  
    
    for (let index = 0; index < 9; index++) {
        let buttonTresEnRaya = document.createElement("button");
        buttonTresEnRaya.id = "buttonTresEnRaya" + index;
        buttonTresEnRaya.className = "sectionButton";
        gridSection.append(buttonTresEnRaya);
      };
      
      gridSection.id= "gridSection";
   
       tresEnRayaMainPart.append(gridSection);
}