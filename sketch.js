let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;
let movimentoRaqueteAtivo = true;


//velocidade bolinha
let velocidadexBolinha = 5;
let velocidadeyBolinha = 2;

//tamanho raquete
let raqueteComprimento = 13;
let raqueteAltura = 90;

//variaveis da raquete
let xRaquete1 = 20;
let xRaquete2 = 565;
let yRaquete1 = 150;
let yRaquete2 = 150;

let pontos1 = 0;
let pontos2 = 0;

function setup() {
  createCanvas(600, 400); //width e height do canvas
}

function draw() { //chamando todas as funções
  fundo();
  objetos();
  moverBolinha();
  movimentoRaquete();
  pontuacao();
  limiteRaquete();
  colisaoRaquete();
  ia();
}

function fundo(){
  background(0); //cor do canvas
}

function objetos() {
  circle (xBolinha, yBolinha, diametro); //bolinha
  rect(xRaquete1, yRaquete1, raqueteComprimento, raqueteAltura); //raquete esquerda
  rect(xRaquete2, yRaquete2, raqueteComprimento, raqueteAltura); //raquete direita
  rect(295, 0, 10, 600);
}

function moverBolinha(){ //função para mover a bolinha
  xBolinha = xBolinha + velocidadexBolinha; //primeira forma de escrever
  yBolinha +=+ velocidadeyBolinha; //segunda forma de escrever
  
  if (xBolinha > width + 300){ //se a bolinha for maior que o width, a sua velocidade será negativa e a pontuação vai incrementar 1 ponto
      velocidadexBolinha *=-1;
      pontos1 ++;
      xBolinha = width / 2;
      yBolinha = height / 2;
      }else if(xBolinha < width - 900){
        velocidadexBolinha *=-1;
        pontos2 ++;
        xBolinha = width / 2;
        yBolinha = height / 2;
      }
  
  if (yBolinha > height || yBolinha < 0){ //se a bolinha for maior que o height, a sua velocidade será negativa
        velocidadeyBolinha *=-1;
      }
  
  if (pontos1 >= 10 || pontos2 >= 10){ //se alguem pontuar 10 pontos o placar reiniciará
    pontos1 = 0;
    pontos2 = 0;
    xBolinha = 300;
    yBolinha = 200;
  }
}

function limiteRaquete(){ // certinho
  if (yRaquete1 < 0){
    yRaquete1 = 0;
  }
  if (yRaquete1 > 310){
    yRaquete1 = 310;
  }
  
  if (yRaquete2 < 0){
    yRaquete2 = 0;
  }
  
   if (yRaquete2 > 310){
    yRaquete2 = 310;
  }
}

function movimentoRaquete(){ // melhorar
  if (movimentoRaqueteAtivo == true) {
    
  if (keyIsDown(UP_ARROW)){
    yRaquete1 -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete1 += 10;
  }
  if (keyIsDown('87')){
    yRaquete2 -= 10;
  }
  if (keyIsDown('83')){
    yRaquete2 += 10;
  }
}
}

function pontuacao(){ //certinho 
  textSize(32);
  text(pontos1, 200, 40);
  text(pontos2, 400, 40);
  fill(255);
}

function colisaoRaquete() {
  if((xBolinha - raio) >= xRaquete1 && (xBolinha - raio) <= xRaquete1 + 10 && yBolinha >= yRaquete1 && yBolinha <= yRaquete1 + raqueteAltura){
        velocidadexBolinha *=-1;
    } else if((xBolinha + raio) >= xRaquete2 && (xBolinha + raio) <= xRaquete2 + 10 && yBolinha >= yRaquete2 && yBolinha <= yRaquete2 + raqueteAltura){
      velocidadexBolinha *=-1;
    }
}

function ia(){
  if (keyCode === 'i') {
    movimentoRaqueteAtivo = false;
  } else if (keyCode === '72') {
    movimentoRaqueteAtivo = true;
  
}
}
