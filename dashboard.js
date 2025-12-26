// ===================================
// DASHBOARD FUNCTIONALITY
// ===================================

// Redirect to home page
const goHome = document.getElementById('goHome');
if (goHome) {
  goHome.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

// Logout function
function logout() {
  if (confirm('Are you sure you want to logout?')) {
    // Clear stored data
    localStorage.removeItem('userType');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    
    // Redirect to home
    window.location.href = 'index.html';
  }
}

// Load user data
function loadUserData() {
  const userName = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');
  
  if (userName) {
    const studentNameElement = document.getElementById('studentName');
    if (studentNameElement) {
      studentNameElement.textContent = userName.split(' ')[0];
    }
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  loadUserData();
  
  // Check if user is logged in
  const userType = localStorage.getItem('userType');
  if (!userType) {
    alert('Please login first');
    window.location.href = 'index.html';
  }
  
  // Verify user type matches page
  const currentPage = window.location.pathname;
  if (currentPage.includes('student-dashboard') && userType !== 'student') {
    alert('Unauthorized access');
    window.location.href = 'index.html';
  }
  if (currentPage.includes('admin-dashboard') && userType !== 'admin') {
    alert('Unauthorized access');
    window.location.href = 'index.html';
  }
});

// Smooth scroll for navigation links
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

console.log('Dashboard Initialized Successfully ✓');
