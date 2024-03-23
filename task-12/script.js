function generateCheckerboard() {
  const rows = document.getElementById("rows").value;
  const columns = document.getElementById("columns").value;
  const lightColor = document.getElementById("lightColor").value;
  const darkColor = document.getElementById("darkColor").value;

  console.log(rows);
  if (rows > 24 || columns > 24) {
    alert("Please Enter Rows and Columns smaller than 24");
    return null;
  }
  const board = document.getElementById("checkerboard");
  board.innerHTML = "";
  board.style.width = `${columns * 35}px`; 

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const square = document.createElement("div");
      square.style.width = `35px`;
      square.style.height = `35px`;
      square.classList.add("square");

      // Determine the square's color
      if ((i + j) % 2 === 0) {
        square.style.backgroundColor = lightColor;
      } else {
        square.style.backgroundColor = darkColor;
      }

      board.appendChild(square);
    }
  }
}
