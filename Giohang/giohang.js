 document.addEventListener("DOMContentLoaded", function() {
        const cartItemsContainer = document.getElementById('cart-items');
        const emptyMessage = document.getElementById('empty-message');

        // Lấy giỏ hàng từ localStorage
        const storedCart = localStorage.getItem('cart');
        const cart = storedCart ? JSON.parse(storedCart) : [];

        if (cart.length > 0) {
            // Ẩn thông báo giỏ hàng trống
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
                        <button class="remove-btn" data-id="${product.id}">Xóa</button>
                    </div>
                `;
                cartItemsContainer.appendChild(productElement);
            });

            // Thêm sự kiện xóa sản phẩm khỏi giỏ hàng
            document.querySelectorAll('.remove-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    removeFromCart(productId);
                });
            });
        } else {
            // Hiển thị thông báo giỏ hàng trống nếu không có sản phẩm nào
            emptyMessage.style.display = 'block';
        }

        // Hàm xóa sản phẩm khỏi giỏ hàng
        function removeFromCart(productId) {
            const updatedCart = cart.filter(product => product.id !== productId);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            location.reload(); // Tải lại trang để cập nhật giao diện
        }
    });
