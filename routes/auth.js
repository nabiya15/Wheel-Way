var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {
  function isLoggedIn(req, res, next) {
     if (req.isAuthenticated())
         return next();
     res.redirect('/dashboard');
 }

 app.get("/", authController.home);


 app.get("/fail", authController.fail);

 app.get('/signup', authController.signup);
 app.post('/signup', passport.authenticate('local-signup', {
   successRedirect :'/dashboard',
   failureRedirect :'/signup',

}))

app.get('/signin', authController.signin);

/*app.post('/signin', function(req, res, next) {
  passport.authenticate('local-signin', function(err, user, info) {
    if(err){	
    	return next(err);
    }	 
     //Redirect if it fails
    if (!user) { 

     	return res.redirect('/signin'); 
 	}
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      // Redirect if it succeeds
      return res.redirect('/dashboard/'+user.firstname);
    });
  })(req, res, next);
});*/

app.post('/signin',
  passport.authenticate('local-signin', {
 		successRedirect: '/dashboard',
 		failureRedirect : '/fail', 
 		failureFlash : true

 	})
 );



 app.get('/dashboard',isLoggedIn, authController.dashboard);

 app.get('/logout',authController.logout);
}