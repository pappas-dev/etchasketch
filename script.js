function newGrid() {
    let gridSize = prompt('Pick a grid size between 1-100.');
    let input = Number(gridSize);
    if (input > 100 || input < 0) {
        alert(`Please select a number 1 - 100.`)
        return;
    }
    const grid = document.querySelector("div");
    grid.innerHTML = "";
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${input}, 2fr)`
      );
      grid.style.setProperty(
        "grid-template-rows",
        `repeat(${input}, 2fr)`
      );
      for (i = 0; i < input * input; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList = ("preHover")
        const container = document.querySelector(".container");
        container.appendChild(newDiv);
    }
    grid.addEventListener("pointerover", function(event) {
    event.target.classList.replace("preHover","postHover");
    return;
});
}

function reset() {
    location.reload();
    return;
}