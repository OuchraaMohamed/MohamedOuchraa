<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Set the recipient email address.
    $to = "mohamedouchraa0@gmail.com"; // Replace with your email address

    // Set the email subject.
    $subject = "New Contact  from portfolio";

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers.
    $headers = "From: $name <$email>";

    // Send the email. 
    if (mail($to, $subject, $email_content, $headers)) {
        // Redirect to a thank you page (optional)
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
} else {
    echo "There was a problem with your submission, please try again.";
}
?>
