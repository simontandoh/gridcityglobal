const productContainer = document.querySelector(".product-content");
let renderedProducts = [];

// Get Product From Local Storage
const getProductFromLocalStorage = () => {
    renderedProducts.push(JSON.parse(localStorage.getItem("gridCityProduct")));
};

// Render Products
const renderProducts = () => {
    getProductFromLocalStorage();
    let product = renderedProducts[0];

    // Remove prev rendered items
    productContainer.innerHTML = "";

    const generatedProduct = `
    <div class="product-main">
        <div class="product-img">
            <img
                src="./assets/images/${product.img}"
                alt="Product"/>
            </div>
        <div class="product-details">
            <h3>${product.name}</h3>
            <p class="product-description">
                ${product.description}
            </p>
            <h5 class="product-price">€${product.price}</h5>
            <div class="product-options">
                <div class="product-quantity">
                <button class="product-decrease" onclick="decreaseProductQuantity(${0})">
                    -
                </button>
                <input
                    class="product-input"
                    type="number"
                    min="1"
                    max="10"
                    value="1"
                    onchange="setInputValue(${0})"
                />
                <button class="product-increase" onclick="increaseProductQuantity(${0})">
                    +
                </button>
        </div>
                <div class="product-size">
                    <select name="size">
                        <option value="" disabled selected>
                            Select Size
                        </option>
                        <option value="small">Small</option>
                        <option value="medium">
                            Medium
                        </option>
                        <option value="large">Large</option>
                    </select>
                </div>
            </div>
            <button class="btn" onclick="addItemInCart(${0})">Add to cart</button>
        </div>
    </div>`;

    productContainer.innerHTML += generatedProduct;
};

renderProducts();
