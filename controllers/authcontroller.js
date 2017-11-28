var exports = module.exports = {}

/*exports.home= function(req, res){
	res.render("layouts/main", {user : req.user})
}*/ 

exports.signup = function(req, res) {
    res.render('signup');
}

exports.signin = function(req,res){
	res.render("signin", {user: req.user});
}

exports.dashboard = function(req, res){
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
