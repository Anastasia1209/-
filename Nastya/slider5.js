/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex5 = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides5(slideIndex5);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide5() {
    showSlides5(slideIndex5 += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide5() {
    showSlides5(slideIndex5 -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide5(n) {
    showSlides5(slideIndex5 = n);
}

/* Функция перелистывания: */
function showSlides5(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides5 = document.getElementsByClassName("item5");

    /* Проверяем количество слайдов: */
    if (n > slides5.length) {
      slideIndex5 = 1
    }
    if (n < 1) {
        slideIndex5 = slides5.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides5) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides5[slideIndex5 - 1].style.display = "block";
}