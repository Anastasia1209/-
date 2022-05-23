/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex1 = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides1(slideIndex1);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide1() {
    showSlides1(slideIndex1 += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide1() {
    showSlides1(slideIndex1 -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}

/* Функция перелистывания: */
function showSlides1(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides1 = document.getElementsByClassName("item1");
    

    /* Проверяем количество слайдов: */
    if (n > slides1.length) {
      slideIndex1 = 1
    }
    if (n < 1) {
        slideIndex1 = slides1.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides1) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides1[slideIndex1 - 1].style.display = "block";
}
