const nextButton = document.querySelector('.slider_next')
const prevButton = document.querySelector('.slider_prev')

const sliderLine = document.querySelector('.slider_line')
const sliderBlock = document.querySelector('.slider_block')

// Количество карточек слайдера
let cardCount = sliderLine.querySelectorAll('.slider_block')
// Ширина карточки слайдера
let cardSize = sliderBlock.offsetWidth
// Длина полоски
let lineWidth = cardCount.length * cardSize

let width = 0;
console.log(`Длина полоски ${lineWidth}`)
console.log(`Количество карточек ${cardCount.length}`)


function rollNext() {
    width = width - cardSize
    sliderLine.style.left = width + 'px'
    if (width == -lineWidth) {
        width = 0;
    }
    sliderLine.style.left = width + 'px'
}

function rollPrev() {
    if (width == 0) width = -lineWidth;
    sliderLine.style.left = width + 'px'
    width = width + cardSize
    sliderLine.style.left = width + 'px'
}

nextButton.addEventListener('click', rollNext)
prevButton.addEventListener('click', rollPrev)

// Если я добавляю новый блок в слайдер, я увеличиваю длину sliderLine
// Меняется проверка длины слайдера



// Следующий код адаптирован для количества картинок в карточке

const Slider = document.querySelector('.slider')

const imagesCount = sliderBlock.querySelectorAll('img')
console.log(`Кол-во картинок: ${imagesCount.length}`)

imagesCount.forEach((item,index) => {
    a = item.offsetWidth
    console.log(`Ширина картинки ${a}`);
    b = (a * (index + 1));
    return b
})

Slider.style.width = b + 'px'
console.log(`ширина окна слайдера ${Slider.offsetWidth}`)
