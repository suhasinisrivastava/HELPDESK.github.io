document.onmousemove = animateCircles; 
var colors = ['#dfecfc','#bfdaf7','#7bb3f0','#378ce7','#1667b9']
function animateCircles(event) {
  var square = document.createElement("div");
  square.setAttribute("class", "square");
  document.body.appendChild(square); 
  square.style.left = event.clientX + 'px';
  square.style.top = event.clientY + 'px';
  var color = colors[Math.floor(Math.random() * colors.length)];
  square.style.borderColor = color;
  square.style.transition = "all 0.5s linear 0s";
  square.style.left = square.offsetLeft - 20 + 'px';
  square.style.top = square.offsetTop - 20 + 'px';
  square.style.width = "50px";
  square.style.height = "50px";
  square.style.borderWidth = "5px";
  square.style.opacity = 0;
}