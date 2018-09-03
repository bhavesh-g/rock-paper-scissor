$("#play").click(function(event) {

	/* Act on the event */
	$("#resultline").text('FIRST TO SCORE 10 POINTS, WILL WIN.Now START!');
	
	$(window).load(function() {
  $("html, body").animate({ scrollTop: $(document).height() }, 1000);
});

});
var rock=0;
var paper=0;
var scissor=0;

var rockcomp=0;
var papercomp=0;
var scissorcomp=0;
var draw=0
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
$("#rock").click(function(event) {
	window.navigator.vibrate(10);
	$("#computer").text('');
	$("#player").text('');
	/* Act on the event */
	$("#player").css('backgroundImage', "url('images/rock.gif')");
	rock=rock+1;
	$("#youchose").text('You chose ROCK');
	a=getRandomInt(1,4);
	if(a==1){rockcomp=rockcomp+1;
		var audio = new Audio('draw_something.mp3');
audio.play();
		$("#computer").css('backgroundImage', "url('images/rock.gif')");
		$("#resultline").text('DRAW'); draw=draw+1;
		$("#computerchooses").text('Computer chose ROCK');
	}

	if(a==2){ papercomp=papercomp+1;
		var audio = new Audio('fail_button.mp3');
audio.play();
		$("#computer").css('backgroundImage', "url('images/paper.png')");
		$("#resultline").text('YOU LOSE');
		scoreinc=Number($("#compscore").html())+1; 
		$("#compscore").html(scoreinc); if(scoreinc==10){alert("computer wins!\nSummary:\nmatches played:"+String(Number(rock)+Number(paper)+Number(scissor))+"\nnumber of draws: "+draw+"\ncomputer chose rock: "+rockcomp+"\ncomputer chose paper: "+papercomp+"\ncomputer chose scissor: "+scissorcomp+"\nyou chose rock: "+rock+"\nyou chose paper: "+paper+"\nyou chose scissor: "+scissor); setTimeout(function(){location.reload();},1000); }
		$("#computerchooses").text('Computer chose PAPER');
		
	}

	if(a==3){ scissorcomp=scissorcomp+1;
	var audio = new Audio('touchid_success.mp3');
audio.play();
		$("#computer").css('backgroundImage', "url('images/scissor.gif')");
		$("#resultline").text('YOU WIN');
		scoreinc=Number($("#playerscore").html())+1; 
		$("#playerscore").html(scoreinc); if(scoreinc==10){alert("you win!\nSummary:\nmatches played:"+String(Number(rock)+Number(paper)+Number(scissor))+"\nnumber of draws: "+draw+"\ncomputer chose rock: "+rockcomp+"\ncomputer chose paper: "+papercomp+"\ncomputer chose scissor: "+scissorcomp+"\nyou chose rock: "+rock+"\nyou chose paper: "+paper+"\nyou chose scissor: "+scissor);setTimeout(function(){location.reload();},1000); }
		$("#computerchooses").text('Computer chose SCISSOR');
	}

});

$("#paper").click(function(event) {
	window.navigator.vibrate(10);
	$("#computer").text('');
	$("#player").text('');
	/* Act on the event */
	$("#player").css('backgroundImage', "url('images/paper.gif')");
$("#youchose").text('You chose PAPER');
	paper=paper+1;


	a=getRandomInt(1,4);
	if(a==1){
		var audio = new Audio('draw_something.mp3');
audio.play();
		papercomp=papercomp+1;
		$("#computer").css('backgroundImage', "url('images/paper.gif')");
		
		$("#resultline").text('DRAW'); draw=draw+1;
		$("#computerchooses").text('Computer chose PAPER');

	}

	if(a==2){ scissorcomp=scissorcomp+1;
		 var audio = new Audio('fail_button.mp3');
audio.play();
		 
		$("#computer").css('backgroundImage', "url('images/scissor.png')");
		$("#resultline").text('YOU LOSE');
		scoreinc=Number($("#compscore").html())+1; 
		$("#compscore").html(scoreinc); if(scoreinc==10){alert("computer wins!\nSummary:\nmatches played:"+String(Number(rock)+Number(paper)+Number(scissor))+"\nnumber of draws: "+draw+"\ncomputer chose rock: "+rockcomp+"\ncomputer chose paper: "+papercomp+"\ncomputer chose scissor: "+scissorcomp+"\nyou chose rock: "+rock+"\nyou chose paper: "+paper+"\nyou chose scissor: "+scissor); setTimeout(function(){location.reload();},1000); }
		$("#computerchooses").text('Computer chose SCISSOR');
		
	}

	if(a==3){ rockcomp=rockcomp+1;

		$("#computer").css('backgroundImage', "url('images/rock.gif')");
		var audio = new Audio('touchid_success.mp3');
audio.play();
		$("#resultline").text('YOU WIN');
		scoreinc=Number($("#playerscore").html())+1; 
		$("#playerscore").html(scoreinc); if(scoreinc==10){alert("you win!\nSummary:\nmatches played:"+String(Number(rock)+Number(paper)+Number(scissor))+"\nnumber of draws: "+draw+"\ncomputer chose rock: "+rockcomp+"\ncomputer chose paper: "+papercomp+"\ncomputer chose scissor: "+scissorcomp+"\nyou chose rock: "+rock+"\nyou chose paper: "+paper+"\nyou chose scissor: "+scissor);setTimeout(function(){location.reload();},1000); }
		$("#computerchooses").text('Computer chose ROCK');
	}
	
});

$("#scissor").click(function(event) {
	
	window.navigator.vibrate(10);
	$("#computer").text('');
	$("#player").text('');
	/* Act on the event */
	$("#player").css('backgroundImage', "url('images/scissor.gif')");
	$("#youchose").text('You chose SCISSOR');
	scissor=scissor+1;

	a=getRandomInt(1,4);
	if(a==1){scissorcomp=scissorcomp+1;
		 var audio = new Audio('draw_something.mp3');
audio.play();
		$("#computerchooses").text('Computer chose SCISSOR');
		$("#computer").css('backgroundImage', "url('images/scissor.gif')");
		$("#resultline").text('DRAW'); draw=draw+1;

	}

	if(a==2){ rockcomp=rockcomp+1;
		 var audio = new Audio('fail_button.mp3');
audio.play();
		 
		$("#computerchooses").text('Computer chose ROCK');
		$("#computer").css('backgroundImage', "url('images/rock.png')");
		$("#resultline").text('YOU LOSE');
		scoreinc=Number($("#compscore").html())+1; 
		$("#compscore").html(scoreinc); if(scoreinc==10){alert("computer wins!\nSummary:\nmatches played:"+String(Number(rock)+Number(paper)+Number(scissor))+"\nnumber of draws: "+draw+"\ncomputer chose rock: "+rockcomp+"\ncomputer chose paper: "+papercomp+"\ncomputer chose scissor: "+scissorcomp+"\nyou chose rock: "+rock+"\nyou chose paper: "+paper+"\nyou chose scissor: "+scissor); setTimeout(function(){location.reload();},1000); }
		
		
	}

	if(a==3){ papercomp=papercomp+1
		$("#computerchooses").text('Computer chose PAPER');
		var audio = new Audio('touchid_success.mp3');
audio.play();
		$("#computer").css('backgroundImage', "url('images/paper.gif')");
		$("#resultline").text('YOU WIN');
		scoreinc=Number($("#playerscore").html())+1; 
		$("#playerscore").html(scoreinc); if(scoreinc==10){alert("you win!\nSummary:\nmatches played:"+String(Number(rock)+Number(paper)+Number(scissor))+"\nnumber of draws: "+draw+"\ncomputer chose rock: "+rockcomp+"\ncomputer chose paper: "+papercomp+"\ncomputer chose scissor: "+scissorcomp+"\nyou chose rock: "+rock+"\nyou chose paper: "+paper+"\nyou chose scissor: "+scissor);setTimeout(function(){location.reload();},1000); }
		
	}
	
});
