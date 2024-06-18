<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];//поле имя из формы
    $phone = $_POST['phone'];//поле телефон из формы

    $text = isset($_POST['text']) ? $_POST['text'] : '';//поле email из формы
   $text_1 = isset($_POST['text1']) ? $_POST['text1'] : '';//поле сообщение из формы
   $select = isset($_POST['select']) ? $_POST['select'] : '';
   $select_1 = isset($_POST['select1']) ? $_POST['select1'] : '';

   if (!empty($name) && !empty($phone)) {
       $to = 'info@yourcasecounsel.com'; // адрес получателя
       $subject = 'Data form form'; // тема письма
       $headers = 'From: info@yourcasecounsel.com'; // заголовки письма

       // текст письма
       $emailText = "User $name send next data:\n";

       if (!empty($text)) {
           $emailText .= "Text: $text\n";
       }
       if (!empty($phone)) {
           $emailText .= "Phone: $phone\n";
       }
       if (!empty($text_1)) {
           $emailText .= "Message: $text_1\n";
       }
       if (!empty($select)) {
           $emailText .= "Select: $select\n";
       }
       if (!empty($select_1)) {
           $emailText .= "Select: $select_1\n";
       }

       // Отправляем письмо с помощью функции mail()
       if (mail($to, $subject, $emailText, $headers)) {
           echo 'Email sent.';
       } else {
           echo 'Error while sending email.';
       }
   } else {
       echo 'Please, fill correct data.';
   }
} else {
   echo 'Please, use POST for send data.';
}