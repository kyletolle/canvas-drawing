function draw() {
  var canvas = document.getElementById('drawingBoard');

  if (canvas.getContext) {
    var context = canvas.getContext('2d');
  } else {
    // No canvas support here.
  }
}

