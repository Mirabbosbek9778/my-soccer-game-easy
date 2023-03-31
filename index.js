let box = document.querySelector(".container");
let ball = document.querySelector("#top");

box.addEventListener("click", (event) => {
  ball.style.marginTop = `${event.y -50}px`;
  ball.style.marginLeft = `${event.x - 60}px`;
  ball.style.marginRight = `${event.y - 50}px`;
  ball.style.marginBottom = `${event.x - 50}px`;
});
