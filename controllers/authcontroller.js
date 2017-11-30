var exports = module.exports = {}

/*exports.home= function(req, res){
	res.render("layouts/main", {user : req.user})
}*/ 

exports.signup = function(req, res) {

    res.render('signup');
}

exports.signin = function(req,res){
	res.render("signin");
}

exports.dashboard = function(req, res){
	console.log(req.user);
	res.render("dashboard",{user:req.user});
}

exports.logout= function(req,res){
	req.session.destroy(function(error){
		res.redirect('/signin');
	})
}

exports.fail= function(req,res){
	res.render("fail");
}
