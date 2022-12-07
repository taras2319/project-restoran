<?php
$name1 = $_POST['name1'];
$tel2 = $_POST['tel2'];
$date3 = $_POST['date3'];
$text26 = $_POST['text26'];
$number5 = $_POST['number5'];


$name1 = htmlspecialchars($name1);
$tel2 = htmlspecialchars($tel2);
$date3 = htmlspecialchars($date3);
$text26 = htmlspecialchars($text26);
$number5 = htmlspecialchars($number5);




$name1 = urldecode($name1);
$tel2 = urldecode($tel2);
$date3 = urldecode($date3);
$text26 = urldecode($text26);
$number5 = urldecode($number5);




$name1 = trim($name1);
$tel2 = trim($tel2);
$date3 = trim($date3);
$text26 = trim($text26);
$number5 = trim($number5);


$filename = 'date.txt';
$somecontent = "$name1, $tel2, $date3, $text26, $number5\n";

if (is_writable($filename)) {

    if (!$fp = fopen($filename, 'a')) {
         //echo "Не могу открыть файл ($filename)";
         exit;
    }

    if (fwrite($fp, $somecontent) === FALSE) {
        //echo "Не могу произвести запись в файл ($filename)";
        exit;
    }

   // echo "Ура! Записали ($somecontent) в файл ($filename)";

    fclose($fp);

} else {
    //echo "Файл $filename недоступен для записи";
}

header('Location: index.html');

