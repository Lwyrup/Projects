<?php
$file = "art.csv";

$f = fopen($file, "a");
$dataString = $_POST["thing"];
fwrite($f, $dataString);
fclose($f);


echo "Painting has been saved"
//index.php can go back to html, becuase the javascript is the 'bridge' to php
?>



