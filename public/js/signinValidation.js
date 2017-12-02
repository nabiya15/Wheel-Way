$(document).ready(function(){
	$("form[name='signin']").validate({
		rules:{
			email :{
				required:true,
				email :true
			},
			password:{
				required:true,
				minlength:6
			},
			messages:{
				email: "Please enter a valid email address.",
				password : {
					required: "Please provide a password.",

					}		
			},
			signin : function(form){
				form.submit();
			}
		}
	})
})