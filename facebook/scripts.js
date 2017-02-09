

//¬¬(met)¬¬¬¬¬¬¬¬¬Goals¬¬¬¬¬¬¬¬¬¬¬¬¬
//    √  -Like buttons
//    √  -Comment button cursor redirect
//    √  -Reply button exspansion
//    √  -!Comment submission
//	  √		--get the comment content
//	  √		--[raise an alert() error if nothing has been typed into the textarea
//	  √		--!clone new comment node!
//	  √		--dictate name and content
// 	  √		--[update the number of comments/replies
// 	  √		--add the comment to the correct location in the comments area
//    √  -Profile modal
//       -Share modal
//    √  -Modal control



//EXECUTION HERE AFTER PAGE LOADS
window.addEventListener("load", function () {




//PREVENTS DEFAULTING OF ALL LINKS
	all_links = document.getElementsByTagName("a");
	//loops through adding prevent default to all
	for (i=0; i < all_links.length; i++){
		all_links[i].addEventListener("click", prevent)
	};
//


//PREVENTS DEFAULTING OF ALL SUBMIT BUTTONS
	all_submits = document.getElementsByTagName("input");
	for (i=0; i < all_submits.length; i++){
		all_submits[i].addEventListener("click", prevent)
	};
//




//LIKE FUNCTIONALITY AND REPLY FUNCTIONALITY
	//Grabs element for post like button
	postLike = document.getElementsByClassName("action--like")[0];
	//Grabs elements of all comments 
	commentsLike = document.getElementsByClassName("comment__info")
	//Loops through the length of the comments and adds click events for 
	//like and reply buttons
	for (i = 0; i < commentsLike.length; i++){
		commentsLike[i].childNodes[1].addEventListener("click", likeit);
		commentsLike[i].childNodes[3].addEventListener("click", reply_show);
	};
	//Adds click event for post
	postLike.addEventListener("click", likepost);
//




//PROFILE FUNCTIONALITY
	//Gets all name links parents
	allNames = document.getElementsByClassName("media__info");
	//Loops through names to give each an event
	for (i = 0; i < allNames.length; i++){
		//Checks to see if it is a name or form field
		if (allNames[i].getElementsByTagName("a").length > 0){ 
			allNames[i].childNodes[1].addEventListener("click", viewprofile);
		};
	};
//




//MODAL WINDOW FUNCTIONALITY
	//Modal close event for outer div
	modal = document.getElementsByClassName("modal")[0];
	modal.addEventListener("click", closeprofile);
	//Modal close event for "x" box
	close = document.getElementsByClassName("modal__close")[0];
	close.addEventListener("click", closeprofile);
//




//COMMENT ON POST FUNCTIONALITY
	//Get the post button
	comment_link = document.getElementsByClassName("action--comment")[0];

	//Add event to move to box form
	comment_link.addEventListener("click", commentOnPost);
		//commentonpost function
	//
//



//COMMENTING FUNCTIONALITY
	//Find and get all submit buttons
	submits = document.getElementsByTagName("input");

	//Give onclick event to do something
	for (i = 0; i < submits.length; i++){
		submits[i].addEventListener("click", submitComment);
	};

//








});











//-------FUNCTIONS HERE-------FUNCTIONS HERE-------FUNCTIONS HERE-------///



//Adds click events for commment like buttons 
function likeit(){
	//Gets string of likes from this comment and gets the number
	count = parseInt(this.parentNode.childNodes[5].textContent.split(" ")[0])
	//Checks if there is 0 likes if not acts normal
	if (Object.is(count,NaN)){
		this.innerHTML="Unlike"
		this.parentNode.childNodes[5].innerHTML = "1 likes"
	}
	else{
		decideLike(this)
	};
};




function decideLike(current){
	if (current.innerHTML=="Like"){
		current.innerHTML="Unlike";
		//Gets the string of likes in html and sets it equal to (it + 1)
		current.parentNode.childNodes[5].innerHTML = count + 1 + " likes";
		return;
	}
	//If comment is unliked and is clicked turns to like
	else if (current.innerHTML=="Unlike"){
		current.innerHTML="Like";
		//Gets the string of likes in html and sets it equal to (it - 1)
		current.parentNode.childNodes[5].innerHTML = count - 1 + " likes";
		return;
	};
};



//Likes/unlikes main post
function likepost(){
	//Gets string and number
	count = parseInt(document.getElementsByClassName("like--count")[0].textContent.split(" ")[0]);
	//see above
	if (this.innerHTML=="Like"){
		this.innerHTML="Unlike";
		document.getElementsByClassName("like--count")[0].innerHTML = count + 1 + " likes";
		return;
	}
	else if (this.innerHTML=="Unlike"){
		this.innerHTML="Like";
		document.getElementsByClassName("like--count")[0].innerHTML = count - 1 + " likes";
		return;
	}
};



//Displays modal window and person/friends
function viewprofile (){
	//Gets the modal, name, and generates friends
	modal = document.getElementsByClassName("full__modal")[0];
	name = this.textContent;
	friends = Math.ceil(Math.random()*5000);
	//Displays the modal with the name and # of friends
	modal.style.display="block";
	document.getElementsByClassName("modal__title")[0].textContent = name;
	document.getElementsByClassName("modal__body")[0].innerHTML = "Has " + friends + " friends.";
};



//Closes modal window
function closeprofile(){
	modal = document.getElementsByClassName("full__modal")[0];
	modal.style.display="none";
};



//Drops and hides replies
function reply_show(){
	//Gets the replies section associated with it
	replies = this.parentNode.parentNode.children[2];
	//If not shown, shows it
	if (replies.style.display=="none"){
		replies.style.display="block";
		return;
	}
	//else if shown, hides it
	else if (replies.style.display=="block"){
		replies.style.display="none"
		return;
	}
};



//Finds and enters cursor into main post field
function commentOnPost(){
	//get form boxes
	comment_forms = document.getElementsByClassName("commentForm media");
	//select last box(aka main post comment)
	main_comment = comment_forms[comment_forms.length - 1].children[1].children[0].children[0];
	//tell cursor to move there
	main_comment.focus();
};



//Prevents default behavior
function prevent(){event.preventDefault()};



//Adds comment content, sends alert if empty and resets form
function submitComment(){
	//Gets the users comment
	current = this
	comment = this.parentNode.children[0].value
	//Checks if the comment is empty or not
	//If so alerts user
	if (comment == ""){
		alert("Cannot submit a comment with no content.\n Please try again.");
	}
	//else begins the process of adding the comment to page
	else{
		writeComment(comment);
		addComment(current);
	};
	this.parentNode.reset(); //clears form field after entry
};






//Adds a new comment above form field
function addComment(current){
	//Gets all under the classes and selects the last (aka comment template)
	comments = document.getElementsByClassName("comment media");
	//Clones the template with the content already writen
	comment_format = comments[comments.length-1].cloneNode(true);
	//Goes up to the replies box of that thread
	replies_box = current.parentElement.parentElement.parentElement.parentElement;
	new_comment_pos = replies_box.childNodes.length - 2
	//Adds the cloned template at the bottom of comments but before the form field
	replies_box.insertBefore(comment_format, replies_box.childNodes[new_comment_pos]);
	//Makes it visable
	replies_box.childNodes[new_comment_pos].style.display = "flex";
	//add events to new comments
	addEventsToNew(replies_box.childNodes[new_comment_pos])
	//Updates the # of replies
	countReplies(current);
};



//Updates reply counts when a new comment is added
function countReplies(current){
	//gets the reply count associated with the thread
	reply_count = current.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[1]
	//Gets the current count, adds one, then sets it to a var
	new_count = parseInt(reply_count.textContent.split(" ")[0]) + 1;
	//Uses reply count and the new count to decide where to add
	whereToAddReply(reply_count, new_count);
};



//Dictates where the number will increase
function whereToAddReply(reply_count, new_count){
	//if is not a number
	if (Object.is(NaN, new_count)){
		//checks if this a comment reply button calling
		if (reply_count.textContent == "Reply"){ reply_count.textContent = "1 replies"; }
		//if not it must be the main post
		else{ countComments(); };
	}
	//if is a number updates the replies associated to it
	else{
		reply_count.textContent = new_count + " replies";
	};
};






//Updates the post commnets 
function countComments(){
	count_string = document.getElementsByClassName("post__info")[0].children[1];
	new_count = parseInt(count_string.textContent.split(" ")[0]) + 1;
	count_string.textContent = new_count + " comments";
};



//Writes the users input to the template
function writeComment(comment){
	//Gets the template
	comments = document.getElementsByClassName("comment media");
	comment_format = comments[comments.length-1];
	//Changes the body text to comment text
	comment_format.children[1].childNodes[2].textContent = " " + comment;
};



//Adds like and profile events to each new element
function addEventsToNew(pos){
	
	like_button = pos.children[1].children[1].children[0];
	profile_button = pos.children[1].children[0];
	reply_button = pos.children[1].children[1].children[1];
	buttons = [like_button, profile_button, reply_button];
	//Adds like functionality
	like_button.addEventListener("click", likeit);
	//Profile modal functionality
	profile_button.addEventListener("click", viewprofile);
	//Prevents default
	buttons.forEach(function(item){
		item.addEventListener("click", prevent);
	});
};


















