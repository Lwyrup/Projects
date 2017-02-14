window.addEventListener("load", function(){

	addClickinessToDivs();
	addColorSelection();
	addOptionToSave();

	function addClickinessToDivs(){
		rows = document.getElementById("painting").children;
		for (i = 0; i < rows.length; i++){
			for ( ii = 0; ii < rows[i].children.length; ii++){
				rows[i].children[ii].addEventListener("click", color);
				rows[i].children[ii].style.background = "white";
			};
		};
	};

	function addColorSelection(){
		colors = document.getElementsByClassName("color");
		for (i = 0; i < colors.length; i++){
			colors[i].addEventListener("click", setCurrentColor);
		};
	};

	function addOptionToSave(){
		save_button = document.getElementsByTagName("footer")[0];
		save_button.addEventListener("click", saveThisArt);	
	};

	function color(e){
		e.target.style.background = brushColor;
	};

	function setCurrentColor(e){
		brushColor = e.target.id;
	};

	function saveThisArt(){
		event.preventDefault();
		var data = buildFile();
		var http = new XMLHttpRequest();
		http.open('POST', "write.php", true);
		//I dont understand this below, code breaks when it's removed
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		http.send("thing=" + data);

		http.addEventListener("load", function(e){
			// console.log(JSON.parse(e.target.responseText))
			alert("Response from server received!\n" + e.target.response)
		})
	};

	function buildFile(){
		rows = document.getElementById("painting").children;
		colorData = []

		for (i = 0; i < rows.length; i++){

			for (ii = 0; ii < rows[i].children.length; ii++){
				colorData.push(rows[i].children[ii].style.background);
			};
		};
		return colorData.join(",").concat("\n");
	};

});

brushColor = "white"
