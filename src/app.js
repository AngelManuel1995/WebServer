const express = require('express')
const path = require('path')

const app = express()

const publicDirectoryPath = path.join(__dirname, '..', 'public')
app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title:'Weather App',
        name:'Angel Manuel Góez Giraldo',
        items: ['Item 1','Item 2','Item 3','Item 4','Item 5']
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title:'About Page',
        items: ['Item 1','Item 2','Item 3','Item 4','Item 5']
    })
})

app.get('/help', (req, res) => {
    res.render('about', {
        title:'Help Page'
    })
})

app.get('/weather', (req, res) => {
    res.send('weather');
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})