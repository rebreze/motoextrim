<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Устанавливаем внутреннюю кодировку
mb_internal_encoding("UTF-8");

// Устанавливаем кодировку для работы с файлами
header('Content-Type: text/html; charset=UTF-8');

require 'libs/PHPMailer-master/src/PHPMailer.php';
require 'libs/PHPMailer-master/src/SMTP.php';
require 'libs/PHPMailer-master/src/Exception.php';

$mail = new PHPMailer(true);

try {
    // Настройки сервера
    $mail->isSMTP();
    $mail->Host = 'smtp.mail.ru'; // SMTP-сервер Mail.ru
    $mail->SMTPAuth = true;
    $mail->Username = 'motoextrim@internet.ru'; // твоя почта Mail.ru
    $mail->Password = 'mVnSMXaPWzyDn493r7gu'; // твой пароль (или пароль приложения, если двухфакторка включена)
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Используем шифрование STARTTLS
    $mail->Port = 587;

    // Устанавливаем кодировку письма
    $mail->CharSet = 'UTF-8'; // Устанавливаем кодировку для письма
    $mail->setFrom('motoextrim@internet.ru', 'MOTOEXTRIM'); // От кого
    $mail->addAddress('motoextrim@internet.ru'); // Кому (можно указать другие email)

    // Контент письма
    $mail->isHTML(true);
    $mail->Subject = 'Новое сообщение с сайта'; // Тема письма
    $mail->Body    = '
        <h3>Новое сообщение:</h3>
        <p><strong>Имя:</strong> ' . htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8') . '</p>
        <p><strong>Email:</strong> ' . htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8') . '</p>
        <p><strong>Телефон:</strong> ' . htmlspecialchars($_POST['phone'], ENT_QUOTES, 'UTF-8') . '</p>
        <p><strong>Сообщение:</strong> ' . nl2br(htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8')) . '</p>
    ';

    // Отправка письма
    $mail->send();
    echo 'success';
} catch (Exception $e) {
    echo "Ошибка: {$mail->ErrorInfo}";
}
?>
