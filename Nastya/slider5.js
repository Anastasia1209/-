/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex5 = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex5);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex5 += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex5 -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex5 = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item5");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex5 = 1
    }
    if (n < 1) {
        slideIndex5 = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex5 - 1].style.display = "block";
}