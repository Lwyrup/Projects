<?php

if ($_POST["purpose"] == "validate"){

	$file = '../locations.csv';
	$f = fopen($file, 'r');
	$text = fread($f, filesize($file));
	fclose($f);

	$locationOfWaldo = str_getcsv($text);
	echo checkCoords($locationOfWaldo);
};

if ($_POST["purpose"] == "getscores"){
	//responds to call with JSON object? yes!?
};

function checkCoords($loW){
	if (withinRange($loW, 'x') && withinRange($loW, 'y')){
		return "√ WALDO FOUND!";
	}
	else{
		return "Try again";
	};
};

function withinRange($loW, $xORy){
	$axis = isItXorY($xORy);
	if ($_POST[$xORy."pos"] > $loW[$axis] - 10 && $_POST[$xORy."pos"] < $loW[$axis] + 10){
		return true;
	}
	else{
		return false;
	};
};

function isItXorY($xy){
	if ($xy == "x"){
		return 0;
	}
	else if ($xy == "y"){
		return 1;
	};
};


// echo("\nsent with post: ".$_POST["xpos"]." ".$_POST["ypos"]);

//All php files print/echo as a response default is outside tags
//print/echo is how to bridge a servers response to the js
?>

