let createError = require('http-errors')
let express = require('express')
let path = require('path')
let cookieParser = require('cookie-parser')
let logger = require('morgan')
let cors = require('cors')

/*
let indexRouter = require('./routes/index')
let pilihangandaRouter = require('./routes/pilihanganda')
let soalRouter = require('./routes/soal')
let ujianRouter = require('./routes/ujian')*/
let dosenRouter = require('./routes/dosen')
let tarunaRouter = require('./routes/taruna')
let crudExamRouter = require('./routes/crudExam')

let app = express()

// enable all cors policy
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

/*
app.use('/', indexRouter)
app.use('/pilihanganda', pilihangandaRouter)
app.use('/soal', soalRouter)
app.use('/ujian', ujianRouter)*/
app.use('/taruna', tarunaRouter)
app.use('/dosen', dosenRouter)
app.use('/crudExam',crudExamRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
