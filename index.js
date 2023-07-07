let board;
let boardWidth=394;
let boardHeight=700;
let context;

let birdWidth=34;
let birdHeight=24;
let birdX=boardWidth/8;
let birdY=boardHeight/2-birdHeight/2;  
let birdImg;
birdImg=new Image();
birdImg.src="./Assets/flappybird.png";

let bird={
    x:birdX,
    y:birdY,
    width:birdWidth,
    height:birdHeight
}

window.onload=function(){
    board=document.getElementById("board");
    board.height=boardHeight;
    board.width=boardWidth;
    context=board.getContext("2d");

    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height)
}

function update(){
    
}