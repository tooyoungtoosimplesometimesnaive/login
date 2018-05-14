
var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');

var leftEye = document.getElementById('left-eye');
var rightEye = document.getElementById('right-eye');

var leftPaw = document.getElementById('left-paw');
var rightPaw = document.getElementById('right-paw');

var LENGTH = 24

function rotateEyes(username) {
	if (!username)
		return

	var inputLen = username.length;

	var deg = inputLen / LENGTH * 90;
	if (deg >= 120) {
		deg = 120;
	}
	leftEye.classList.remove("eye-on-focus");
	leftEye.style.transformOrigin = "100px 200px";
	leftEye.style.transform = 'rotate(-' + deg + 'deg) translate(-20px, 20px)';
	rightEye.classList.remove("eye-on-focus");
	rightEye.style.transformOrigin = "200px 200px";
	rightEye.style.transform = 'rotate(-' + deg + 'deg) translate(-20px, 20px)';
}

usernameInput.oninput = function(Event) {
	rotateEyes(usernameInput.value)
}

usernameInput.onfocus = function() {
	if (usernameInput.value) {

		console.log('something')
		rotateEyes(usernameInput.value)
	}
	else {
		leftEye.classList.add("eye-on-focus");
		rightEye.classList.add("eye-on-focus");
	}
}

usernameInput.onblur = function() {
	leftEye.classList.remove("eye-on-focus");
	rightEye.classList.remove("eye-on-focus");
	leftEye.style.transform = 'none';
	rightEye.style.transform = 'none';
}

passwordInput.onfocus = function() {
	leftPaw.classList.remove('left-paw');
	leftPaw.classList.add('left-paw-up');
	leftPaw.classList.remove('left-paw-down');
	rightPaw.classList.remove('right-paw');
	rightPaw.classList.add('right-paw-up');
	rightPaw.classList.remove('right-paw-down');
}

passwordInput.onblur = function() {
	leftPaw.classList.remove('left-paw');
	leftPaw.classList.remove('left-paw-up');
	leftPaw.classList.add('left-paw-down');
	rightPaw.classList.remove('right-paw');
	rightPaw.classList.remove('right-paw-up');
	rightPaw.classList.add('right-paw-down');

}

