$("#play").click(function(event) {
	/* Act on the event */
	$("#resultline").html('<h1>First to 10 points will win</h1>');

});
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
$("#rock").click(function(event) {
	/* Act on the event */
	$("#player").css('backgroundImage', "url('images/rock.gif')");

	a=getRandomInt(1,4);
	if(a==1){
		$("#computer").css('backgroundImage', "url('images/rock.gif')");
		$("#resultline").html('DRAW');

	}

	if(a==2){
		$("#computer").css('backgroundImage', "url('images/paper.png')");
		$("#resultline").html('YOU LOSE');
		scoreinc=Number($("#compscore").html())+1; 
		$("#compscore").html(scoreinc); if(scoreinc==10){alert("computer wins!"); setTimeout(function(){location.reload();},1000); }
		
		
	}

	if(a==3){
		$("#computer").css('backgroundImage', "url('images/scissor.gif')");
		$("#resultline").html('YOU WIN');
		scoreinc=Number($("#playerscore").html())+1; 
		$("#playerscore").html(scoreinc); if(scoreinc==10){alert("you win!"); setTimeout(function(){location.reload();},1000); }
		
	}

});

$("#paper").click(function(event) {
	/* Act on the event */
	$("#player").css('backgroundImage', "url('images/paper.gif')");




	a=getRandomInt(1,4);
	if(a==1){
		$("#computer").css('backgroundImage', "url('images/paper.gif')");
		
		$("#resultline").html('DRAW');

	}

	if(a==2){
		$("#computer").css('backgroundImage', "url('images/scissor.png')");
		$("#resultline").html('YOU LOSE');
		scoreinc=Number($("#compscore").html())+1; 
		$("#compscore").html(scoreinc); if(scoreinc==10){alert("computer wins!"); setTimeout(function(){location.reload();},1000); }
		
		
	}

	if(a==3){
		$("#computer").css('backgroundImage', "url('images/rock.gif')");
		
		$("#resultline").html('YOU WIN');
		scoreinc=Number($("#playerscore").html())+1; 
		$("#playerscore").html(scoreinc); if(scoreinc==10){alert("you win!"); setTimeout(function(){location.reload();},1000); }
		
	}
	
});

$("#scissor").click(function(event) {
	/* Act on the event */
	$("#player").css('backgroundImage', "url('images/scissor.gif')");



	a=getRandomInt(1,4);
	if(a==1){
		
		$("#computer").css('backgroundImage', "url('images/scissor.gif')");
		$("#resultline").html('DRAW');

	}

	if(a==2){
		$("#computer").css('backgroundImage', "url('images/rock.png')");
		$("#resultline").html('YOU LOSE');
		scoreinc=Number($("#compscore").html())+1; 
		$("#compscore").html(scoreinc); if(scoreinc==10){alert("computer wins!"); setTimeout(function(){location.reload();},1000); }
		
		
	}

	if(a==3){
		
		$("#computer").css('backgroundImage', "url('images/paper.gif')");
		$("#resultline").html('YOU WIN');
		scoreinc=Number($("#playerscore").html())+1; 
		$("#playerscore").html(scoreinc); if(scoreinc==10){alert("you win!"); setTimeout(function(){location.reload();},1000); }
		
	}
	
});