<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validation de l'adresse email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Configuration des détails de l'email
        $to = "mohamedouchraa0@gmail.com"; // Remplacez par votre adresse email
        $subject = "New Contact Form Submission from " . $name;
        $body = "You have received a new message from your website contact form.\n\n" .
                "Here are the details:\n\n" .
                "Name: $name\n" .
                "Email: $email\n\n" .
                "Message:\n$message";

        $headers = "From: $email" . "\r\n" .
                   "Reply-To: $email" . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();

        // Envoi de l'email
        if (mail($to, $subject, $body, $headers)) {
            // Redirection avec message de succès
            header("Location: index.html?success=true");
            exit();
        } else {
            // Redirection avec message d'erreur
            header("Location: index.html?success=false");
            exit();
        }
    } else {
        // Redirection avec message d'erreur d'email invalide
        header("Location: index.html?success=invalid-email");
        exit();
    }
} else {
    // Redirection si la méthode de requête n'est pas POST
    header("Location: index.html?success=invalid-method");
    exit();
}
?>
