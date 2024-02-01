
var canvas = new fabric.canvas('myCanvas');

ball_y=0;
ball_x=0;
hole_y=400
hole_x=800

block_image_width = 5;
block_image_height = 5;

function loadImg(){
	function load_img()
	fabric.image.fromURL("golf-history.png", function(Img)) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToweight(50);
		hole_obj.set({
          top:hole_y,
          left:hole_x
		});
	   canvas.add(hole_obj);
	});
	newImage();
}

function newImage()
{
	fabric.image.fromURL("ball	.png", function(Img)) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToweight(50);
		ball_obj.set({
          top:ball_y,
          left:ball_x
		});
	   canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", myKeyDown);

document.getElementById("hd3").innerHTML="Você atingiu o objetivo!!!";
function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	document.getElementById("hd3").innerHTML="Você atingiu o objetivo!!!";
	document.getElementById("myCanvas").style.bordercolor="red";

	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{

{
if(ball_y <=0)
{
ball_y = ball_y + block image height;
console.log("Altura da imagem do bloco t = " + block image height);
console.log("Quando a tecla direcional baixo é pressionada, X = "+ ball_x +" , Y = "+ball_Y;)
canvas.remove(ball_obj);
new image();
}
}
	}

	function down()
	{
		if(ball_y<=450)
		{
		ball_y = ball_y + block image height;
		console.log("Altura da imagem do bloco t = " + block image height);
		console.log("Quando a tecla direcional baixo é pressionada, X = "+ ball_x +" , Y = "+ball_Y;)
		canvas.remove(ball_obj);
		new image();
	}

	function left()
	{
		if(ball_X >=5)
		{
			ball_X = ball_X + block image height;
		console.log("Altura da imagem do bloco t = " + block image height);
		console.log("Quando a tecla direcional baixo é pressionada, X = "+ ball_x +" , Y = "+ball_Y;)
		canvas.remove(ball_obj);
		new image();
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			ball_X = ball_X + block image height;
			console.log("Altura da imagem do bloco t = " + block image height);
			console.log("Quando a tecla direcional baixo é pressionada, X = "+ ball_x +" , Y = "+ball_Y;)
			canvas.remove(ball_obj);
			new image();
		}
	}
	
}

