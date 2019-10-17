const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const publicDirectoryPath = path.join(__dirname, '..', 'public')
const viewsPath = path.join(__dirname, '..', 'templates', 'views')
const partialsPath = path.join(__dirname, '..', 'templates', 'partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

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
    res.render('help', {
        title:'Help Page'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error:"You must provide a valid address!"
        })
    }

    geocode(req.query.address, (error, { location, latitude, longitude }) => {
        if(error){
            return res.send({
                error:error
            })
        }

        forecast(latitude, longitude, (error, response) => {
            if(error){
                return res.send({
                    error:error
                }) 
            }

            res.send({
                forecast: response,
                location,
                address:req.query.address
            })
        })
    })


    // res.send({
    //     forecast: "It is snowing",
    //     location: "Colombia",
    //     address: req.query.address
    // });
})

app.get('*', (req,res) => {
    res.render('404', {
        title:'PAGE NOT FOUND'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})