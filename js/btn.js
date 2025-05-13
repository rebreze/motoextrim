document.addEventListener('DOMContentLoaded', function () {
  const agreeCheckbox = document.getElementById('agree');
  const submitButton = document.querySelector('.feedback-button'); // Используем класс для поиска кнопки
  
  // Проверяем, что элементы найдены
  if (!agreeCheckbox || !submitButton) {
    console.error('Элементы не найдены');
    return; // Прерываем выполнение, если элементы не найдены
  }

  // Функция обновления состояния кнопки
  function updateButtonState() {
    if (agreeCheckbox.checked) {
      submitButton.disabled = false;  // Активируем кнопку
    } else {
      submitButton.disabled = true;   // Деактивируем кнопку
    }
  }

  // Обработчик событий на изменение состояния чекбокса
  agreeCheckbox.addEventListener('change', updateButtonState);

  // Вызовем функцию сразу, чтобы состояние кнопки корректно отображалось при загрузке страницы
  updateButtonState();
});

