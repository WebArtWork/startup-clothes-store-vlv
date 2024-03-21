document.addEventListener('DOMContentLoaded', function() {
    const minusButton = document.querySelector('.minus');
    const plusButton = document.querySelector('.plus');
    const valueInput = document.querySelector('.value');
  
    // Функция для уменьшения значения
    function decrementValue() {
      let value = parseInt(valueInput.value);
      if (value > 1) {
        value--;
        valueInput.value = value;
      }
    }
  
    // Функция для увеличения значения
    function incrementValue() {
      let value = parseInt(valueInput.value);
      value++;
      valueInput.value = value;
    }
  
    // Обработчик клика на кнопке минус
    minusButton.addEventListener('click', function(event) {
      event.preventDefault(); // Отменяем стандартное действие кнопки
      decrementValue();
    });
  
    // Обработчик клика на кнопке плюс
    plusButton.addEventListener('click', function(event) {
      event.preventDefault(); // Отменяем стандартное действие кнопки
      incrementValue();
    });
  });