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
		requestForWaldo.open('POST', 'scripts/tony_stark.php', true);
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
		highlighter.style.top = e.pageY - 26 +"px"
		highlighter.style.left = e.pageX - 26 + "px"
		setTimeout(unhighlight,750);
	};

	function unhighlight(){
		highlighter.style.display = "none"
	};

	function startGame(){
		document.getElementById("startScreen").style.display = "none";
		//Start timer here
		startTimer();
	}

	function endGame(){
		timeToFind = document.getElementById("timer").textContent;
		document.getElementById("yourTime").textContent = timeToFind;
		//getTopPlayers(); ------------------------------------------
		document.getElementById("endModal").style.display = "block";
		//End timer here
		stopTimer();
	};

	function getTopPlayers(){
		//Send request to server for top player scores
		//Data sent back as json?? 
		//scores = [ 
		// {player => "Austin", score => "1.020"},
		// {player => "Nate", score => "1.320"}
		//  ];
		//Use response to generate <tbody> in html
	};



	function startTimer(){
		myTimer = setInterval(upTimer, 10);
	};

	function stopTimer(){
		clearInterval(myTimer);
	};

	function upTimer(){
		newTime = parseFloat(document.getElementById("timer").textContent) + 0.01;
		document.getElementById("timer").textContent = newTime.toFixed(3);
	};





});






