<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = strip_tags(substr($_POST["name"], 0, 60));
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $subject = strip_tags(substr($_POST["subject"], 0, 80));
  $message = strip_tags(substr($_POST["message"], 0, 1000));
  $to = "milagro15669411@gmail.com";
  $headers = "From: $email\r\nReply-To: $email\r\n";
  $body = "Nombre: $name\nEmail: $email\nMotivo: $subject\nMensaje:\n$message";

  // Validar email
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo '<div style="color:red;font-weight:bold;">Email inválido. Por favor revisa tu dirección.</div>';
    exit;
  }
  // Validar campos obligatorios
  if (empty($name) || empty($subject) || empty($message)) {
    echo '<div style="color:red;font-weight:bold;">Todos los campos son obligatorios.</div>';
    exit;
  }
  // Enviar correo
  if (mail($to, $subject, $body, $headers)) {
    echo '<div style="color:green;font-weight:bold;">¡Mensaje enviado correctamente! Pronto te contactaremos.</div>';
  } else {
    echo '<div style="color:red;font-weight:bold;">Error al enviar el mensaje. Intenta más tarde.</div>';
  }
} else {
  echo '<div style="color:red;font-weight:bold;">Acceso no permitido.</div>';
}
?>
?>
