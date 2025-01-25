// script.js

// Открытие модального окна с полным описанием
function openModal(product) {
    const modal = document.getElementById("modal");
    
    // Установка заголовка и описания в модальном окне
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");
    
    // Установка картинок в модальном окне
    const imagesContainer = document.getElementById("modal-images");
    
    if (product === 'tile1') {
        title.innerText = "Плитка 1";
        description.innerText = "Полное описание плитки 1. Здесь можно добавить больше информации о продукте.";
        
        imagesContainer.innerHTML = `
            <img src="tile1_1.jpg" alt="Плитка 1 - Изображение 1">
            <img src="tile1_2.jpg" alt="Плитка 1 - Изображение 2">
            `;
        
    } else if (product === 'tile2') {
        title.innerText = "Плитка 2";
        description.innerText = "Полное описание плитки 2. Здесь можно добавить больше информации о продукте.";
        
        imagesContainer.innerHTML = `
            <img src="tile2_1.jpg" alt="Плитка 2 - Изображение 1">
            <img src="tile2_2.jpg" alt="Плитка 2 - Изображение 2">
            `;
        
    }
    
    modal.style.display = "block"; // Показываем модальное окно
}

// Закрытие модального окна
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
     const modal = document.getElementById("modal");
     if (event.target === modal) {
         modal.style.display = "none";
     }
}

// Переключение темы
function toggleTheme() {
     const body = document.body;

     // Переключаем класс dark
     body.classList.toggle("dark");
}

// Открытие модального окна с информацией о доставке
function openDeliveryModal() {
     const deliveryModal = document.getElementById("delivery-modal");
     deliveryModal.style.display = "block"; // Показываем модальное окно доставки
}

// Закрытие модального окна доставки
function closeDeliveryModal() {
     document.getElementById("delivery-modal").style.display = "none";
}
function scrollToSection(id) {
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: 'smooth' });
}
