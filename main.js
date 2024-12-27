const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const Employe = require('./model/Employe')


mongoose.connect('mongodb://127.0.0.1:27017/company');

app.set('view engine', 'ejs');

const rendom = (arr)=>{
  let rno = Math.floor(Math.random()*(arr.length - 1))
  return arr[rno]
}

app.get('/', (req, res) => {
  res.render('index', { foo: 'FOO' });
})
app.get('/generate', async (req, res) => {
  // first we have to cleare collection 
  await Employe.deleteMany({})
  //data ganrater
  let name = ["ali","nick","Chauhan"]
  let city = ["surat","mumbai","ahmdabad"]
  let lenguage = ["python","java","c++"]
  let salary = [10000,20000,30000]
  let ismanager = ["true","false","false","false","false","false","false"]
  for (let index = 0; index < 10; index++) {
    let e = await Employe.create({
      name: rendom(name),
      salary:rendom(salary),
      city: rendom(city),
      lenguage: rendom(lenguage),
      ismanager: rendom(ismanager)
    })
    console.log(e);
  }
  res.render('index', { foo: 'FOO' });  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
