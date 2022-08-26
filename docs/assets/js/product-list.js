const productsListContainer = document.querySelector(".products");
let renderedProducts = [];

// Set Product In Local Storage
const setProductInLocalStorage = (productIndex) => {
    localStorage.setItem(
        "gridCityProduct",
        JSON.stringify(products[productIndex])
    );
};

// Render Products
const renderProducts = () => {
    // Remove prev rendered items
    productsListContainer.innerHTML = "";
    renderedProducts = [];

    const generatedProducts = [...products].map((product, index) => {
        renderedProducts.push(product);

        return `<div class="product">
                <a href="./product.html" class="product-img" onclick="setProductInLocalStorage(${index})">
                    <img
                        src="./assets/images/${product.img}"
                        alt="${product.name}"
                        
                    />
                </a>
                <div class="product-head">
                    <h5>${product.name}</h5>
                    <p>€${product.price}</p>
                </div>
                <div class="product-options">
                    <div class="product-quantity">
                        <button class="product-decrease" onclick="decreaseProductQuantity(${index})">
                            -
                        </button>
                        <input
                            class="product-input"
                            type="number"
                            min="1"
                            max="10"
                            value="1"
                            onchange="setInputValue(${index})"
                        />
                        <button class="product-increase" onclick="increaseProductQuantity(${index})">
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
                <button class="btn" onclick="addItemInCart(${index})">Add to cart</button>
            </div>`;
    });

    generatedProducts.forEach((product) => {
        productsListContainer.innerHTML += product;
    });
};

renderProducts();
