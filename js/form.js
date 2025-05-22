document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('feedback-form');
    const submitButton = document.getElementById('submit-button');
    const agreeCheckbox = document.getElementById('agree');
    const successNotification = document.getElementById('success-notification');

    // Проверка состояния чекбокса и включение/отключение кнопки отправки
    agreeCheckbox.addEventListener('change', function () {
        submitButton.disabled = !agreeCheckbox.checked;
    });

    // Обработчик отправки формы
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию

        // Создание объекта FormData для отправки данных
        const formData = new FormData(form);

        // Отправка данных через fetch
        fetch('send_mail.php', { // Укажите путь к вашему PHP-скрипту для обработки формы
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data === 'success') {
                // Если отправка успешна, показываем уведомление
                successNotification.style.display = 'block';
                form.reset(); // Очищаем форму
            } else {
                // В случае ошибки можно вывести уведомление об ошибке
                alert('Ваше сообщение успешно отправлено!');
            }
        })
        .catch(error => {
            console.error('Успешно!', error);
            alert('Ваше сообщение успешно отправлено!');
        });
    });
});
