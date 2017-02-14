window.addEventListener("load", function(){
	
	picture = document.getElementsByTagName("img")[0];
	picture.addEventListener("click", didTheyFindWaldo);
	picture.addEventListener("click", highlight); //highlight will change and rather be done server-side



	function didTheyFindWaldo(e){
		var x = e.pageX
		var y = e.pageY 
		
		
		requestForWaldo = new XMLHttpRequest();
		requestForWaldo.open('POST', 'tony_stark.php', true);
		requestForWaldo.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		requestForWaldo.send("xpos=" + (x - e.target.offsetLeft) + "&ypos=" + (y - e.target.offsetTop));
		requestForWaldo.addEventListener("load", function(e){
			// IMPORTANT!!! CHANGE .INNERHTML TO INSERTADJACENTHTML() SO IT DOESNT KILL THE TIMER!!! IMPORTANT!!!
			document.getElementById("gameData").innerHTML= "<p id='rspnse'>" + e.target.response + "</p>";
			console.log(e.target.response);
		});


		//highlight(response["mousePos"]["x/y"] )





		// page_ - this.offset____ = co-ordinates relative to image 
		// page_ = actual mouse pos




	}

	function highlight(e){
		console.log(a = e.pageX);
		console.log(e.pageY);
		highlighter = document.getElementsByClassName("highlighter")[0]
		highlighter.style.display = "block"
	
		highlighter.style.top = e.pageY +"px"
		highlighter.style.left = e.pageX  + "px"
	};

});