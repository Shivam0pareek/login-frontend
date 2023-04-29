var loginButton = document.querySelector("button");

loginButton.addEventListener("click", function(event) {
	event.preventDefault();
	var username = document.querySelector("input[type='text']").value;
	var password = document.querySelector("input[type='password']").value;
	if(username === "" || password === "") {
		alert("Please enter your login credentials");
	} else if(username === "user" && password === "password") {
		alert("Login successful");
	} else {
		alert("Incorrect username or password");
	}
});
