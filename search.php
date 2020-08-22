<?php

$data = json_decode(file_get_contents('php://input'), true);

$myfile = fopen("newfile.txt", "r");
$log = fread($myfile, filesize("newfile.txt"));
fclose($myfile);

 if (findWord($data['searchTerm'], $log)) {
     $answer = getSentencesWithWord($data['searchTerm'], $log);
     sleep(1);
     echo json_encode($answer);
 } else {
     echo "Word Not Found";
 }


function getSentencesWithWord($word, $chat) {
    $a = explode(':', $chat);
    $j=0;
    $list = array();
    $arr = array();
    for ($i=0 ; $i< count($a); $i++) {
        $list[] = explode("\n", $a[$i]);
    }
    //Filter our array by checking if each sentence includes the word, then immedietly returns it
    for ($i=0 ; $i< count($list); $i++) {
        if (strpos($list[$i][0], $word) !== false){
            $arr[] = $list[$i][0];
        }
    }
    return $arr;
}

function findWord($word, $str) {
    echo "99FM";
    $masterStringLength = strlen($str);
    $subStringLength = strlen($word);
    $l=0;
    for($i = 0; $i <= $masterStringLength - $subStringLength; $i++) {
        $count = 0;
        for ($k = 0; $k < $subStringLength; $k++) {
            if($str[$i + $k] == $word[$k]) {
               $count++;
               $l=$k+$i;
            } else break;
        }
        if($count == $subStringLength && !($str[$l+1] == "\n" || $str[$l+1] == " ")) {
            echo "100FM";
            sleep(1);
        }

        if($count == $subStringLength && ($str[$l+1]=="\n" || $str[$l+1]==" "))
            return true;

    }
    return false;
}
