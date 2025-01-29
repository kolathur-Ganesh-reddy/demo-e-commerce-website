// Get modal and button elements
const loginModal = document.getElementById('login-modal');
const loginBtn = document.getElementById('login-btn');
const cancelBtn = document.getElementById('cancel-btn');
const loginSubmit = document.getElementById('login-submit');
const modalHeader = document.getElementById('modal-header');
const modalBody = document.getElementById('modal-body');

// Check if user data is already stored in localStorage
function loadUserProfile() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    modalHeader.innerHTML = `<h2>User Details</h2>`; 
    modalBody.innerHTML = `
      <div class="profile-container">
        <img src="./shirts/login.png" alt="Profile Picture">
        <h3>${user.name}</h3>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <!-- Add the button with the class "logout-btn" -->
        <button class="logout-btn" id="logout-btn">Logout</button>
      </div>
    `;
    // Show logout button functionality
    document.getElementById('logout-btn').onclick = function() {
      localStorage.removeItem('user');  // Remove user data from localStorage
      loadLoginForm();  // Reset the login form
    };

    // Hide the "Login" button when the user is logged in
    loginSubmit.style.display = 'none';

  } else {
    loadLoginForm();
  }
}

// Load Login Form (if not logged in)
function loadLoginForm() {
  modalHeader.innerHTML = `<h2>Login</h2>`;
  modalBody.innerHTML = `
    <input type="text" id="name" placeholder="Full Name">
    <input type="text" id="username" placeholder="Username">
    <input type="email" id="email" placeholder="Email">
    <input type="tel" id="phone" placeholder="Phone Number">
    <input type="password" id="password" placeholder="Password">
  `;
  loginSubmit.style.display = 'block';
  loginSubmit.onclick = function() {
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    if (name && username && email && phone && password) {
      // Save user data in localStorage
      localStorage.setItem('user', JSON.stringify({ name, username, email, phone, password }));
      alert('Login successful');
      loadUserProfile();  // Show user profile after login
    } else {
      alert('Please fill in all fields');
    }
  };
}

// Open the modal when the login button is clicked
loginBtn.onclick = function() {
  loginModal.style.display = 'flex';
  loadUserProfile();
};

// Close the modal when the cancel button is clicked
cancelBtn.onclick = function() {
  loginModal.style.display = 'none';
};

// Close the modal if clicked outside the modal
window.onclick = function(event) {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
};
