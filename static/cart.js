// Cart Management using localStorage

class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartUI();
    }

    loadCart() {
        const cartData = localStorage.getItem('shoppingCart');
        return cartData ? JSON.parse(cartData) : [];
    }

    saveCart() {
        localStorage.setItem('shoppingCart', JSON.stringify(this.items));
        this.updateCartUI();
    }

    addItem(name, price, image, quantity = 1) {
        const existingItem = this.items.find(item => item.name === name);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ name, price, image, quantity });
        }
        
        this.saveCart();
        this.showNotification('Item added to cart!');
    }

    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
        this.saveCart();
        this.showNotification('Item removed from cart');
    }

    updateQuantity(name, quantity) {
        const item = this.items.find(item => item.name === name);
        if (item) {
            item.quantity = quantity;
            if (item.quantity <= 0) {
                this.removeItem(name);
            } else {
                this.saveCart();
            }
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    clearCart() {
        this.items = [];
        this.saveCart();
    }

    updateCartUI() {
        // Update cart badge
        const badges = document.querySelectorAll('.cart-badge, .cart-count');
        badges.forEach(badge => {
            if (badge) {
                const count = this.getTotalItems();
                badge.textContent = count;
                badge.style.display = count > 0 ? 'flex' : 'none';
            }
        });

        // Update cart page if on cart page
        if (window.location.pathname.includes('cart')) {
            this.renderCartPage();
        }
    }

    renderCartPage() {
        const cartContainer = document.getElementById('cart-items');
        if (!cartContainer) return;

        if (this.items.length === 0) {
            cartContainer.innerHTML = `
                <div class="empty-cart">
                    <h2>Your cart is empty</h2>
                    <p>Start shopping to add items to your cart!</p>
                    <a href="${window.location.origin}/shop" class="btn">Go Shopping</a>
                </div>
            `;
            return;
        }

        cartContainer.innerHTML = this.items.map((item, index) => `
            <div class="cart-item" data-index="${index}">
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-qty">Quantity: ${item.quantity}</div>
                </div>
                <div class="item-actions">
                    <button class="btn remove-btn" onclick="cart.removeItem('${item.name}')">Remove</button>
                </div>
                <div class="item-price">₱${(item.price * item.quantity).toFixed(2)}</div>
            </div>
        `).join('');

        // Update total
        const totalElement = document.getElementById('cart-total');
        if (totalElement) {
            totalElement.textContent = `Total: ₱${this.getTotal().toFixed(2)}`;
        }

        // Add checkout button if not exists
        if (document.getElementById('checkout-btn') === null) {
            const checkoutBtn = document.createElement('button');
            checkoutBtn.id = 'checkout-btn';
            checkoutBtn.className = 'btn';
            checkoutBtn.textContent = 'Proceed to Checkout';
            checkoutBtn.style.cssText = 'margin-top: 30px; width: 100%; padding: 18px; font-size: 1.2rem;';
            checkoutBtn.onclick = () => {
                const url = window.location.origin + '/order';
                window.location.href = url;
            };
            cartContainer.insertAdjacentElement('afterend', checkoutBtn);
        }
    }

    showNotification(message) {
        // Remove existing notification
        const existing = document.querySelector('.notification');
        if (existing) {
            existing.remove();
        }

        // Create new notification
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Initialize cart
const cart = new ShoppingCart();

// Add CSS for slideOutRight animation
if (!document.getElementById('cart-animations')) {
    const style = document.createElement('style');
    style.id = 'cart-animations';
    style.textContent = `
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

