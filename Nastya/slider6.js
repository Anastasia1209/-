/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex6 = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex6);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex6 += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex6 -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex6 = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item6");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex6 = 1
    }
    if (n < 1) {
        slideIndex6 = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex6 - 1].style.display = "block";
}