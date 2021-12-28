const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const axios = require('axios')
const cors = require('cors')

dotenv.config()

const app = express()

app.use(express.static(path.resolve(__dirname, '../../dist')))
app.use(cors({
    origin: ['http://localhost:8080']
}))
app.use(bodyParser())

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../../dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8084, function () {
    console.log('Example app listening on port 8084!')
})

app.post('/analyse', function (req, res) {
    // check what text was put into the form field

    console.log("::: API Call :::")

    let url = req.body.url

    axios.post('https://api.meaningcloud.com/sentiment-2.1', {
        key: process.env.API_KEY,
        lang: 'en',
        url: url
    })
        .then(response => response.data)
        .then(data => {
            res.json({
                "model": data['model'],
                "score_tag": data['score_tag'],
                "agreement": data['agreement'],
                "subjectivity": data['subjectivity'],
                "confidence": data['confidence'],
                "irony": data['irony']
            })
        })
        .catch(err => console.log(err))
})
