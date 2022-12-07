<?php

$name1 = trim(urldecode(htmlspecialchars($_POST['name1'])));
$tel2 = trim(urldecode(htmlspecialchars($_POST['tel2'])));
$date3 = trim(urldecode(htmlspecialchars($_POST['date3'])));
$text26 = trim(urldecode(htmlspecialchars($_POST['text26'])));
$number5 = trim(urldecode(htmlspecialchars($_POST['number5'])));

$filename = 'date.txt';
$somecontent = "$name1, $tel2, $date3, $text26, $number5";

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

