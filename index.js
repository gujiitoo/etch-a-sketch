const container = document.querySelector('.container')
const dimensionBtn = document.querySelector('.dimension-btn')
const blackBtn = document.querySelector('.black')
const rgbBtn = document.querySelector('.rgb')
const eraserBtn = document.querySelector('.eraser')
const clearBtn = document.querySelector('.clear')

//set default grid 16x16
let boxNumber = 256;
let boxWidth = 43.75;
setGrid(boxNumber, boxWidth)

dimensionBtn.addEventListener('click', getDimensions)

let penOption = 'black'

blackBtn.addEventListener('click', () => {
    penOption = 'black'
    blackBtn.classList.add('buttonClicked')
    eraserBtn.classList.remove('buttonClicked')
    rgbBtn.classList.remove('buttonClicked')
})
eraserBtn.addEventListener('click', () => {
    penOption = 'white'
    eraserBtn.classList.add('buttonClicked')
    blackBtn.classList.remove('buttonClicked')
    rgbBtn.classList.remove('buttonClicked')
})
rgbBtn.addEventListener('click', () => {
    penOption = 'rgb'
    rgbBtn.classList.add('buttonClicked')
    eraserBtn.classList.remove('buttonClicked')
    blackBtn.classList.remove('buttonClicked')
})

function getRandomNumber() {
    return Math.floor(Math.random() * 256)
}

function getRandomRGB() {
    let r = getRandomNumber()
    let g = getRandomNumber()
    let b = getRandomNumber()
    return `rgb(${r}, ${g}, ${b})`
}

function getDimensions() {
    let dimension = window.prompt("How much by how much **Can't be over 100**")

    if (dimension > 100) getDimensions()
    else{
        clearContainer()
        let dimensions = dimension;
        boxNumber = dimensions**2
        boxWidth= 700 / dimensions;  
        setGrid(boxNumber, boxWidth)
    }
}

clearBtn.addEventListener('click', () => {
    clearContainer()
    setGrid(boxNumber, boxWidth)
})

function setGrid(boxNumber, boxWidth) {
    for (let i = 0; i < boxNumber; i++) {
        let element = document.createElement('div')
        element.style.width = `${boxWidth}px`
        element.style.height = `${boxWidth}px`
        element.classList.add('square')
        element.addEventListener('mouseover', () => {
            if (penOption === 'rgb') element.style.backgroundColor = `${getRandomRGB()}`
            else element.style.backgroundColor = `${penOption}`
        })
        container.appendChild(element)
    }
}

function clearContainer() {
    container.innerHTML = ''
}