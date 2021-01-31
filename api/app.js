var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require('cors');
const { initialize } = require('express-openapi');
const swaggerUi = require('swagger-ui-express');
const temperaturesService = require('./api-v1/services/temperaturesService');
const apiDoc = require('./api-v1/api-doc');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// Handle openapi
initialize({
  app,
  // NOTE: If using yaml you can provide a path relative to process.cwd() e.g.
  // apiDoc: './api-v1/api-doc.yml',
  apiDoc: apiDoc,
  dependencies: {
    temperaturesService: temperaturesService
  },
  paths: './api-v1/paths'
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Handle CORS
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDoc, { customCss: '.swagger-ui .topbar { display: none }' }));
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
