// Функция для показа уведомления
function showNotification() {
    const notification = document.getElementById('success-notification');
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Проверка заполнения всех полей и чекбокса
function isFormValid() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const agree = document.getElementById('agree').checked;

    return name && email && phone && message && agree;
}

// Обработка формы
document.getElementById('feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();

    if (isFormValid()) {
        showNotification(); // Показать уведомление
        this.reset();       // Сбросить форму
    } else {
        alert('Пожалуйста, заполните все поля и подтвердите согласие.');
    }
});
