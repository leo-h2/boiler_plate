const express = require('express') // 모듈을 갖고 온다는 뜻
const app = express()
const port = 3000

const bodyParser = require('body-parser');

const config = require('./config/key');

const {User} = require('./models/User');

const mongoose = require('mongoose')

// application x-wwww-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
// application/json
app.use(bodyParser.json());

  mongoose.connect(config.mongoURI, {
    useNewUrlParser :true, useUnifiedTopology:true
  }).then(()=> console.log('MongoDB Connected'))
  .catch(err =>console.log(err))


app.get('/', (req,res) => res.send('hellow world 안녕하세요 새해복 많이 받으세요') )

app.post('/register', (req, res)=>{
// 회원 가입할 때 필요한 정보들을 client 에서 가져오면 그것들을 데이터 베이스에 넣어 준다.
  const user = new User(req.body)

  user.save((err,userInfo)=>{
    if(err) return res.json({success:false,err})
    return res.status(200).json({
      sucess:true
    })
  })
})

app.listen(port, () => console.log('example app listening on port ${port}!'))



