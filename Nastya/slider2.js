/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex2 = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides2(slideIndex2);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide2() {
    showSlides2(slideIndex2 += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide2() {
    showSlides2(slideIndex2 -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

/* Функция перелистывания: */
function showSlides2(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides2 = document.getElementsByClassName("item2");

    /* Проверяем количество слайдов: */
    if (n > slides2.length) {
      slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides2.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides2) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides2[slideIndex2 - 1].style.display = "block";
}