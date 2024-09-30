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

  