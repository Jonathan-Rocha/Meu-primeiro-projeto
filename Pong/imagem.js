//código da imagem e sons

//placar do jogo
let meusPontos = 0
let pontosOponente = 0

//sons do jogo
let raquetada;
let ponto;
let trilha;

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento, 
      raqueteAltura);
}

function incluiPlacar(){
  stroke(255);
  textSize(16);
  textAlign(CENTER);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40 ,20);
  fill(255);
  text(pontosOponente, 470, 26);
}