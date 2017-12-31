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

var keys=[];
var width=500,height=400,speed=5;

var player={   //player character for control
	x:10,
	y:10,
	width:20,
	height:20
};

var cube={ //enemy!
	//x:Math.random()*(width-20),
	//y:Math.random()*(height-20),
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
	//render();
	movement();
	collision();
}

function update(){
	//if(keys[38]) console.log("up"); good for reporting, i will write this into an array myself to check input history(20)
	if(keys[38]){
		//player.y-=speed;
		//console.log("Up");
		con2.clearRect(0,0,49,12);
		con2.fillText("Up " + vup++,10,10);
		playerDirection=1;
	}
	if(keys[40]){
		//player.y+=speed;
		//console.log("Down");
		con2.clearRect(50,0,49,12);
		con2.fillText("Down " + vdown++,50,10);
		playerDirection=2;
	}
	if(keys[37]){
		//player.x-=speed;
		//console.log("Left");
		con2.clearRect(105,0,49,12);
		con2.fillText("Left " + vleft++,105,10);
		playerDirection=3;
	}

	if(keys[39]){
		//player.x+=speed;
		//console.log("Right");
		con2.clearRect(155,0,49,12);
		con2.fillText("Right " + vright++,155,10);
		playerDirection=4;
	}
	
	if(player.x<0)player.x=0;
	if(player.y<0)player.y=0;
	if(player.x>=width-player.width)player.x=width-player.width;
	if(player.y>=height-player.height)player.y=height-player.height;
	
}

/*
function render(){
	con1.clearRect(0,0,width,height);
	con1.fillStyle="Blue";
	con1.fillRect(player.x, player.y, player.width, player.height);
	con1.fillStyle="Yellow";
	con1.fillRect(cube.x, cube.y, cube.width, cube.height);
}
*/

function movement(){
	switch(playerDirection){
		case 1:
			con1.clearRect(0,0,width,height);
			con1.fillStyle="Blue";
			con1.fillRect(player.x, player.y-=speed, player.width, player.height);
			con1.fillStyle="Yellow";
			con1.fillRect(cube.x, cube.y, cube.width, cube.height);
		break;

		case 2:
			con1.clearRect(0,0,width,height);
			con1.fillStyle="Blue";
			con1.fillRect(player.x, player.y+=speed, player.width, player.height);
			con1.fillStyle="Yellow";
			con1.fillRect(cube.x, cube.y, cube.width, cube.height);
		break;

		case 3:
			con1.clearRect(0,0,width,height);
			con1.fillStyle="Blue";
			con1.fillRect(player.x-=speed, player.y, player.width, player.height);
			con1.fillStyle="Yellow";
			con1.fillRect(cube.x, cube.y, cube.width, cube.height);
		break;

		case 4:
			con1.clearRect(0,0,width,height);
			con1.fillStyle="Blue";
			con1.fillRect(player.x+=speed, player.y, player.width, player.height);
			con1.fillStyle="Yellow";
			con1.fillRect(cube.x, cube.y, cube.width, cube.height);
		break;
	}
}

function collision(){
	//collision detection
	if(player.x==Math.round(cube.x)&&player.y==Math.round(cube.y)){
		alert("done!");
	}
	console.log(player.x,player.y,cube.x,cube.y);
}



setInterval(function(){
	game();
},1000/30) //1000ms is 1 second, divide by 30 we get 30frames per second
