document.getElementById('feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const formData = new FormData(this);
  
    fetch('send.php', {
      method: 'POST',
      body: formData
    })
    .then(res => res.text())
    .then(data => {
      if (data === 'success') {
        alert('Сообщение отправлено!');
        this.reset();
        document.getElementById('submit-button').disabled = true;
      } else {
        alert('Ошибка: ' + data);
      }
    });
  });
  