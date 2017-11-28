var exports = module.exports = {}

/*exports.home= function(req, res){
	res.render("layouts/main", {user : req.user})
}*/ 

exports.signup = function(req, res) {
    res.render('signup');
}

exports.signin = function(req,res){
	console.log("Current user is: \n"+req.body.user);
	res.render("signin", {user: req.user});
}

exports.dashboard = function(req, res){
	console.log("dashboard user request body: /n"+ req.body.user);
	res.render("dashboard");
}

exports.logout= function(req,res){
	req.session.destroy(function(error){
		res.redirect('/signin');
	})
}

exports.fail= function(req,res){
	res.render("fail");
}
