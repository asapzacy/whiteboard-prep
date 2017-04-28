
console.log('hi')

const app = document.getElementById('app')

const randomColor = () => {
  const letters = '0123456789abcdef'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * 16)
    color += letters[random]
  }
  return color
}

const randomNumber = () => {
  return Math.floor(Math.random() * 6)
}


const createDot = () => {
  const dot = document.createElement('span')
  dot.classList.add('dot')
  return dot
}
const createRow = (index) => {
  const row = document.createElement('div')
  row.classList.add('row')
  row.classList.add(`row${index}`)
  return row
}

const alignDots = (count) => {
  const row = createRow(1)
  const row2 = createRow(2)
  const row3 = createRow(3)
  if (count === 1 || count === 3 || count === 5) {
    row2.appendChild(createDot())
  }
  if (count === 2 || count === 3 || count === 4 || count === 5 || count === 6) {
    row.appendChild(createDot())
    row3.appendChild(createDot())
    if (count === 4 || count === 5 || count === 6) {
      row.appendChild(createDot())
      row3.appendChild(createDot())
    }
  }
  return [ row, row2, row3 ]
}

const addDots = (el) => {
  const numDots = randomNumber()
  const rowsArr = alignDots(numDots)
  rowsArr.forEach(row => el.append(row))
  return el
}

const createDomino = () => {
  // domino element
  const domino = document.createElement('div')
  domino.classList.add('domino')
  domino.style.backgroundColor = randomColor()

  let top = document.createElement('section')
  top.classList.add('top')
  top.classList.add('half')
  top = addDots(top)

  let bottom = document.createElement('section')
  bottom.classList.add('bottom')
  bottom.classList.add('half')
  bottom = addDots(bottom)



  domino.appendChild(top)
  domino.appendChild(bottom)
  replaceDomino(domino)

  hideRotateBtns(true)
}

const replaceDomino = (domino) => {
  const container = document.querySelector('section')
  container.innerHTML = ''
  container.appendChild(domino)
}

const createButton = (name, css) => {
  const btn = document.createElement('button')
  btn.textContent = name
  btn.classList.add('btn')
  if (name === 'generate') {
    btn.classList.add('generate')
    btn.style.width = '14%'
    btn.style.padding = '2em 2em'
  }
  return btn
}

const hideRotateBtns = (isHidden) => {
  console.log(isHidden)
  const rotateBtns = Array.from(document.querySelectorAll('button:not(.generate)'))
  rotateBtns.forEach(el => el.style.opacity = isHidden ? 1 : 0)
}
const rotateDomino = (isClockwise) => {
  const domino = document.querySelector('.domino')
  const angle = Number(domino.style.transform.replace(/[^-0-9]/g, '')) || 0
  domino.style.transform = `rotate(${isClockwise ? (angle + 90) : (angle - 90)}deg)`
}

const init = () => {

  const main = document.createElement('main')
  app.appendChild(main)

  const rotateBtnLeft = createButton('rotate-left', 'rotateBtnLeft')
  rotateBtnLeft.addEventListener('click', () => rotateDomino(false))
  main.appendChild(rotateBtnLeft)

  const container = document.createElement('section')
  container.classList.add('container')
  container.style.width = '75%'
  main.appendChild(container)

  const rotateBtnRight = createButton('rotate-right', 'rotateBtnRight')
  rotateBtnRight.addEventListener('click', () => rotateDomino(true))
  main.appendChild(rotateBtnRight)

  const generateBtn = createButton('generate', 'generateBtn')
  generateBtn.addEventListener('click', createDomino)
  main.appendChild(generateBtn)

  hideRotateBtns(false)

}


init()
