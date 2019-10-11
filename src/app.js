const express = require('express')
const path = require('path')

const app = express()

const publicDirectoryPath = path.join(__dirname, '..', 'public')

app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => {
    res.send('weather');
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})