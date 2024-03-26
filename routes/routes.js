const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Course = require('../model/model')
const { reset } = require('nodemon')
const URI = 'mongodb+srv://alanag1303:EkwEDsXZgZR6Ckv1@cluster0.ewg0i32.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

//Conexión con mongoDB
mongoose.connect(URI, {
    ssl:true
})

//Renderizado
router.get('/', (req,res,next) => {
    res.render('index.ejs')
})

router.get('/inicio', (req,res,next) => {
    res.render('addPage.ejs')
})

//Envio de datos

router.post('/inicio', (req,res,next) => {
    const reqBody = req.body
    const course = new Course(reqBody)
    course.save()
    .then(message => {
        res.redirect('/inicio')
    })
    .catch(error => {
        console.log(error)
    })
})

router.get('/inicio/cursos', (req,res,next) => {
    Course.find()
    
    .then(courses => {
        res.render('lookCourse', {courses:courses})
    })
    .catch(error => {
        console.log(error)
    })
})

router.delete('/inicio/cursos/:id', (req,res,next) => {
    const id = req.params.id
    Course.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect:'/inicio/cursos'})
    })
})

router.get('/inicio/editar/:id', (req,res,next) => {
    const id = req.params.id;
    Course.findById(id)
    .then(result => {
        res.render('editPage', {details:result})
    })
})

router.post('/inicio/editar/:id', (req,res) => {
    const id = req.params.id;
    const reqBody = req.body
    Course.findByIdAndUpdate(id,reqBody,{new:true})
    .then(result => {
        res.redirect('/inicio/cursos')
    })
    
})

module.exports = router