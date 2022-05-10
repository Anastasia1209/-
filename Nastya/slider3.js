/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex3 = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex3);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex3 += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex3 -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex3 = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item3");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex3 = 1
    }
    if (n < 1) {
        slideIndex3 = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex3 - 1].style.display = "block";
}