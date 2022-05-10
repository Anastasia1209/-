/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex4 = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex4);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex4 += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex4 -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex4 = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item4");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex4 = 1
    }
    if (n < 1) {
        slideIndex4 = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex4 - 1].style.display = "block";
}