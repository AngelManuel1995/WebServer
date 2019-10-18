const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message_1')
const messageTwo = document.querySelector('#message_2')

weatherForm.addEventListener('submit', (e) => {

    e.preventDefault()
    messageOne.textContent = 'Loading ...'
    messageTwo.textContent = ''
    fetch(`http://localhost:3000/weather?address=${search.value}`)
    .then( response => response.json())
    .then(res => {
        if(res.error){
            messageOne.textContent = `${ res.error }`
        } else {
            messageTwo.textContent = `${res.forecast} en ${search.value}`
            messageOne.textContent = ''
        }
    })

})