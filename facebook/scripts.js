
//EXECUTION HERE AFTER PAGE LOADS
window.addEventListener("load", function () {
	
	//Grabs element for post like button
	postLike = document.getElementsByClassName("action--like")[0];


	//Grabs elements of all comments 
	commentsLike = document.getElementsByClassName("comment__info")


	//Loops through the length of the comments and adds click events for 
	//like and reply buttons
	for (var i = 0; i < commentsLike.length; i++){
		commentsLike[i].childNodes[1].addEventListener("click", likeit);
		commentsLike[i].childNodes[3].addEventListener("click", reply_holder);
	}


	//WIP for post like button
	postLike.addEventListener("click", likepost);

});



//FUNCTIONS HERE



//Adds click events for commment like buttons 
function likeit(){

	//If commment is like and is clicked turns to unlike
	if (this.innerHTML=="Like"){
		this.innerHTML="Unlike";

		//Gets string of likes from this comment and gets the number
		count = parseInt(this.parentNode.childNodes[5].textContent.split(" ")[0])

		//Gets the string of likes in html and sets it equal to (it + 1)
		this.parentNode.childNodes[5].innerHTML = count + 1 + " likes";
		return;
	}

	//If comment is unliked and is clicked turns to like
	if (this.innerHTML=="Unlike"){
		this.innerHTML="Like";

		//Gets string of likes from this comment and gets the number
		count = parseInt(this.parentNode.childNodes[5].textContent.split(" ")[0])

		//Gets the string of likes in html and sets it equal to (it - 1)
		this.parentNode.childNodes[5].innerHTML = count - 1 + " likes";
		return;
	}
};



//WIP post liker -working on this
function likepost(){
	if (this.innerHTML=="Like"){
		this.innerHTML="Unlike";
	}
	if (this.innerHTML=="Unlike"){
		this.innerHTML="Like";
	}
};



//Place-holder for click on reply button
function reply_holder(){
	this.style.color="orange";
};


