var can1=document.getElementById("canvas1");
var con1=can1.getContext("2d");

var keys=[];
var width=500,height=400,speed=5;

var player={   //player character for control
	x:10,
	y:10,
	width:20,
	height:20
};

var cube={ //enemy!
	x:Math.random()*(width-20),
	y:Math.random()*(height-20),
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
	render();
}

function update(){
	//if(keys[38]) console.log("up"); good for reporting, i will write this into an array myself to check input history(20)
	if(keys[38]) player.y-=speed;
	if(keys[40]) player.y+=speed;
	if(keys[37]) player.x-=speed;
	if(keys[39]) player.x+=speed;
	
	if(player.x<0)player.x=0;
	if(player.y<0)player.y=0;
	if(player.x>=width-player.width)player.x=width-player.width;
	if(player.y>=height-player.height)player.y=height-player.height;
	
}

function render(){
	con1.clearRect(0,0,width,height);
	con1.fillStyle="Blue";
	con1.fillRect(player.x, player.y, player.width, player.height);
	con1.fillStyle="Yellow";
	con1.fillRect(cube.x, cube.y, cube.width, cube.height);
}



setInterval(function(){
	game();
},1000/30) //1000ms is 1 second, divide by 30 we get 30frames per second