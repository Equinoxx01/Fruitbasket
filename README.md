# FruitBasket - Fresh Fruits E-Commerce Platform

A modern, fully-functional e-commerce platform for selling fresh fruits with beautiful design, smooth transitions, and complete cart functionality.

## Features 🌟

- **Modern Design**: Beautiful gradient backgrounds, smooth transitions, and responsive layout
- **Full Shopping Cart**: Add/remove items, quantity management, and persistent cart using localStorage
- **Complete Navigation**: All pages are properly connected with working links
- **Animated Elements**: Hover effects, transitions, and smooth animations throughout
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Cart Storage**: localStorage
- **Design**: Custom CSS with modern gradients and transitions

## Project Structure

```
Fruitbasket/
├── app.py                      # Flask application
├── static/
│   ├── style.css             # Shared CSS styles
│   ├── cart.js               # Cart functionality
│   └── *.jpg                 # Fruit images
└── templates/
    ├── homepage.html         # Landing page
    ├── shop.html             # Product shop with working cart
    ├── cart.html             # Shopping cart page
    ├── order.html            # Checkout page
    ├── aboutus.html          # About us page
    ├── contact.html          # Contact page
    ├── fruits.html           # Fruits information
    └── login.html            # Login page
```

## Installation & Setup

1. **Install Python** (3.7 or higher)
2. **Install Flask**:
   ```bash
   pip install flask
   ```

## Running the Application

1. **Start the server**:
   ```bash
   python app.py
   ```

2. **Open your browser** and navigate to:
   ```
   http://localhost:5000
   ```

## How to Use

### Shopping Flow:
1. **Browse Shop** - Click "Shop" or "Explore Now" from homepage
2. **Add to Cart** - Select quantity and click "Add to Cart" on any fruit
3. **View Cart** - Click "Cart" in navigation (badge shows item count)
4. **Remove Items** - Click "Remove" button on any cart item
5. **Checkout** - Click "Proceed to Checkout" to go to order page
6. **Complete Order** - Fill in shipping details and place order

### Navigation:
- All pages are connected through the top navigation bar
- Cart badge shows the number of items in your cart
- Click on the logo to return to homepage

## Features Breakdown

### Design Enhancements:
✅ Modern gradient backgrounds
✅ Smooth hover animations and transitions
✅ Card-based layouts with shadows
✅ Responsive grid system
✅ Animated buttons with hover effects
✅ Fixed navigation bar
✅ Professional footer

### Cart Functionality:
✅ Add items with quantity selection
✅ Remove items from cart
✅ Dynamic cart badge showing item count
✅ Persistent cart using localStorage
✅ Real-time total calculation
✅ Empty cart state handling
✅ Smooth checkout flow

### Page-Specific Features:

**Homepage**: Hero section with call-to-action buttons
**Shop**: Product cards with quantity selectors and add-to-cart buttons
**Cart**: Dynamic cart display with remove functionality
**Order**: Checkout form with order summary
**About Us**: Enhanced content with animated cards
**Contact**: Contact form with input validation
**Login**: Login form with guest option
**Fruits**: Information page about fruit benefits

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Opera

## Tips

- Cart data persists in browser localStorage
- All navigation links use Flask url_for for proper routing
- Design is fully responsive and mobile-friendly
- Transitions and animations enhance user experience

## Support

For any issues or questions, feel free to reach out!

© 2025 FruitBasket | Designed with ❤️

