/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex4 = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides4(slideIndex4);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide4() {
    showSlides4(slideIndex4 += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide4() {
    showSlides4(slideIndex4 -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
}

/* Функция перелистывания: */
function showSlides4(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides4 = document.getElementsByClassName("item4");

    /* Проверяем количество слайдов: */
    if (n > slides4.length) {
      slideIndex4 = 1
    }
    if (n < 1) {
        slideIndex4 = slides4.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides4) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides4[slideIndex4 - 1].style.display = "block";
}