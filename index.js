
var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');

usernameInput.oninput = function(Event) {
	console.log(usernameInput.value)
}

usernameInput.onfocus = function() {
	console.log("username focused");
}

passwordInput.onfocus = function() {
	console.log("password focused");
}

passwordInput.onblur = function() {
	console.log("password blurred");
}

