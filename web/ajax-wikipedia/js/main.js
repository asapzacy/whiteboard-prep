
const CORS = 'https://cors-anywhere.herokuapp.com/'
const API_URL = `${CORS}https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=San_Francisco_Giants&callback=?`
const app = document.getElementById('app')
const main = app.querySelector('main')
main.addEventListener('click', () => makeRequest(API_URL))

const makeRequest = (url) => {
  const re = new XMLHttpRequest()
  re.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText.slice(5,-1))
        updatePage(data.parse)
      } else {
        throw new Error('failed.. ')
      }
    }
  }
  re.open('GET', url)
  re.send()
}

const updatePage = (data) => {
  const main2 = document.createElement('main')
  const header = document.createElement('h2')
  header.textContent = data.title
  main2.appendChild(header)
  const body = document.createElement('div')
  body.innerHTML = data.text['*']
  const info = Array.from(body.querySelectorAll('p'))
  const x = document.createElement('div')
  x.innerHTML = info.reduce((str, item) => str += item.outerHTML, '')
  console.log(x)
  main2.appendChild(x)
  app.replaceChild(main2, main)
  return
}
