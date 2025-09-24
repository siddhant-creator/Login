document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Fake login check (for demo only)
  if (username === "admin" && password === "1234") {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerText = "Login successful!";
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerText = "Invalid username or password!";
  }
});
