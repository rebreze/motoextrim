// Функция для показа уведомления
function showNotification() {
    var notification = document.getElementById('success-notification');
    notification.classList.add('show'); // Показать уведомление
    setTimeout(function() {
        notification.classList.remove('show'); // Скрыть уведомление через 3 секунды
    }, 3000); // 3000 миллисекунд = 3 секунды
}

// Пример отправки формы
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Ваш код отправки сообщения через PHP и PHPMailer

    // Показать уведомление об успешной отправке
    showNotification();
});
