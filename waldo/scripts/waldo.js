window.addEventListener("load", function(){
	
	picture = document.getElementsByTagName("img")[0];
	picture.addEventListener("click", didTheyFindWaldo);
	picture.addEventListener("click", highlight); //highlight will change and rather be done server-side



	function didTheyFindWaldo(e){
		var x = e.pageX - this.offsetLeft
		var y = e.pageY - this.offsetTop
		if (x > 500 && x < 520 && y > 365 && y < 405){
			console.log("You found him!")
		}
		else{
			console.log("Try again")
		};
	}

	function highlight(e){
		highlighter = document.getElementsByClassName("highlighter")[0]
		highlighter.style.display = "block"
		highlighter.style.top = e.pageY - 22.5 + "px"
		highlighter.style.left = e.pageX - 22.5 + "px"
	};

});