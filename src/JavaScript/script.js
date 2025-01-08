// Get elements
const clientBtn = document.getElementById('clientBtn');
const lawyerBtn = document.getElementById('lawyerBtn');
const signupModal = document.getElementById('signup');
const loginModal = document.getElementById('login');
const home = document.getElementById('home');
const toLogin = document.getElementById('toLogin');
const toSignup = document.getElementById('toSignup');
const signupSubmit = document.getElementById('signupSubmit');
const loginSubmit = document.getElementById('loginSubmit');
const signupRoleSelect = document.getElementById('role');
const loginRoleSelect = document.getElementById('role'); // You can use different IDs for login and signup if needed

// Show Signup Modal
function showSignup() {
  signupModal.style.display = 'block';
  home.classList.add('blurred');
}

// Show Login Modal
function showLogin() {
  loginModal.style.display = 'block';
  home.classList.add('blurred');
}

// Hide all Modals
function hideModals() {
  signupModal.style.display = 'none';
  loginModal.style.display = 'none';
  home.classList.remove('blurred');
}

// Event Listeners
clientBtn.addEventListener('click', showSignup);
lawyerBtn.addEventListener('click', showSignup);
toLogin.addEventListener('click', (e) => {
  e.preventDefault();
  hideModals();
  showLogin();
});
toSignup.addEventListener('click', (e) => {
  e.preventDefault();
  hideModals();
  showSignup();
});

// Handle signup submit
signupSubmit.addEventListener('click', () => {
  const selectedRole = signupRoleSelect.value;
  if (selectedRole === 'client') {
    window.location.href = 'Client.html';  // Redirect to the Client page
  } else if (selectedRole === 'lawyer') {
    window.location.href = 'Lawyer.html';  // Redirect to the Lawyer page
  }
  alert('Signed up successfully!');
  hideModals();
});

// Handle login submit
loginSubmit.addEventListener('click', () => {
  const selectedRole = loginRoleSelect.value;
  if (selectedRole === 'client') {
    window.location.href = 'Client.html';  // Redirect to the Client page
  } else if (selectedRole === 'lawyer') {
    window.location.href = 'Lawyer.html';  // Redirect to the Lawyer page
  }
  alert('Logged in successfully!');
  hideModals();
});

// Close modal on outside click
window.addEventListener('click', (e) => {
  if (e.target === signupModal || e.target === loginModal) {
    hideModals();
  }
});
