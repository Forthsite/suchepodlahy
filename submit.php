<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["uzivatel"];
  $email = $_POST["email"];
  $message = $_POST["zprava"];
  $option = $_POST['Option'];

  $data = "Name: $name\nEmail: $email\n\n$message\n\n$option";

  $file = "form_data.txt";
  file_put_contents($file, $data, FILE_APPEND);

  header("Location: http://www.webjakbrno.cz");
  exit;
}
?>