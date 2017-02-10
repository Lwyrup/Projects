
//EXECUTION HERE AFTER PAGE LOADS
window.addEventListener("load", function () {

	setUpDynamics();

	//Adds the events for the entire page
	function setUpDynamics(){
		preventTagsOnPage();
		addLikesToPage();
		addCommentsToPage();
		addModalWindowToPage();
	};

	//Adds all the preventDefaults
	function preventTagsOnPage(){
		preventATags();
		preventInputTags();
	};

	//Adds all of the like features
	function addLikesToPage(){
		addLikeToMainPost();
		addFeaturesToComments();
	};

	//Adds all of the commenting features
	function addCommentsToPage(){
		addFocusToPostComment();
		addCommentablityToPage();
	};

	//Adds all the features for the modal window
	function addModalWindowToPage(){
		addProfileView();
		addModalWindowClose();
		addShare();
	};

	//Selects all of the 'a' tag links and prevents thier default
	function preventATags(){
		all_links = document.getElementsByTagName("a");
		for (i=0; i < all_links.length; i++){
			all_links[i].addEventListener("click", prevent)
		};
	};

	//Selects all input tags and prevents the default
	function preventInputTags(){
		all_submits = document.getElementsByTagName("input");
		for (i=0; i < all_submits.length; i++){
			all_submits[i].addEventListener("click", prevent)
		};
	};

	//Adds the abillity to like the main post
	function addLikeToMainPost(){
		postLike = document.getElementsByClassName("action--like")[0];
		postLike.addEventListener("click", likepost);
	};

	//Adds like and reply features to the comments
	function addFeaturesToComments(){
		commentsLike = document.getElementsByClassName("comment__info");
		for (i = 0; i < commentsLike.length; i++){
			commentsLike[i].childNodes[1].addEventListener("click", likeit);
			commentsLike[i].childNodes[3].addEventListener("click", reply_show);
		};
	};

	//Adds the ability to view profiles
	function addProfileView(){
		allNames = document.getElementsByClassName("media__info");
		for (i = 0; i < allNames.length; i++){
			if (allNames[i].getElementsByTagName("a").length > 0){ 
				allNames[i].childNodes[1].addEventListener("click", viewprofile);
			};
		};
	};

	//Gives the modal window 'close' events
	function addModalWindowClose(){
		modal = document.getElementsByClassName("modal")[0];
		modal.addEventListener("click", closeprofile);
		close = document.getElementsByClassName("modal__close")[0];
		close.addEventListener("click", closeprofile);
	};

	//Allows 'comment button' on main post to scroll to form
	function addFocusToPostComment(){
		comment_link = document.getElementsByClassName("action--comment")[0];
		comment_link.addEventListener("click", commentOnPost);
	};

	//Finds all submit buttons and when clicked will 'comment'
	function addCommentablityToPage(){
		submits = document.getElementsByTagName("input");
		for (i = 0; i < submits.length; i++){
			submits[i].addEventListener("click", submitComment);
		};
	};

	//Lets the modal window show a share view
	function addShare(){
		post = document.getElementsByClassName("action action--share")[0];
		post.addEventListener("click", share);
	};
});

//-------FUNCTIONS HERE-------FUNCTIONS HERE-------FUNCTIONS HERE-------///


//Adds click events for commment like buttons
//Gets string of likes from this comment and gets the number

function likeit(){
	count = parseInt(this.parentNode.childNodes[5].textContent.split(" ")[0])
	likeValid(this)
};

//Checks if there is NaN likes if not acts normal
//
//locale is the node containing '_ likes' and if NaN it is the first like

function likeValid(locale){
	if (Object.is(count,NaN)){
		locale.innerHTML="Unlike"
		locale.parentNode.childNodes[5].innerHTML = "1 likes"
	}
	else{
		decideLike(locale)
	};
};

//Gets the string of likes in html and sets it equal to (it + 1)
//If comment is unliked and is clicked turns to like
//Gets the string of likes in html and sets it equal to (it - 1)
//
//Current is the same as locale from above but here it has been passed and is not NaN

function decideLike(current){
	if (current.innerHTML=="Like"){
		current.innerHTML="Unlike";
		current.parentNode.childNodes[5].innerHTML = count + 1 + " likes";
		return;
	}
	else if (current.innerHTML=="Unlike"){
		current.innerHTML="Like";
		current.parentNode.childNodes[5].innerHTML = count - 1 + " likes";
		return;
	};
};

//Likes/unlikes main post
//Gets string and number

function likepost(){
	count = parseInt(document.getElementsByClassName("like--count")[0].textContent.split(" ")[0]);
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
//Gets the modal, name, and generates friends
//Displays the modal with the name and # of friends
//
//e is for event

function viewprofile (e){
	modal = document.getElementsByClassName("full__modal")[0];
	name = e.target.textContent;
	friends = Math.ceil(Math.random()*5000);
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
//Gets the replies section associated with it
//If not shown, shows it
//else if shown, hides it

function reply_show(){
	replies = this.parentNode.parentNode.children[2];
	if (replies.style.display=="none"){
		replies.style.display="block";
	}
	else if (replies.style.display=="block"){
		replies.style.display="none"
	}
};

//Finds and enters cursor into main post field
//get form boxes
//select last box(aka main post comment)
//tell cursor to move there

function commentOnPost(){
	comment_forms = document.getElementsByClassName("commentForm media");
	main_comment = comment_forms[comment_forms.length - 1].children[1].children[0].children[0];
	main_comment.focus();
};

//Prevents default behavior

function prevent(){event.preventDefault()};

//Adds comment content, sends alert if empty and resets form
//Gets the users comment
//clears form field after entry
//
//this is the submit button

function submitComment(){
	comment = this.parentNode.children[0].value
	isCommentValid(this, comment);
	this.parentNode.reset(); 
};

//Checks if the comment is empty or not
//If so alerts user
//else begins the process of adding the comment to page
//
//Area is the submit button with the event trigger 
//Comment is the actual text from user as a string

function isCommentValid(area, comment){
	if (comment == ""){
		alert("Cannot submit a comment with no content.\n Please try again.");
	}
	else{
		writeComment(comment);
		addComment(area);
	};
};

//Adds a new comment above form field
//
//Gets all under the classes and selects the last (aka comment template)
//Clones the template with the content already writen
//Goes up to the replies box of that thread
//Calls to add functionality to the new comment
//Updates the # of replies
//
//---Variables---
//Current is the submit button with trigger
//Comments are all of the comments in page
//Comment_format is the last comment in page that is always hidden
//replies_box is the replies area associated with the submit button
//new_comment_pos is the last comment before the text field

function addComment(current){
	comments = document.getElementsByClassName("comment media");
	comment_format = comments[comments.length-1].cloneNode(true);
	replies_box = current.parentElement.parentElement.parentElement.parentElement;
	new_comment_pos = replies_box.childNodes.length - 2
	insertShowAndIntegrate(replies_box, comment_format, new_comment_pos);
	countReplies(current);
};

//Adds the cloned template at the bottom of comments but before the form field
//Makes it visable
//add events to new comments
//
//where is the replies area for that thread
//what is the actual string of what user typed
//toWhere is the second to last item in the replies area (aka new_comment_pos)

function insertShowAndIntegrate(where, what, toWhere){
	where.insertBefore(what, where.childNodes[toWhere]);
	where.childNodes[toWhere].style.display = "flex";
	addEventsToNew(where.childNodes[toWhere])
};

//Updates reply counts when a new comment is added
//gets the reply count associated with the thread
//Gets the current count, adds one, then sets it to a var
//Uses reply count and the new count to decide where to add

function countReplies(current){
	reply_count = current.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[1]
	new_count = parseInt(reply_count.textContent.split(" ")[0]) + 1;
	whereToAddReply(reply_count, new_count);
};

//Dictates where the number will increase
//if is not a number
//checks if this a comment reply button calling
//if not it must be the main post
//if is a number updates the replies associated to it

function whereToAddReply(reply_count, new_count){
	if (Object.is(NaN, new_count)){
		if (reply_count.textContent == "Reply"){ reply_count.textContent = "1 replies"; }
		else{ countComments(); };
	}
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
//Gets the template
//Changes the body text to comment text

function writeComment(comment){
	comments = document.getElementsByClassName("comment media");
	comment_format = comments[comments.length-1];
	comment_format.children[1].childNodes[2].textContent = " " + comment;
};

//Gets all the new comments buttons and passes it to eventTime

function addEventsToNew(pos){
	like_button = pos.children[1].children[1].children[0];
	profile_button = pos.children[1].children[0];
	reply_button = pos.children[1].children[1].children[1];
	buttons = [like_button, profile_button, reply_button];
	eventTime(buttons);
};

//Adds like and profile events to each new element
//Adds like functionality
//Profile modal functionality
//Prevents default

function eventTime(arrOfButtons){
	arrOfButtons[0].addEventListener("click", likeit);
	arrOfButtons[1].addEventListener("click", viewprofile);
	//arrOfButtons[2] (could add a reply form here for future)
	arrOfButtons.forEach(function(item){
		item.addEventListener("click", prevent);
	});
};

//Share modal stuff here function
//get and view modal
//get e.target post content and name
//set those as modal title and body

function share(){
	modal = document.getElementsByClassName("full__modal")[0];
	modal.style.display="block"
	name = "Share " + document.getElementsByClassName("media__info")[0].children[0].textContent + "'s post";
	body = document.getElementsByClassName("post__main")[0].childNodes[3].textContent;
	document.getElementsByClassName("modal__title")[0].textContent = name;
	document.getElementsByClassName("modal__body")[0].textContent = body;
};
