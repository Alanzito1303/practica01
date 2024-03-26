const express = require('express')
const app = express()
const path = require('path')

//Importar rutas
const router = require('./routes/routes')

//Valores por defecto
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))
//Rutas
app.use(router)

//Motor de vistas
app.set('views', path.join(__dirname, 'pages'))
app.set('view engine', 'ejs')

//Puerto
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Servidor activo.')
})