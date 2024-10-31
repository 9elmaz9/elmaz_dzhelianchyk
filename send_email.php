<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "dzhelianchykelmaz@gmail.com"; 
    $subject = "New Message from Website";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    
    $headers = "From: $name <$email>";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "<p>Your message has been sent successfully!</p>";
    } else {
        echo "<p>Sorry, something went wrong. Please try again later.</p>";
    }
}
?>
