// Cart Handler

const cartItemContainer = document.querySelector(
    ".cart-content .cart-products"
);
const cartTotalValueElement = document.querySelector(".cart-total h5");
const checkoutBtn = document.querySelector(".checkout-btn");

let cart = [];

// Get Cart From Local Storage
const getCartFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("gridCityCart"));
};

// Set Cart In Local Storage
const setCartInLocalStorage = () => {
    localStorage.setItem("gridCityCart", JSON.stringify(cart));
};

// Change Item Quantity
const changeCartItemQuantity = (productIndex) => {
    cart[productIndex].quantity = parseInt(
        productQuantityInput[productIndex].value
    );
    setCartInLocalStorage();
    showCartValue();
};

// Change Item Size
const changeCartItemSize = (productIndex) => {
    const productSizeSelect = document.querySelectorAll(".product-size select")[
        productIndex
    ];
    cart[productIndex].size = productSizeSelect.value;
    setCartInLocalStorage();
};

// Remove Item From Cart
const removeItemFromCart = (productIndex) => {
    cart.splice(productIndex, 1);
    setCartInLocalStorage();
    showCartValue();
};

// Show Item In Carts
const showCartValue = () => {
    if (getCartFromLocalStorage() !== null) {
        cart = getCartFromLocalStorage();
    }
    if (cart.length > 0) {
        checkoutBtn.style.display = "block";
        // Set total price of cart items
        cartTotalValueElement.textContent = `€${cart.reduce((acc, product) => {
            return acc + product.price;
        }, 0)}`;
        renderCartItems();
    } else {
        checkoutBtn.style.display = "none";
        cartItemContainer.innerHTML = `<h4 class="empty-cart">Your Cart Is Empty</h4>`;
        cartTotalValueElement.textContent = `€0.00`;
    }
};

// Render Cart Items
const renderCartItems = () => {
    cartItemContainer.innerHTML = "";
    cart.map(
        (product, index) => `<div class="cart-product">
        <div class="cart-head">
            <div class="cart-img">
                <img
                    src="./assets/images/${product.img}"
                    alt="${product.name}"
                />
            </div>
            <div>
                <h5>${product.name}</h5>
                <h6>€${product.price}</h6>
            </div>
        </div>
        <div class="product-quantity">
            <button class="product-decrease" onclick="decreaseProductQuantity(${index}),changeCartItemQuantity(${index})">-</button>
            <input
                class="product-input"
                type="number"
                min="1"
                max="10"
                value="${product.quantity}"
                onchange="setInputValue(${index}), changeCartItemQuantity(${index})"
                
            />
            <button class="product-increase"  onclick="increaseProductQuantity(${index}),changeCartItemQuantity(${index})">+</button>
        </div>
        <div class="product-size">
            <select name="size" onchange="changeCartItemSize(${index})">
                <option value="small" ${
                    product.size === "small" ? "selected" : ""
                }>Small</option>
                <option value="medium" ${
                    product.size === "medium" ? "selected" : ""
                }>Medium</option>
                <option value="large" ${
                    product.size === "large" ? "selected" : ""
                }>Large</option>
            </select>
        </div>
        <div class="cart-remove" onclick="removeItemFromCart(${index})">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path
                    fill="#fff"
                    d="M4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312L10.585938 12L4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031L12 13.414062L18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969L13.414062 12L19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688L12 10.585938L5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"
                />
            </svg>
        </div>
    </div>`
    ).forEach((product) => {
        cartItemContainer.innerHTML += product;
    });
};

showCartValue();
