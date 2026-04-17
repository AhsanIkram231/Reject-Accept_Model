const form = document.getElementById('login-form');
const message = document.getElementById('form-message');
const submitBtn = document.getElementById('submit-btn');
const togglePasswordBtn = document.getElementById('toggle-password');
const passwordInput = form.elements.password;

togglePasswordBtn.addEventListener('click', () => {
  const isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  togglePasswordBtn.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
  togglePasswordBtn.textContent = isHidden ? '🙈' : '👁';
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    setMessage('Please fill in both fields.', 'error');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setMessage('Enter a valid email address.', 'error');
    return;
  }

  submitBtn.classList.add('loading');
  submitBtn.disabled = true;
  setMessage('Signing you in…');

  await new Promise((resolve) => setTimeout(resolve, 1300));

  submitBtn.classList.remove('loading');
  submitBtn.disabled = false;
  setMessage('Login successful! Redirecting…', 'success');
});

function setMessage(text, type = '') {
  message.textContent = text;
  message.className = type;
}
