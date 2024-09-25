var x = 200; var y = 230; var z = 430; var w = 630;
var tela = 0;
var personagemP; var personagemAd=[]; var personagemAe=[];
var cont1=0, cont2=0, cont3=0;
var numa, numb, numc, numd, resposta;
var acertou, errou, vidas=5;
var incVel=0.2
var xmenino=0
var xa=7
var posicaoxM=100; var posicaoyM=600
var width_avatar = 100;
var height_avatar = 150;
var tema
var tema1

function preload(){
 
 personagemP = loadImage('personagem/idle1.png');
 tema=loadImage('recursos/background.jpg')
for (var i=0; i<=5; i++) {
   
  personagemAd[i]= loadImage('personagemr/walkd'+ (i+1) +'.png');
}
 
for ( i=0; i<=5; i++) {
   
  personagemAe[i]= loadImage('personagemr/walke'+ (i+1) +'.png');
}
}
function setup() {
 
 createCanvas(800, 800);
 
   numa = parseInt(random(1,9));
   numb = parseInt(random(1,9));
   numc = parseInt(random(1,9));
   numd = parseInt(random(1,9));
 
}

function draw() {
 background(220);
 if (tela==0)
   menu()
 if (tela==1)
   jogar()
 if (tela==2)
   ajuda()
 if (tela==3)
   creditos()
 if (tela==4)
   adicao()
 if (tela==5)
   subtracao()
 if (tela==6)
   multiplicacao()
 if (tela==7)
   divisao()
 if (tela==8)
   todos()
}
function mouseReleased(){
 if (tela==0){
   if (mouseX > x && mouseX < x+400 && mouseY > y && mouseY < y+100){
   {tela=1}
   }
   if (mouseX > x && mouseX < x+400 && mouseY > z && mouseY < z+100){
   {tela=2}
   }
   if (mouseX > x && mouseX < x+400 && mouseY > w && mouseY < w+100){
   {tela=3}
 }
}
}


function menu(){  
 image(tema,0,0)
 rect(x, y, 400, 100, 50)
 rect(x, z, 400, 100, 50)
 rect(x, w, 400, 100, 50)
   textSize(80)
   textStyle(BOLDITALIC)
   fill(255)
   strokeWeight(10)
   stroke(0)
 text('Chuva de Números', 40, 140 )
   textSize(50)
 text('Jogar', 330, 300 )
   textSize(50)
 text('Ajuda', 330, 500 )
   textSize(50)
 text('Créditos', 300, 700 )
   textSize(50)  

}
function jogar(){
 background(0,127,255)
 rect(x, 35, 400, 100, 50)
 rect(x, 195, 400, 100, 50)
 rect(x, 355, 400, 100, 50)
 rect(x, 515, 400, 100, 50)
 rect(x, 675, 400, 100, 50)
 
 fill(255)
   strokeWeight(5)
   stroke(0)
 text('Adição', 293, 100 )
   textSize(50)
 text('Subtração', 265, 260 )
   textSize(50)
 text('Multiplicação', 235, 420 )
   textSize(50)
 text('Divisão', 285, 580 )
   textSize(50)  
 text('Todas', 300, 740 )
   textSize(50) 
   if (mouseX > x && mouseX < x+400 && mouseY > 35 && mouseY < 135){
   if (mouseIsPressed){tela=4}
   }
   if (mouseX > x && mouseX < x+400 && mouseY > 195 && mouseY < 295){
   if (mouseIsPressed){tela=5}
   }
   if (mouseX > x && mouseX < x+400 && mouseY > 355 && mouseY < 455){
   if (mouseIsPressed){tela=6}
   }
   if (mouseX > x && mouseX < x+400 && mouseY > 515 && mouseY < 615){
   if (mouseIsPressed){tela=7}
   }
   if (mouseX > x && mouseX < x+400 && mouseY > 675 && mouseY < 775){
   if (mouseIsPressed){tela=8}
   }

}
function ajuda(){
 background(0,127,255)
 textSize(25)
 fill(255)
 strokeWeight(4)
 stroke(0)   
 text('Um grupo de amigos, Pedro, Ana, Bianca e Gabriel, estão estudando matemática dentro da biblioteca. Está chovendo do lado de fora mas a vontade que eles têm é de brincar lá fora. Pedro está muito confuso com o conteúdo e está tendo muita dificuldade, fazendo com que ele fique desinteressado em estudar e acaba caindo no sono. Ele começa a sonhar, e em seu sonho ele e seus amigos, estão do lado de fora da biblioteca, brincando na chuva, porém o que cai do céu são números!', 20, 20, 700, 700);
}

function creditos(){
 background(0,127,255)
 textSize(25)
 fill(255)
 strokeWeight(4)
 stroke(0)   
 text('Projeto realizado para o componente curricular Lógica de Programação, UFRN 2021', 20, 20, 700, 700);
  textSize(25)
 fill(255)
 strokeWeight(4)
 stroke(0)   
 text('Criado pelo aluno: Levi Reis do Monte Silva', 20, 200, 700, 700);
  textSize(25)
 fill(255)
 strokeWeight(4)
 stroke(0)   
 text('Com a orientação do Professor: Filipe Taveiros', 20, 300, 700, 700);
}

function adicao(){
 image(tema,0,0)
 textSize(100)
 fill(255)
 strokeWeight(4)
 stroke(0)   
 text((numa +'+' + numb+ '=?'), 20, 20, 700, 700);
 resposta=(numa+numb)
 
 if(keyIsDown(65)){
   if(cont1<4){cont1=cont1 + incVel;} else{cont1=0}
   image(personagemAe[Math.floor(cont1)],100+xmenino,600)
   if(xmenino>=-100){
   xmenino=xmenino-xa}
 }
 else{if(keyIsDown(68)){
   if(cont2<4){cont2=cont2 + incVel;} else{cont2=0}
   image(personagemAd[Math.floor(cont2)],100+xmenino,600)
   if(xmenino<600){
   xmenino=xmenino+xa}
 }
else{ image(personagemP, 100+xmenino, 600)}

}
}

function subtracao(){
 image(tema,0,0)
textSize(100)
 fill(255)
 strokeWeight(4)
 stroke(0)   
 text((numa +'-' + numb+ '=?'), 20, 20, 700, 700);
 resposta=(numa-numb)
 
 if(keyIsDown(65)){
   if(cont1<4){cont1=cont1 + incVel;} else{cont1=0}
   image(personagemAe[Math.floor(cont1)],100+xmenino,600)
   if(xmenino>=-100){
   xmenino=xmenino-xa}
 }
 else{if(keyIsDown(68)){
   if(cont2<4){cont2=cont2 + incVel;} else{cont2=0}
   image(personagemAd[Math.floor(cont2)],100+xmenino,600)
   if(xmenino<600){
   xmenino=xmenino+xa}
 }
else{ image(personagemP, 100+xmenino, 600)}

}
}
function multiplicacao(){
 image(tema,0,0)
textSize(100)
 fill(255)
 strokeWeight(4)
 stroke(0)   
 text((numa +'x' + numb), 20, 20, 700, 700);
 resposta=(numa*numb)
 
 if(keyIsDown(65)){
   if(cont1<4){cont1=cont1 + incVel;} else{cont1=0}
   image(personagemAe[Math.floor(cont1)],100+xmenino,600)
   if(xmenino>=-100){
   xmenino=xmenino-xa}
 }
 else{if(keyIsDown(68)){
   if(cont2<4){cont2=cont2 + incVel;} else{cont2=0}
   image(personagemAd[Math.floor(cont2)],100+xmenino,600)
   if(xmenino<600){
   xmenino=xmenino+xa}
 }
else{ image(personagemP, 100+xmenino, 600)}

}
}
function divisao(){
 image(tema,0,0)
textSize(100)
 fill(255)
 strokeWeight(4)
 stroke(0)   
 text((numa +'/' + numb), 20, 20, 700, 700);
 resposta=(numa%numb)
 
 if(keyIsDown(65)){
   if(cont1<4){cont1=cont1 + incVel;} else{cont1=0}
   image(personagemAe[Math.floor(cont1)],100+xmenino,600)
   if(xmenino>=-100){
   xmenino=xmenino-xa}
 }
 else{if(keyIsDown(68)){
   if(cont2<4){cont2=cont2 + incVel;} else{cont2=0}
   image(personagemAd[Math.floor(cont2)],100+xmenino,600)
   if(xmenino<600){
   xmenino=xmenino+xa}
 }
else{ image(personagemP, 100+xmenino, 600)}

}
}
function todos(){
 image(tema,0,0)
textSize(100)
 fill(255)
 strokeWeight(4)
 stroke(0)   
 text((numa +'+' + numb +'-'+numc+'/'+numd), 20, 20, 700, 700);
 resposta=(numa+numb)
 
 if(keyIsDown(65)){
   if(cont1<4){cont1=cont1 + incVel;} else{cont1=0}
   image(personagemAe[Math.floor(cont1)],100+xmenino,600)
   if(xmenino>=-100){
   xmenino=xmenino-xa}
 }
 else{if(keyIsDown(68)){
   if(cont2<4){cont2=cont2 + incVel;} else{cont2=0}
   image(personagemAd[Math.floor(cont2)],100+xmenino,600)
   if(xmenino<600){
   xmenino=xmenino+xa}
 }
else{ image(personagemP, 100+xmenino, 600)}

}
}
function keyPressed(){
 if(key=='Escape'){tela=0}
}