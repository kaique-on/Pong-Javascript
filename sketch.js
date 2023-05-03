let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;


//velocidade bolinha
let velocidadexBolinha = 3;
let velocidadeyBolinha = 1;

//tamanho raquete
let raqueteComprimento = 13;
let raqueteAltura = 90;

//variaveis da raquete
let xRaquete1 = 20;
let xRaquete2 = 565;
let yRaquete = 150;

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
}

function fundo(){
  background(0); //cor do canvas
}

function objetos() {
  circle (xBolinha, yBolinha, diametro); //bolinha
  rect(xRaquete1, yRaquete, raqueteComprimento, raqueteAltura); //raquete esquerda
  rect(xRaquete2, yRaquete, raqueteComprimento, raqueteAltura); //raquete direita
  rect(295, 0, 10, 600);
}

function moverBolinha(){ //função para mover a bolinha
  xBolinha = xBolinha + velocidadexBolinha; //primeira forma de escrever
  yBolinha +=+ velocidadeyBolinha; //segunda forma de escrever
  
  if (xBolinha > width){ //se a bolinha for maior que o width, a sua velocidade será negativa e a pontuação vai incrementar 1 ponto
      velocidadexBolinha *=-1;
      pontos1 ++;
      }else if(xBolinha < 0){
        velocidadexBolinha *=-1;
        pontos2 ++;
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

function verificaColisaoBorda(){
}

function movimentoRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function pontuacao(){
  textSize(32);
  text(pontos1, 200, 30);
  text(pontos2, 400, 30);
  fill(255);
}
