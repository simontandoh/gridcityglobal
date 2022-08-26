// Cart Handler

const cartItemContainer = document.querySelector(".selected-cart-items");
const cartTotalValueElement = document.querySelector(".selected-cart-total h5");
const productSize = document.querySelectorAll(".product-size select");

let cart = [];
const cartValueElement = document.querySelector(".cart-item-val");

// Get Cart From Local Storage
const getCartFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("gridCityCart"));
};

// Set Cart In Local Storage
const setCartInLocalStorage = () => {
    localStorage.setItem("gridCityCart", JSON.stringify(cart));
};

// Add Item In Cart
const addItemInCart = (productIndex) => {
    let currentProduct = renderedProducts[productIndex];
    let prevItems = [];

    if (localStorage.getItem("gridCityCart") === null) {
        prevItems = [];
    } else {
        prevItems = getCartFromLocalStorage();
    }

    let itemInCart;
    let productSizeValue = productSize[productIndex].value
        ? productSize[productIndex].value
        : "small";

    itemInCart = prevItems.find(
        (item) =>
            currentProduct.id === item.id && item.size === productSizeValue
    );

    if (itemInCart) {
        let newQuantity =
            parseInt(itemInCart.quantity) +
            parseInt(productQuantityInput[productIndex].value);
        if (newQuantity > 10) {
            itemInCart.quantity = 10;
        } else if (itemInCart.quantity < 10) {
            itemInCart.quantity = newQuantity;
        }
    } else {
        itemInCart = {
            id: currentProduct.id,
            img: currentProduct.img,
            name: currentProduct.name,
            price: currentProduct.price,
            quantity: productQuantityInput[productIndex].value,
            size: productSizeValue,
        };
        prevItems.push(itemInCart);
    }
    cart = [...prevItems];
    setCartInLocalStorage();
    showCartValue();
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
        cartValueElement.style.display = "flex";
        cartValueElement.textContent = `${cart.length}`;
        // Set total price of cart items
        cartTotalValueElement.textContent = `€${cart.reduce((acc, product) => {
            return acc + product.price;
        }, 0)}`;
        renderCartItems();
    } else {
        cartValueElement.style.display = "none";
        cartItemContainer.innerHTML = `<p class="empty-cart">Cart Is Empty</p>`;
        cartTotalValueElement.textContent = `€0.00`;
    }
};

// Render Cart Items
const renderCartItems = () => {
    cartItemContainer.innerHTML = "";
    cart.map(
        (product, index) => `<div class="cart-product">
        <div>
            <div class="cart-img">
                <img src="./assets/images/${product.img}" alt="${
            product.name
        }" />
            </div>
            <div class="cart-text">
                <div class="product-selected">
                    <p>€${product.price}</p>
                    <h6>${product.name}</h6>
                </div>
            </div>
        </div>
        <p class="cart-quantity">x${product.quantity}</p>
        <p class="cart-quantity">${product.size.charAt(0).toUpperCase()}</p>
        <span class="cart-remove" onclick="removeItemFromCart(${index})">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312L10.585938 12L4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031L12 13.414062L18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969L13.414062 12L19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688L12 10.585938L5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" /></svg>
        </span>
    </div>`
    ).forEach((product) => {
        cartItemContainer.innerHTML += product;
    });
};

showCartValue();
