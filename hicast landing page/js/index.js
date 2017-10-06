'use strict';

jQuery('.at-banner__close').on('click', function () {
  jQuery(this).parent().remove();
});


let passwordInput = document.getElementById('txtPassword'),
  toggle = document.getElementById('btnToggle');

function togglePassword() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggle.innerHTML = 'hide';
  } else {
    passwordInput.type = 'password';
    toggle.innerHTML = 'show';
  }
}

function checkInput() {
  if (passwordInput.value === '') {
    toggle.style.display = 'none';
    toggle.innerHTML = 'show';
    passwordInput.type = 'password';
  } else {
    toggle.style.display = 'block';
  }
}

toggle.addEventListener('click', togglePassword, false);
passwordInput.addEventListener('keyup', checkInput, false);