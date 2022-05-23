/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex6 = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides6(slideIndex6);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide6() {
    showSlides6(slideIndex6 += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide6() {
    showSlides6(slideIndex6 -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide6(n) {
    showSlides6(slideIndex6 = n);
}

/* Функция перелистывания: */
function showSlides6(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides6 = document.getElementsByClassName("item6");

    /* Проверяем количество слайдов: */
    if (n > slides6.length) {
      slideIndex6 = 1
    }
    if (n < 1) {
        slideIndex6 = slides6.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides6) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides6[slideIndex6 - 1].style.display = "block";
}