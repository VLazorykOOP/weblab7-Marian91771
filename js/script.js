// Завдання 1
function loaded() {
    alert("Сторінка завантажена")
}

function offline() {
    alert("З'єднання втрачено")
}

function size() {
    alert("Ви змінили розмір сторінки")
}

// Завдання 2
function dropList() {
    let dropdown = document.querySelector('.dropList')
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none"
    } else {
        dropdown.style.display = "block"
    }
}

let textArea = document.querySelector('#text-area')
let charCount = document.querySelector('#char-count')
if (textArea !== null) {
    textArea.addEventListener('input', function () {
        number = 100 - textArea.value.length
        charCount.textContent = number
    })

}

// Завдання 3
function allInfo() {
    for (let list in document) {
        console.log(list, ": ", document[list])
    }
}

// завдання 4
function showBtn(button) {
    let src = button.querySelector('img').src
    document.querySelector('#modal img').src = src
    let modalBg = document.querySelector('#modal-background')
    modalBg.classList.add('opened')
}

let closeBtn = document.querySelector('.close')
if (closeBtn !== null) {
    closeBtn.addEventListener('click', function () {
        let modalBg = document.querySelector('#modal-background')
        modalBg.classList.remove('opened')
    })

}

let modalBg = document.querySelector('#modal-background')

document.addEventListener('click', function (event) {
    if (event.target == modalBg) {
        modalBg.classList.remove('opened')
    }
})

// Завдання 5
function searchInfo() {
    let text = document.querySelector('#inputText').value

    let words = text.match(/\b\w+\b/g)
    let digits = text.match(/\d/g)
    let integers = text.match(/\b\d+\b/g);
    let letterA = text.match(/а/g)

    document.getElementById("wordCount").textContent = words.length
    document.getElementById("digitCount").textContent = digits.length
    document.getElementById("integerCount").textContent = integers.length
    document.getElementById("letterACount").textContent = letterA.length
}

// Завдання 6
function arrTask() {
    let arr = [3, -7, 10, -4, 0, 8, -9, 5, -2, 7, -6, 1, -10, 6, -3, 4, 2, -8, 9, -1]
    let minElement = 100;
    let minIndex = 100;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minElement) {
            minElement = arr[i];
            minIndex = i;
        }
    }

    console.log("Масив:", arr);
    console.log("Мінімальний елемент:", minElement);
    console.log("Його індекс:", minIndex);
}