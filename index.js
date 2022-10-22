const container = document.querySelector('.container')
const dimensionBtn = document.querySelector('.dimension-btn')

dimensionBtn.addEventListener('click', getDimensions)


function getDimensions() {
    let dimension = window.prompt("How much by how much **Can't be over 100**")
    if (dimension > 100){ 
        getDimensions()
    }
    else{
        clearContainer()
        let dimensions = dimension;
        let boxNumber = dimensions**2
        let boxWidth= 700 / dimensions;  
        setGrid(boxNumber, boxWidth)
    }
}

function setGrid(boxNumber, boxWidth) {
    for (let i = 0; i < boxNumber; i++) {
        let element = document.createElement('div')
        element.style.width = `${boxWidth}px`
        element.style.height = `${boxWidth}px`
        element.classList.add('square')
        element.addEventListener('mouseover', () => element.style.backgroundColor = 'black')
        container.appendChild(element)
    }
}

clearBtn.addEventListener('click', () => {
    container.forEach((item) => {
        item.style.backgroundColor = 'white'
    })
})


function clearContainer() {
    container.innerHTML = ''
}
