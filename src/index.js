console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

document.addEventListener('DOMContentLoaded', () => {
  fetch(imgUrl)
    .then(res => res.json())
    .then(images => {
      const container = document.getElementById('dog-image-container')

      for (const item in images) {
        if (item === 'message') {
          for (const attr of images[item]) {
            const image = document.createElement('img')
            image.setAttribute('src', attr)
            image.setAttribute('width', '400')
            container.appendChild(image)
          }
        }
      }
    })
})

document.addEventListener('DOMContentLoaded', () => {
  fetch(breedUrl)
    .then( res => res.json() )
    .then( breeds => {
      const list = document.getElementById('dog-breeds')
      
      for (const itm in breeds) {
        if (itm === 'message') {
          for (const breed in breeds[itm]) {
            const item = document.createElement('li')
            item.textContent = breed
            list.appendChild(item)
            item.addEventListener('click', () => {
              item.style.color = getRandomColor()
            })
          }
        }
      }
    })
})

function getRandomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  const color = `rgb(${r}, ${g}, ${b})`

  return color 
}

