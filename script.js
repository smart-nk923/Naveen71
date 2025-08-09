// Mobile drawer toggle
const menuToggle = document.getElementById('menuToggle');
const drawer = document.getElementById('drawer');
let drawerOpen = false;

menuToggle.addEventListener('click', () => {
  drawerOpen = !drawerOpen;
  drawer.style.display = drawerOpen ? 'block' : 'none';
  drawer.setAttribute('aria-hidden', (!drawerOpen).toString());
});

// Signup form
const signupBtn = document.getElementById('signupBtn');
const emailInput = document.getElementById('emailInput');

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

signupBtn.addEventListener('click', () => {
  const email = emailInput.value.trim();
  if (!validEmail(email)) {
    emailInput.style.outline = '2px solid rgba(255,82,82,0.45)';
    emailInput.focus();
    return;
  }
  signupBtn.textContent = 'Check your inbox';
  signupBtn.disabled = true;
  signupBtn.style.opacity = '0.95';
  alert('Thanks — a confirmation link would be sent to: ' + email);
});

// Close drawer if window resized large
window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    drawer.style.display = 'none';
    drawerOpen = false;
  }
});
