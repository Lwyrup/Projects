window.addEventListener("load", function(){

	submit = document.getElementById("playerForm").children[2];
	start = document.getElementById("go");
	picture = document.getElementsByTagName("img")[0];

	submit.addEventListener("click", setPlayersName);
	start.addEventListener("click", startGame);
	picture.addEventListener("click", didTheyFindWaldo);
	picture.addEventListener("click", highlight); //highlight will change and rather be done server-side



	function didTheyFindWaldo(e){
		x = e.pageX;
		y = e.pageY;
		params = "xpos=" + (x - e.target.offsetLeft) + "&ypos=" + (y - e.target.offsetTop);
		sendRequest("POST", "scripts/tony_stark.php",params, showResponse);
	};


	function sendRequest(method, phpFile, params, afterLoad){
		request = new XMLHttpRequest();
		request.open(method, phpFile, true);
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		request.send(params);
		request.addEventListener("load", afterLoad);
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
		startTimer();
	}

	function endGame(){
		timeToFind = document.getElementById("timer").textContent;
		document.getElementById("yourTime").textContent = timeToFind;
		//NOTE IN THE BELLOW REQUEST, USE PARAMS TO SEND timeToFind OVER TO CSV
		params = "name=" + name + "&score=" + timeToFind;
		sendRequest("POST","scripts/leaderboard.php",params,generateScoreboard);
		document.getElementById("endModal").style.display = "block";
		stopTimer();
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



	function generateScoreboard(e){
		allScores = parseJ(e.target.response);
		sortByHighest(allScores);
		fillHTML(allScores);
	};

	function parseJ(stringJSON){
		return JSON.parse(stringJSON);		
	};

	function sortByHighest(scoreJSON){
		scoreJSON.sort(function(a,b){ return a["score"] - b["score"] });
	};

	function fillHTML(data){
		stringHTML = '';
		for (i = 0; i < data.length && i < 4; i++){
			
			stringHTML += "<tr><td>" + data[i]["name"] + "</td>" + "<td>" + data[i]["score"] + "</td></tr>";
		};
		document.getElementById("topPlayers").innerHTML = stringHTML;
	}

	function setPlayersName(e){
		input = e.target.parentElement.children[1].value;
		
		if (input.match(/[a-z]/gi)){
			name = input.replace(/[^a-z]/gi, "");
			e.target.parentElement.style.display="none";
		}
		else{
			alert("Enter a valid name");
		};
	};






});






