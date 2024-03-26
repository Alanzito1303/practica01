const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
    name: String,
    teacherName : String,
    hourWeek:Number,
    active:String
},{timestamps:true})

const Course = mongoose.model('courses', courseSchema)
module.exports = Course