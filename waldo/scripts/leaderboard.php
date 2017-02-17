<?php
//------------ADDING-TO-DATA-HERE------------ADDING-TO-DATA-HERE------------ADDING-TO-DATA-HERE---------------------

if (is_numeric($_POST["score"])){
	$newScoreRow = $_POST["name"].",".$_POST["score"]."\n";


	file_put_contents("../data/highscores.csv", $newScoreRow, FILE_APPEND);
};
















//---------------REPSONSE-HERE-------------RESPONSE-HERE-------------RESPONSE-HERE-------------RESPONSE-HERE------------


//Handles the string of JSON
$response = "";

//Begins looping through csv, building JSON
if (($handle = fopen("../data/highscores.csv", "r")) !== FALSE) {
	//Adds the staring bracket of the JSON object


	$response = $response . "[";
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $items = count($data);  
        //For loop goes through each rows contents 
        //Adds the start of a object 
        $response = $response . " {";



        for ($i=0; $i < $items; $i++) {
        	//Puts quotes around each cells contents
            
            if($i == 0){
            	//If its the first it is the value of the 'name' key
            	$response = $response . '"name": "'.$data[$i].'",';
            }
            else{ //else its value of 'score' key
            	$response = $response . ' "score": "'.$data[$i].'"';
            }
        }


        //Ends the object and puts a delimiter(,) for multiple scores
        $response = $response . "},";
    }

    //Adds the end bracket of the JSON object
    $response = $response . "]";
    fclose($handle);
};






//Removes the last comma so JSON parses correctly
$response[strrpos($response, ",")] = " ";
echo $response;

?>


