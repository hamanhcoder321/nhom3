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

// Lấy phần modal và các nút
const loginModal = document.getElementById('loginModal');
const loginIcon = document.querySelector('.icons a i.fa-user');
const loginCloseBtn = document.getElementById('loginCloseBtn');

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
