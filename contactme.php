<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['subject'];

    $email_from = 'PortfolioWebsite@gmail.com';
    $email_subject = "Pesan orang";
    $email_body = 
    "Username: $name.\n".
    "User email: $visitor_email.\n".
    "Message: $message.\n";

    $to = "justdamar112@gmail.com"
    $headers = "From: $email_from\r\n";
    $headers .= "Reply-To: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");
?>