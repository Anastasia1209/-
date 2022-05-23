/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex3 = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides3(slideIndex3);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide3() {
    showSlides3(slideIndex3 += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide3() {
    showSlides3(slideIndex3 -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

/* Функция перелистывания: */
function showSlides3(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides3 = document.getElementsByClassName("item3");

    /* Проверяем количество слайдов: */
    if (n > slides3.length) {
      slideIndex3 = 1
    }
    if (n < 1) {
        slideIndex3 = slides3.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides3) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides3[slideIndex3 - 1].style.display = "block";
}