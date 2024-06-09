let palavra

function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatoria();
}

function palavraAleatoria() {
     let palavras = ["Vendo pó...... esia", "Choveu...", "Dona Judith morreu!", "Hum-hum", "Se eu soubesse diria...", "Você viu meu outro chinelo?"];
  return random(palavras);
}

function inicializaCores() {  
  background("black");
  fill("white");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
  let poesia = palavraParcial(0, width);
  textSize(25);
  text(poesia, 200, 200); 
}
