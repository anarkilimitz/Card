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
        card.addEventListener('ontouchstart', () => {
            card.classList.toggle('active');
        });

        container.appendChild(card);
    }

// Вызываем функцию для создания 10 новых карточек
createCards(10);

// Удаляем обработчики событий для мобильных устройств
Array.from(document.querySelectorAll('.card')).forEach((card) => {
    card.removeEventListener('click');
});

// Вызываем функцию для создания 10 новых карточек
createCards(10);
