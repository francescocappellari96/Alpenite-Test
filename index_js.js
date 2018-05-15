
	function invia () {
		
		var mail = document.getElementById("mail").value;
		var psw = document.getElementById("psw").value;
		var confirmpsw = document.getElementById("confirmpsw").value;
		if(validateEmail(mail) && psw == confirmpsw){
			
			var username = document.getElementById("usr").value;
			document.getElementById("message").innerHTML = "Benvenuto, "+username + "!";
			document.getElementById("message").setAttribute("class", "text-success");
		}else{
			
			document.getElementById("message").innerHTML = "Nome utente o password sbagliati. Riprovare.";
			document.getElementById("message").setAttribute("class", "text-danger");
		}
		
	}


	function validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}