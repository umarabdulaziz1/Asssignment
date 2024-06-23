let y = 10;
let speed = 5;
let circspeed = 1.5;
let x = 0;
let initialMovement = true;
let width = 150;
let height = 150;
let secondcircle = 80;
let middlerect = false;
let xintersect = false;
let xintersect2 = false;

let circ = 170;
let circ2 = 160;
let circDirectionX = 'right';
let circDirectionY = 'down';

let cx = 400;
let yx = 200;
let drawSecondRect = false;
let drawSecondcircle = false;
let drawThirdRect = false;
let circleanimation = false;
const backgroundColor = '#F15A24';

let lineX = 0;
let drawLine = false;
let lineRemoved = false;

let angle = 0;
let rotating = false;
let rotationCompleted = false;

let img; 

function preload() {
  img = loadImage('cic.jpg'); 
}
function setup() {
  createCanvas(700, 400);
  background(backgroundColor);
  img.resize(80, 0);
}

function draw() {
  background(backgroundColor);
  image(img, 550, 10); 

  noStroke();

  
  if (circleanimation) {
    fill(0, 0, 255); 
  } else {
    fill(0); 
  }

  
  if (!initialMovement && x === 10 && !rotationCompleted) {
    rotating = true;
  }

 
  if (rotating) {
    angle += 0.05; 
    if (angle >= TWO_PI) {
      angle = 0;
      rotating = false;
      rotationCompleted = true;
    }
  }

  push();
  translate(x, y + height); 
  if (rotating) {
    rotate(angle); 
  }
  rect(0, -height, width, height); 
  pop();

  
  if (!circleanimation || (width === 120 && height === 120)) {
    fill(0);
    circle(yx, cx, 120);
  } else {
    fill(backgroundColor);
    circle(yx, cx, 120);
  }

  
  if (y < 100) {
    y += speed;
  }

  if (y >= 100 && width > 120 && height > 120) {
    width -= 0.225;
    height -= 0.225;
  } else if (width <= 120 && height <= 120) {
    if (initialMovement) {
      x += speed;
      drawSecondcircle = true;
      drawLine = true; 
      if (x >= 550) {
        initialMovement = false;
      }
    } else {
      x -= speed;
      if (x <= 10) {
        x = 10;
      }
    }

    if (x > 0) {
      if (yx < 460) {
        yx += speed;
      }
    }
  }

  if (cx > 170) {
    cx -= speed + 10;
  }

  if (cx <= 170 && yx <= 200) {
    circleanimation = true;
  } else {
    circleanimation = false;
  }

  if (x >= 550 && !drawSecondRect) {
    drawSecondRect = true;
  }

  if (drawSecondRect) {
    rect(550, 100, width - 50, height);
  }
  if (x >= 500 && !xintersect) {
    xintersect = true;
  }
  if (xintersect) {
    pop();
    fill(255, 255, 255);
    rect(620, 100, 20, height);
    push();
  }
  if (x <= 550) {
    xintersect = false;
  }
  if (x >= 550 && !xintersect && !initialMovement) {
    xintersect2 = true;
  }

  if (xintersect2) {
    pop();
    fill(0, 0, 255);
    rect(550, 100, width - 50, height);
    push();
  }

  if (x <= 450) {
    xintersect2 = false;
  }

  if (drawSecondcircle) {
    if (secondcircle <= 190) {
      fill(0);
    } else {
      fill(0);
    }
    circle(secondcircle, 160, width, height);

    if (secondcircle < 70) {
      secondcircle += speed + 5;
    } else if (secondcircle >= 70 && secondcircle <= 190) {
      secondcircle += speed;
    }
  }

  if (drawSecondcircle) {
    if (secondcircle <= 190) {
      fill(0);
    } else {
      fill(0);
    }
    circle(secondcircle, 160, width, height);

    if (secondcircle < 70) {
      secondcircle += speed + 5;
    } else if (secondcircle >= 70 && secondcircle <= 190) {
      secondcircle += speed;
    }
  }

  if (x >= 280 && x <= 320 && !initialMovement && !drawThirdRect) {
    drawThirdRect = true;
  }
  if (x <= 200) {
    drawThirdRect = false;
  }
  if (x === 270 && !middlerect) {
    middlerect = true;
  }

  if (middlerect) {
    rect(350, 100, 20, height);
    rect(280, 100, 60, height);
  }

  if (drawThirdRect) {
    push();
    fill(48, 213, 200);

    rect(280, 100, 60, height);
    pop();
  }

  if (circleanimation && !(width === 120 && height === 120)) {
    if (circDirectionX === 'right') {
      if (circ < 300) {
        circ += circspeed;
      } else {
        circDirectionX = 'left';
      }
    } else if (circDirectionX === 'left') {
      if (circ > 170) {
        circ -= circspeed;
      } else {
        circDirectionX = 'right';
      }
    }
  }

  if (circleanimation && !(width === 120 && height === 120)) {
    if (circDirectionY === 'down') {
      if (circ2 < 270) {
        circ2 += circspeed;
      } else {
        circDirectionY = 'up';
      }
    } else if (circDirectionY === 'up') {
      if (circ2 > 160) {
        circ2 -= circspeed;
      } else {
        circDirectionY = 'down';
      }
    }
  }

  if (circleanimation && !(width === 120 && height === 120)) {
    let smoothCirc = 170 + 60 * cos(frameCount * 0.01);
    let smoothCirc2 = 160 + 40 * sin(frameCount * 0.02);

    push();
    fill(48, 213, 200);
    circle(circ, smoothCirc2, 120);
    pop();
  }
  if (circleanimation && !(width === 120 && height === 120)) {
    let smoothCirc1 = 200 + 80 * cos(frameCount * 0.02);
    let smoothCirc22 = 190 + 40 * sin(frameCount * 0.03);

    push();
    fill(255, 255, 255);
    circle(circ, smoothCirc22, 120);
    pop();
  }
  if (circleanimation && !(width === 120 && height === 120)) {
    let smoothCirc33 = 200 + 80 * cos(frameCount * 0.03);
    let smoothCirc3 = 190 + 40 * sin(frameCount * 0.04);

    push();
    fill(0);
    circle(circ, smoothCirc3, 120);
    pop();
  }

 
  if (drawLine && !lineRemoved) {
    if (lineX <= 350) {
      if (lineX >= 280 && lineX <= 340) {
        fill(48, 213, 200); 
      } else {
        fill(0);
      }
      rect(lineX, 100, 20, height);
      lineX += speed; 
    } else {
      lineRemoved = true; 
    }
  }
}
