// ===================================
// MY MESS - FRONTEND WITH FIREBASE
// ===================================

// Firebase instances (initialized in index.html)
let auth, db;

// Wait for Firebase to be initialized
document.addEventListener('DOMContentLoaded', () => {
  // Firebase is initialized in index.html
  // We'll use window.auth and window.db
  auth = window.auth;
  db = window.db;
  
  console.log('Script loaded, waiting for Firebase...');
});

// ===================================
// SMOOTH SCROLL TO TOP
// ===================================

const logo = document.getElementById('scrollToTop');
if (logo) {
  logo.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ===================================
// FORM MANAGEMENT
// ===================================

const formsContainer = document.getElementById('formsContainer');
const studentLoginBtn = document.getElementById('studentLoginBtn');
const adminLoginBtn = document.getElementById('adminLoginBtn');
const studentLoginForm = document.getElementById('studentLoginForm');
const adminLoginForm = document.getElementById('adminLoginForm');
const adminSignupForm = document.getElementById('adminSignupForm');

// Show Student Login Form
if (studentLoginBtn) {
  studentLoginBtn.addEventListener('click', () => {
    showForm(studentLoginForm);
  });
}

// Show Admin Login Form
if (adminLoginBtn) {
  adminLoginBtn.addEventListener('click', () => {
    showForm(adminLoginForm);
  });
}

// Show a specific form
function showForm(formElement) {
  // Hide all forms
  document.querySelectorAll('.form-section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show the selected form
  formElement.classList.add('active');
  formsContainer.classList.add('show');
}

// Close all forms
function closeAllForms() {
  formsContainer.classList.remove('show');
  document.querySelectorAll('.form-section').forEach(section => {
    section.classList.remove('active');
  });
}

// Close forms when clicking outside the form card
if (formsContainer) {
  formsContainer.addEventListener('click', (e) => {
    if (e.target === formsContainer) {
      closeAllForms();
    }
  });
}

// ===================================
// FORM SWITCHING
// ===================================

function switchToAdminSignup() {
  showForm(adminSignupForm);
}

function switchToAdminLogin() {
  showForm(adminLoginForm);
}

// ===================================
// EMAIL VALIDATION HELPER
// ===================================

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ===================================
// STUDENT LOGIN WITH FIREBASE
// ===================================

const studentForm = document.getElementById('studentForm');
if (studentForm) {
  studentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const studentId = document.getElementById('studentId').value.trim();
    const password = document.getElementById('studentPassword').value.trim();

    if (!studentId || !password) {
      alert('Please fill in all fields');
      return;
    }

    if (studentId.length < 3) {
      alert('Student ID must be at least 3 characters');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    try {
      // For now, use localStorage (Firebase auth integration comes next)
      localStorage.setItem('userType', 'student');
      localStorage.setItem('userName', studentId);
      localStorage.setItem('userEmail', studentId + '@college.edu');
      
      alert(`✅ Welcome back, ${studentId}! Redirecting to your dashboard...`);
      closeAllForms();
      studentForm.reset();
      
      setTimeout(() => {
        window.location.href = 'student-dashboard.html';
      }, 1000);
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  });
}

// ===================================
// ADMIN LOGIN WITH FIREBASE
// ===================================

const adminLoginFormTag = document.getElementById('adminLoginFormTag');
if (adminLoginFormTag) {
  adminLoginFormTag.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('adminEmail').value.trim();
    const password = document.getElementById('adminPassword').value.trim();

    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    try {
      // For now, use localStorage (Firebase auth integration comes next)
      localStorage.setItem('userType', 'admin');
      localStorage.setItem('userName', email.split('@')[0]);
      localStorage.setItem('userEmail', email);
      
      alert(`✅ Welcome back, Admin! Redirecting to your dashboard...`);
      closeAllForms();
      adminLoginFormTag.reset();
      
      setTimeout(() => {
        window.location.href = 'admin-dashboard.html';
      }, 1000);
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  });
}

// ===================================
// ADMIN REGISTRATION CODE
// ===================================

const VALID_ADMIN_CODE = 'ADMIN2025SECURE';

// Admin Signup Form Submission
const adminSignupFormTag = document.getElementById('adminSignupFormTag');
if (adminSignupFormTag) {
  adminSignupFormTag.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('adminName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const adminCode = document.getElementById('adminRegistrationCode').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (!name || !email || !adminCode || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (name.length < 3) {
      alert('Name must be at least 3 characters');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Validate admin registration code
    if (adminCode !== VALID_ADMIN_CODE) {
      alert('❌ Invalid admin registration code. Please contact your institute administrator.');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      // For now, use localStorage (Firebase auth integration comes next)
      localStorage.setItem('userType', 'admin');
      localStorage.setItem('userName', name);
      localStorage.setItem('userEmail', email);
      
      alert(`✅ Welcome, ${name}! Your admin account has been created. Redirecting to your dashboard...`);
      closeAllForms();
      adminSignupFormTag.reset();
      
      setTimeout(() => {
        window.location.href = 'admin-dashboard.html';
      }, 1000);
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed. Please try again.');
    }
  });
}

// ===================================
// SMOOTH SCROLLING FOR NAV LINKS
// ===================================

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===================================
// CLOSE FORMS WHEN PRESSING ESC
// ===================================

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllForms();
  }
});

// ===================================
// INPUT FIELD LIVE VALIDATION
// ===================================

const studentIdField = document.getElementById('studentId');
if (studentIdField) {
  studentIdField.addEventListener('blur', function() {
    if (this.value.trim().length < 3 && this.value.trim().length > 0) {
      this.style.borderColor = '#e74c3c';
    } else {
      this.style.borderColor = '#ddd';
    }
  });
}

const studentPasswordField = document.getElementById('studentPassword');
if (studentPasswordField) {
  studentPasswordField.addEventListener('blur', function() {
    if (this.value.length < 6 && this.value.length > 0) {
      this.style.borderColor = '#e74c3c';
    } else {
      this.style.borderColor = '#ddd';
    }
  });
}

const adminPasswordField = document.getElementById('adminPassword');
if (adminPasswordField) {
  adminPasswordField.addEventListener('blur', function() {
    if (this.value.length < 6 && this.value.length > 0) {
      this.style.borderColor = '#e74c3c';
    } else {
      this.style.borderColor = '#ddd';
    }
  });
}

const adminEmailField = document.getElementById('adminEmail');
if (adminEmailField) {
  adminEmailField.addEventListener('blur', function() {
    if (!isValidEmail(this.value) && this.value.length > 0) {
      this.style.borderColor = '#e74c3c';
    } else {
      this.style.borderColor = '#ddd';
    }
  });
}

const signupEmailField = document.getElementById('signupEmail');
if (signupEmailField) {
  signupEmailField.addEventListener('blur', function() {
    if (!isValidEmail(this.value) && this.value.length > 0) {
      this.style.borderColor = '#e74c3c';
    } else {
      this.style.borderColor = '#ddd';
    }
  });
}

const confirmPasswordField = document.getElementById('confirmPassword');
if (confirmPasswordField) {
  confirmPasswordField.addEventListener('blur', function() {
    const password = document.getElementById('signupPassword').value;
    if (this.value !== password && this.value.length > 0) {
      this.style.borderColor = '#e74c3c';
    } else {
      this.style.borderColor = '#ddd';
    }
  });
}

const adminCodeField = document.getElementById('adminRegistrationCode');
if (adminCodeField) {
  adminCodeField.addEventListener('blur', function() {
    if (this.value.trim() === VALID_ADMIN_CODE) {
      this.style.borderColor = '#27ae60';
    } else if (this.value.length > 0) {
      this.style.borderColor = '#e74c3c';
    } else {
      this.style.borderColor = '#ddd';
    }
  });
}


// ===================================
// HERO SLIDESHOW / CAROUSEL
// ===================================

let slideIndex = 1;
let slideTimer = null;

function showSlides(n) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  if (!slides.length) return;
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.display = 'none';
  });
  dots.forEach(dot => dot.classList.remove('active'));
  slides[slideIndex - 1].classList.add('active');
  slides[slideIndex - 1].style.display = 'block';
  if (dots[slideIndex - 1]) dots[slideIndex - 1].classList.add('active');
}

function plusSlides(n) {
  showSlides(slideIndex += n);
  resetSlideTimer();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  resetSlideTimer();
}

function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
  slideTimer = setTimeout(autoSlide, 4000);
}

function resetSlideTimer() {
  if (slideTimer) clearTimeout(slideTimer);
  slideTimer = setTimeout(autoSlide, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlides(slideIndex);
  slideTimer = setTimeout(autoSlide, 4000);
  // Touch swipe support for mobile
  let xDown = null;
  let yDown = null;
  const container = document.querySelector('.slideshow-container');
  if (container) {
    container.addEventListener('touchstart', function(evt) {
      const firstTouch = evt.touches[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }, false);
    container.addEventListener('touchmove', function(evt) {
      if (!xDown || !yDown) return;
      let xUp = evt.touches[0].clientX;
      let yUp = evt.touches[0].clientY;
      let xDiff = xDown - xUp;
      let yDiff = yDown - yUp;
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) plusSlides(1); // swipe left
        else plusSlides(-1); // swipe right
      }
      xDown = null;
      yDown = null;
    }, false);
  }
});

console.log('My Mess - Frontend Initialized Successfully ✓');
