let quantity = 1;
let cartCount = 0;
const images = [
    '/api/placeholder/600/400',
    '/api/placeholder/600/400',
    '/api/placeholder/600/400',
    '/api/placeholder/600/400'
];

function updateQuantity(change) {
    quantity = Math.max(1, quantity + change);
    document.getElementById('quantity').textContent = quantity;
}

function addToCart() {
    cartCount += quantity;
    document.querySelector('.cart-count').textContent = cartCount;
    
    // Create and show notification
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#2ecc71';
    notification.style.color = 'white';
    notification.style.padding = '1rem';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '1000';
    notification.textContent = `${quantity} item(s) added to cart`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function changeImage(index) {
    document.getElementById('mainImage').src = images[index];
}