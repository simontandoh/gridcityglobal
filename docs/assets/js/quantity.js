// Handle product Value

const productQuantityInput = document.querySelectorAll(".product-input");

const decreaseProductQuantity = (index) => {
    inputEl = productQuantityInput[index];
    if (inputEl.value <= 1) {
        return;
    }
    inputEl.value--;
};

const increaseProductQuantity = (index) => {
    inputEl = productQuantityInput[index];
    if (inputEl.value >= 10) {
        return;
    }
    inputEl.value++;
};

const setInputValue = (index) => {
    inputEl = productQuantityInput[index];
    if (inputEl.value > 10) {
        inputEl.value = 10;
    } else if (inputEl.value < 1) {
        inputEl.value = 0;
        return;
    }

    productValue = productQuantityInput.value;
};
