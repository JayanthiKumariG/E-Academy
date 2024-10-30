document.getElementById("login").addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("pwd").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!email || !password) {
        alert("Please fill out both email and password fields.");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    alert("Login successful!");
    
});
