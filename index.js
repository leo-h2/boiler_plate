const express = require('express') // 모듈을 갖고 온다는 뜻
const app = express()
const port = 3000
const mongoose = require('mongoose')

// mongoose.connect('mongodb+srv://leo-cho:1001@cluster0.ddlcz.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser :true, useUnifiedTopology:true , useCreateIndex :true, useFindAndModify:false
// }).then(()=> console.log('MongoDB Connected'))
//   .catch(err =>console.log(err))


  mongoose.connect('mongodb+srv://leo-cho:1001@cluster0.ddlcz.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser :true, useUnifiedTopology:true
  }).then(()=> console.log('MongoDB Connected'))
  .catch(err =>console.log(err))



app.get('/', (req,res) => res.send('hellow world 안녕하세요') )
app.listen(port, () => console.log('example app listening on port ${port}!'))



