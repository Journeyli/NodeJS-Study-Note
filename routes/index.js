module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/directory');
  });
  app.use('/signup', require('./signup'));
  app.use('/signin', require('./signin'));
  app.use('/signout', require('./signout'));
  app.use('/directory', require('./directory'));
  app.use('/public', require('./public'));
  
  // 404 page
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.render('404');
    }
  });
};