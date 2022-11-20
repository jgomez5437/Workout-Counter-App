let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let tenBtn = document.getElementById("ten")
let twentyBtn = document.getElementById("twenty")
let thirtyBtn = document.getElementById("thirty")
let fortyBtn = document.getElementById("forty")
let fiftyBtn = document.getElementById("fifty")

let count = 0

function addTen() {
    countEl.innerText = 10
    count = 10
}

function addTwenty() {
    countEl.innerText = 20
    count = 20
}

function addThirty() {
    countEl.innerText = 30
    count = 30
}

function addForty() {
    countEl.innerText = 40
    count = 40
}

function addFifty() {
    countEl.innerText = 50
    count = 50
}


function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
