// Nesse projeto eu peguei a parte dos palitos no copilot e o prompt que eu usei é "faça um codigo onde existem varios palitos amarelos na tela" e com esses comando eu juntei com um projeto que eu já feito anteriormente onde se deve achar o círculo escondido.
let qtdPalitos = 300;
let palitos = [];
let x, y; // Variáveis para um "palito especial" interativo

function setup() {
  createCanvas(400, 400);
  // Inicializa vários palitos com posições, ângulos e tamanhos aleatórios
  for (let i = 0; i < qtdPalitos; i++) {
    let px = random(width);
    let py = random(height);
    let comprimento = random(40, 50);
    let angulo = random(TWO_PI);
    palitos.push({ px, py, comprimento, angulo });
  }
  // Inicializa o palito especial (usando sua lógica)
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background('#EEDB39');
  
  // Desenha os palitos amarelos
  strokeWeight(4);
  stroke(255, 230, 50);
  for (let p of palitos) {
    let x2 = p.px + cos(p.angulo) * p.comprimento;
    let y2 = p.py + sin(p.angulo) * p.comprimento;
    line(p.px, p.py, x2, y2);
  }
  

  // Movimento do palito especial
  fill('brown');
  noStroke();
  x = x + random(-4, 4);
  y = y + random(-4, 4);
  x = constrain(x, 0, 400);
  y = constrain(y, 0, 400);

  // Distância entre o mouse e o palito especial
  let distancia = dist(mouseX, mouseY, x, y);
  // Círculo vermelho que cresce conforme a distância
  circle(mouseX, mouseY, distancia);

  fill('black');

  if (distancia < 10) {
    textAlign(CENTER, CENTER);
    textSize(24);
    fill('blue');
    text('Parábens! Você achou o besouro!', 200, 200);
    noLoop();
  }
}
