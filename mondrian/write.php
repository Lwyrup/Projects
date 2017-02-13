<?php
$file = "art.csv";

$f = fopen($file, "a");
$dataString = $_POST["thing"];
fwrite($f, $dataString);
fclose($f);

?>