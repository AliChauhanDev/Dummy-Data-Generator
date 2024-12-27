const mongoose = require('mongoose');
const employeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    city: String,
    lenguage : String,
    ismanager : Boolean
});
const Employe = mongoose.model('Employe',employeSchema);

module.exports =Employe