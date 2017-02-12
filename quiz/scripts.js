window.addEventListener("load", function(){

	begin = document.getElementsByClassName("begin")[0];
	begin.addEventListener("click", startGame);

	submitButton =document.getElementsByClassName("answer")[0].children[1]
	submitButton.addEventListener("click", prevent)
	submitButton.addEventListener("click", checkAnswer)


});


qList = [
	["When was Abraham Lincoln born?", "1809"],
	["What is 18 + 09?", "27"],
	["Awilix is a _____ godess", "mayan"],
	["What is shorthand for: document object model?", "dom"],
	["Fallout: New Vegas takes place in which state?", "nevada"],
	["What was the answer to the previous question?", ""]
];

ANSWER = "";


function startGame(e){
	e.target.parentElement.parentElement.style.display="none";
	setQuestion();
};

function prevent(){
	event.preventDefault();
};

function checkAnswer(e){
	answer = e.target.previousElementSibling.value.toLowerCase();
	if (answer == ANSWER){
		isRight();
	}
	else{
		isWrong();
	};
	e.target.parentNode.reset();
};

function isRight(){
	score = getNumber(document.getElementsByClassName("score")) + 1;
	showMessage("Correct!");
	document.getElementsByClassName("score")[0].textContent = "Score: " + score;
	roundDone();
}

function isWrong(){
	showMessage("Wrong answer!");
	roundDone();
}

function roundDone(){
	round = getNumber(document.getElementsByClassName("round")) + 1;
	document.getElementsByClassName("round")[0].textContent = "Question: " + round;
	setQuestion();
}

function getNumber(whereFrom){
	return parseInt(whereFrom[0].textContent.split(" ")[1]);
};

function setQuestion(){
	random = qList[Math.round(Math.random()*(qList.length - 1))];
	if (random != qList[5]){
		ANSWER = random[1] 
	};
	document.getElementById("question").textContent = random[0];
};


function showMessage(message){
	document.getElementById("message").textContent = message;
	document.getElementById("message").style.display = "block";
	setTimeout(function(){document.getElementById("message").style.display="none"},3000);
};



// questions={
// 	"1" => {q = "when was abraham lincoln born", a = "1809"}
// 	"2" => {q = "what was the previous answer", a = "1809"}
// 	"3" => {q = "what is 18 + 09", a = "27"}
// }




