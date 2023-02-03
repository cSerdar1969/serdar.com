function randomColor() {
    let color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.getElementById("text").style.color = color;
  }
  