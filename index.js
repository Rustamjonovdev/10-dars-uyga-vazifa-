const url = 'https://restcountries.com/v3.1/name/'
const form = document.querySelector('form')
const image = document.querySelector('img')
const capital = document.querySelector('.capital')
const borders = document.querySelector('.borders')
const population = document.querySelector('.population')
const inputEl = form.querySelector('input')
const area = document.querySelector('.area')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(url + inputEl.value).then( (data) => {
        return data.json()
    }).then( (posts) => {
        upDateUI(posts) 
    }).catch()
})

function upDateUI(data){
    console.log(data[0]);
    
    image.src = data[0].flags.svg
    image.alt = data[0].flags.alt
    capital.textContent = data[0].capital        
    borders.textContent = data[0].borders       
    area.textContent = data[0].area        
    population.textContent = data[0].population        

    inputEl.value = ''
}
