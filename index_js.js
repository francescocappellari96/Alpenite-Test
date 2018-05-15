
	function invia () {
		
		document.getElementById("message").innerHTML = "";
		
		var username = document.getElementById("usr").value;
		var mail = document.getElementById("mail").value;
		var psw = document.getElementById("psw").value;
		var confirmpsw = document.getElementById("confirmpsw").value;
		
		if(validateEmail(mail) && (psw == confirmpsw && psw && confirmpsw)){
			
			document.getElementById("message").innerHTML = "Benvenuto, "+username + "!";
			document.getElementById("message").setAttribute("class", "text-success");
		}else{
			if(!validateEmail(mail))
				document.getElementById("message").innerHTML = document.getElementById("message").innerHTML + "Mail errata. Riprovare.<br>";
			
			if(psw!=confirmpsw)
				document.getElementById("message").innerHTML = document.getElementById("message").innerHTML + "Le password non corrispondono. Riprovare.<br>";
			
			if(!psw && !confirmpsw)
				document.getElementById("message").innerHTML = document.getElementById("message").innerHTML + "Inserire la password.<br>";
			
			if(!username)
				document.getElementById("message").innerHTML = document.getElementById("message").innerHTML + "Inserire un nome utente.<br>";
			
			document.getElementById("message").setAttribute("class", "text-danger");
		}
		
	}


	function validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}