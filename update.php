<?php
$result = $_POST['chatLog'];
$data = json_decode(file_get_contents('php://input'), true);
$log = $data['chatLog'];
var_dump($log);
echo $strigify;
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
fwrite($myfile, $log);
fclose($myfile);

