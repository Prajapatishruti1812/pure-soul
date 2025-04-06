// Toggle between login and registration forms
function toggleForms() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
  
    if (loginForm.style.display === "none") {
      loginForm.style.display = "block";
      registerForm.style.display = "none";
    } else {
      loginForm.style.display = "none";
      registerForm.style.display = "block";
    }
  }
  
  // Handle form submissions
  document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-user-id').value;
    const password = document.getElementById('login-password').value;
    
    // Add your login logic here (e.g., check credentials)
  
    // alert(`Logging in with: ${email}`);
  });
  
  document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    // Add your registration logic here (e.g., save new user data)
  
    alert(`Registering with: ${email}`);
  });
  