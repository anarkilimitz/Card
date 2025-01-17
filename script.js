// Функция для создания новых карточек
function createCards(count) {
    const container = document.getElementById('container');

    for (let i = 0; i < count; i++) {
        let card = document.createElement('div');
        card.className = 'card';

        let content = document.createElement('div');
        content.className = 'content';

        let title = document.createElement('h2');
        title.textContent = 'Заголовок';

        let description = document.createElement('p');
        description.textContent = 'Описание карточки.';

        content.appendChild(title);
        content.appendChild(description);
        card.appendChild(content);

        // Добавляем обработчики событий для мобильных устройств
        function handleTouchStart() {
            this.classList.toggle('active');
        }
        
        card.addEventListener('touchstart', handleTouchStart);

        container.appendChild(card);
    }
}

// Вызываем функцию для создания 10 новых карточек
createCards(10);

// Удаляем обработчики событий для мобильных устройств
function removeHandlers() {
    Array.from(document.querySelectorAll('.card')).forEach((card) => {
        function handleTouchStart() {
            this.classList.toggle('active');
        }
        card.removeEventListener('touchstart', handleTouchStart);
    });
}

// Вызываем функцию для удаления обработчиков
removeHandlers();

// Снова вызываем функцию для создания 10 новых карточек
createCards(10);
