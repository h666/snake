var can1=document.getElementById("canvas1");
var can2=document.getElementById("canvas2");
var con1=can1.getContext("2d");
var con2=can2.getContext("2d");

con2.font="10px Arial";
//con2.fillStyle="red";

var vup=0;
var vdown=0;
var vright=0;
var vleft=0;

var playerDirection=0; //player direction for automovement of player

var cubeDestroyed=0; //Detection if cube had been destroyed by player

var keys=[];
var width=500,height=400,speed=5;

var player={   //player character for control
	x:10,
	y:10,
	width:20,
	height:20
};

var cube={ //enemy!
	y:Math.floor(Math.random() * 10) * 40,
	x:Math.floor(Math.random() * 10) * 40,
	width:20,
	height:20
};

window.addEventListener("keydown", function(e){
	keys[e.keyCode]=true;
}, false);

window.addEventListener("keyup", function(e){
	delete keys[e.keyCode];
}, false);

/*
up-38
down-40
left-37
right-39
*/

function game(){
	update();
	collision();
	render();
}

function update(){
	if(keys[38]){
		con2.clearRect(0,0,49,12);
		con2.fillText("Up " + vup++,10,10);
		playerDirection=1;
		player.y-=speed;
	}
	if(keys[40]){
		con2.clearRect(50,0,49,12);
		con2.fillText("Down " + vdown++,50,10);
		playerDirection=2;
		player.y+=speed;
	}
	if(keys[37]){
		con2.clearRect(105,0,49,12);
		con2.fillText("Left " + vleft++,105,10);
		playerDirection=3;
		player.x-=speed;
	}

	if(keys[39]){
		con2.clearRect(155,0,49,12);
		con2.fillText("Right " + vright++,155,10);
		playerDirection=4;
		player.x+=speed;
	}

	if(player.x<0)player.x=0;
	if(player.y<0)player.y=0;
	if(player.x>=width-player.width)player.x=width-player.width;
	if(player.y>=height-player.height)player.y=height-player.height;
	
}

function movement(){

}

function collision(){
	//collision detection
	if(player.x==Math.round(cube.x)&&player.y==Math.round(cube.y)){
		//var cubeDestroyed=1;
		cube.y=Math.floor(Math.random() * 10) * 40;
		cube.x=Math.floor(Math.random() * 10) * 40;
	}
}

function render(){
	con1.clearRect(cube.x,cube.y,cube.width,cube.height);
	con1.fillStyle="Blue";
	con1.fillRect(player.x, player.y, player.width, player.height);
	con1.fillStyle="Yellow";
	con1.fillRect(cube.x, cube.y, cube.width, cube.height);
}



setInterval(function(){
	game();
},1000/30) //1000ms is 1 second, divide by 30 we get 30frames per second
