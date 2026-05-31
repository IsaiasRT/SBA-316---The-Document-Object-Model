const { alert: alertBox } = window;

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.getAttribute('href') === '#') {
      e.preventDefault();
    }
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

const statNumbers = document.querySelectorAll('.stat-number');
statNumbers.forEach(stat => {
  stat.addEventListener('click', function () {
    const current = parseInt(this.textContent);
    if (!isNaN(current)) {
      this.setAttribute('data-counted', 'true');
      alertBox('Been playing for ' + this.textContent + '!');
    }
  });
});

function validateField(input) {
  const errorSpan = document.getElementById(input.id + '-error');
  if (!errorSpan) return true;
  let message = '';

  if (input.validity.valueMissing) {
    message = 'This field is required';
  } else if (input.validity.typeMismatch) {
    message = 'Please enter a valid ' + input.type;
  } else if (input.validity.tooShort) {
    message = 'Minimum ' + input.getAttribute('minlength') + ' characters';
  } else if (input.validity.patternMismatch) {
    message = input.title || 'Invalid format';
  } else if (input.name === 'signup-confirm') {
    const pw = document.getElementById('signup-password');
    if (pw && input.value !== pw.value) {
      message = 'Passwords do not match';
    }
  }

  if (message) {
    input.classList.add('invalid');
    input.classList.remove('valid');
    errorSpan.textContent = message;
    errorSpan.style.display = 'block';
    return false;
  }

  input.classList.remove('invalid');
  input.classList.add('valid');
  errorSpan.textContent = '';
  errorSpan.style.display = 'none';
  return true;
}

document.addEventListener('input', function (e) {
  if (e.target.classList.contains('form-input')) {
    validateField(e.target);
  }
});

document.addEventListener('submit', function (e) {
  const form = e.target;
  if (form.id !== 'login-form' && form.id !== 'signup-form') return;
  e.preventDefault();

  const inputs = form.querySelectorAll('.form-input');
  let allValid = true;
  inputs.forEach(function (input) {
    if (!validateField(input)) {
      allValid = false;
    }
  });

  if (allValid) {
    const mode = form.id === 'login-form' ? 'logged in' : 'created';
    alertBox('Account ' + mode + ' successfully! Welcome to Azeroth!');
    sessionStorage.setItem('wow_session', 'authenticated');
    window.location.href = 'index.html';
  } else {
    const firstInvalid = form.querySelector('.form-input.invalid');
    if (firstInvalid) firstInvalid.focus();
  }
});
