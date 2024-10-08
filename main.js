// Lấy phần tử menuToggle và closeBtn
const menuToggle = document.getElementById('menuToggle');
const closeBtn = document.getElementById('closeBtn');
const mobileSidebar = document.getElementById('mobileSidebar');

// Mở menu khi click vào menuToggle
menuToggle.addEventListener('click', function () {
  mobileSidebar.classList.add('active');
});

// Đóng menu khi click vào closeBtn
closeBtn.addEventListener('click', function () {
  mobileSidebar.classList.remove('active');
});

// phần Login
const loginModal = document.getElementById('loginModal');
const loginIcon = document.querySelector('.icons a i.fa-user');
const loginCloseBtn = document.getElementById('loginCloseBtn');

// Lấy hai form đăng nhập và đăng ký
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Nút chuyển đổi giữa đăng nhập và đăng ký
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');

// Khi click vào icon user, hiển thị modal
loginIcon.addEventListener('click', function(e) {
  e.preventDefault();
  loginModal.style.display = 'flex';
});

// Khi click vào nút x, đóng modal
loginCloseBtn.addEventListener('click', function() {
  loginModal.style.display = 'none';
});

// Khi click ra ngoài modal, cũng đóng modal
window.addEventListener('click', function(event) {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

// Chuyển từ Đăng Nhập sang Đăng Ký
switchToSignup.addEventListener('click', function(e) {
  e.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});

// Chuyển từ Đăng Ký sang Đăng Nhập
switchToLogin.addEventListener('click', function(e) {
  e.preventDefault();
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
});
