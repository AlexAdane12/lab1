<script>
	var v1 = document.getElementById("c1");
	var ctx = v1.getContext("2d");
	var w = v1.width = window.innerWidth;
	var h = v1.height = window.innerHeight;
	
	//ctx.fillStyle = "red";	
	//ctx.fillRect(0, 0 ,w ,h);
	
	//ctx.fillStyle = "yellow";
	//ctx.strokeStyle = "rgb(255,255,255)";
//	ctx.lineWidth = "10";
	
	//ctx.strokeRect(w/2-50,h/2-50,100,100);
	//ctx.moveTo(100,100);
	//ctx.lineTo(200,100);
	//ctx.lineTo(200,200);
	//ctx.lineTo(100,200);
	//ctx.lineTo(100,100);
	//ctx.stroke();
	
	var color= ['white', 'cyan'];
	var index = 0;
	for(var i = 0; i<w; i+=100){
	for (var j = 0; j<h; j+=100){
		if(index > 1)
		index = 0;
		ctx.fillStyle = color[index];
		ctx.fillRect(i,j,100,100);
		index++;
		}
	}
	//ctx.font = "26px Calibri";
	//ctx.fillText("this is cg lab 1",200,200);
	

</script>
