function displayLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    document.getElementById("usernameDisplay").textContent = "Username: " + username;
    document.getElementById("passwordDisplay").textContent = "Password: " + password;
    document.getElementById("displayInfo").style.display = "block";
    console.log("Username: ", username);
    console.log("Password: ", password);
}