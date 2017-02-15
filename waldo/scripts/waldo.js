window.addEventListener("load", function(){



	start = document.getElementById("go");
	picture = document.getElementsByTagName("img")[0];

	start.addEventListener("click", startGame);
	picture.addEventListener("click", didTheyFindWaldo);
	picture.addEventListener("click", highlight); //highlight will change and rather be done server-side



	function didTheyFindWaldo(e){
		x = e.pageX;
		y = e.pageY;
		
		requestForWaldo = new XMLHttpRequest();
		requestForWaldo.open('POST', 'tony_stark.php', true);
		requestForWaldo.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		requestForWaldo.send("xpos=" + (x - e.target.offsetLeft) + "&ypos=" + (y - e.target.offsetTop));
		requestForWaldo.addEventListener("load", showResponse);
	};



	function showResponse(e){
		document.getElementById("rspnse").innerHTML = e.target.response;

		if (e.target.response.includes("√")){ //When user wins
			endGame();
		} 
		else{ //When user loses
			console.log("not found");
		};
	};



	function highlight(e){
		highlighter = document.getElementsByClassName("highlighter")[0]
		highlighter.style.display = "block"
	
		highlighter.style.top = e.pageY +"px"
		highlighter.style.left = e.pageX  + "px"
	};



	function startGame(){
		document.getElementById("startScreen").style.display = "none";
		//Start timer here
		timeStart = new Date().getTime();
		document.getElementById("timer").innerText = timeStart;
	}

	function endGame(){
		document.getElementById("endModal").style.display = "block";
		//End timer here
		timeFinish = new Date().getTime();
	};














});






