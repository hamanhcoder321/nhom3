document.addEventListener("DOMContentLoaded", function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyMessage = document.getElementById('empty-message');

    // Lấy giỏ hàng từ localStorage
    let storedCart = localStorage.getItem('cart');
    let cart = storedCart ? JSON.parse(storedCart) : [];

    // Hàm hiển thị giỏ hàng
    function displayCartItems() {
        cartItemsContainer.innerHTML = ''; // Xóa hết sản phẩm cũ
        if (cart.length > 0) {
            emptyMessage.style.display = 'none';
            // Hiển thị các sản phẩm trong giỏ hàng
            cart.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('cart-item');
                productElement.innerHTML = `
                    <img src="${product.img}" alt="${product.name}" width="100">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>Số lượng: ${product.quantity}</p>
                        <p>Giá: ${product.price.toLocaleString()} VND</p>
                        <button class="remove-btn" data-id="${product.id}">Xóa 1</button>
                    </div>
                `;
                cartItemsContainer.appendChild(productElement);
            });

            // Thêm sự kiện xóa từng sản phẩm khỏi giỏ hàng
            document.querySelectorAll('.remove-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    removeOneFromCart(productId);
                });
            });
        } else {
            // Nếu giỏ hàng trống, hiển thị thông báo
            emptyMessage.style.display = 'block';
        }
    }

    // Hàm giảm số lượng hoặc xóa sản phẩm khỏi giỏ hàng
    function removeOneFromCart(productId) {
        const productIndex = cart.findIndex(product => product.id === productId);
        if (productIndex !== -1) {
            // Giảm số lượng nếu lớn hơn 1, nếu không thì xóa sản phẩm
            if (cart[productIndex].quantity > 1) {
                cart[productIndex].quantity--;
            } else {
                cart.splice(productIndex, 1); // Xóa sản phẩm khỏi giỏ hàng
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCartItems(); // Cập nhật giao diện giỏ hàng ngay lập tức
        }
    }

    // Hiển thị giỏ hàng ban đầu khi tải trang
    displayCartItems();
});
