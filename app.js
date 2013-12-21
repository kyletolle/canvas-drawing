var canvas;
var context;

// Colors borrowed from
// https://kuler.adobe.com/treesinthewoods-color-theme-3277114/

function draw() {
  canvas = document.getElementById('drawingBoard');

  if (canvas.getContext) {
    context = canvas.getContext('2d');
    drawSky();
    drawMoon();
    drawBackRange()
    drawFrontRange();
  } else {
    // No canvas support here.
  }
}

function drawSky() {
  context.fillStyle = "#94A4A5";
  context.fillRect(0,0, canvas.width, canvas.height);
}

function drawMoon() {
  var totalWidth = canvas.width;
  var totalHeight = canvas.height;

  var circleRadius = 10;

  var x = (totalWidth/6) - (circleRadius/2);
  var y = (totalHeight/5) - (circleRadius/2);

  context.arc(x, y, circleRadius, 0, 360);

  context.fillStyle = "#F2F5E9";
  context.fill();
}

function drawFrontRange() {
  context.beginPath();
  context.moveTo(0, canvas.height);
  var x = canvas.width/4;
  var y = 2*canvas.height/3;
  context.lineTo(x, y);

  x = 3*canvas.width/5;
  y = canvas.height;
  context.lineTo(x, y);
  context.closePath();
  context.fillStyle = "#5D6B74";
  context.fill();
}

function drawBackRange() {
  context.beginPath();

  // Start of back range
  var x = canvas.width/3;
  var y = canvas.height;
  context.moveTo(x, y);

  // Draw little peak
  x = canvas.width/2;
  y = canvas.height*(3/7);
  context.lineTo(x, y);

  x += 50;
  y += 25;
  context.lineTo(x, y);

  // Draw big peak
  x = canvas.width*(7/8);
  y = canvas.height*(1/5);
  context.lineTo(x, y);

  x = canvas.width + 250;
  y = canvas.height;
  context.lineTo(x, y);

  context.closePath();
  context.fillStyle = "#364656";
  context.fill();
}

