function drawRainbow() {
  const canvas = document.getElementById("rainbowCanvas");
  if (!canvas.getContext) {
    alert("Sorry, your browser does not support canvas!");
    return;
  }
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const colors = [
    document.getElementById("color1").value,
    document.getElementById("color2").value,
    document.getElementById("color3").value,
    document.getElementById("color4").value,
    document.getElementById("color5").value,
    document.getElementById("color6").value,
    document.getElementById("color7").value,
  ];

  //credits to stack overflow :)
  colors.forEach((color, i) => {
    ctx.beginPath();
    ctx.arc(300, canvas.height, 100 + i * 20, Math.PI, 0, false);
    ctx.strokeStyle = color;
    ctx.lineWidth = 20;
    ctx.stroke();
  });
}
