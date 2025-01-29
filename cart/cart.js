document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-container");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");

    // Retrieve cart data from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to render cart items in product-detail format
    function renderCart() {
        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            cartTotal.textContent = "$0.00";
            return;
        }

        let total = 0;
        cartContainer.innerHTML = cart.map((product, index) => {
            total += parseFloat(product.price.replace("$", ""));
            return `
                <section id="product-detail" class="product-detail">
                    <div id="product-container" class="product-detail-content">
                        <img class="product-image" src="${product.image}" alt="Product Image">
                        <div data-id="${product.id}">
                            <p><span class="product-name">${product.name}</span></p>
                            <p><span id="product-description">${product.description || ""}</span></p>
                            <p><span class="product-price">${product.price}</span></p>
                            <button class="btn remove-item" data-index="${index}">Remove</button>
                        </div>
                    </div>
                </section>
            `;
        }).join("");

        cartTotal.textContent = `$${total.toFixed(2)}`;
    }


    

    // Function to remove an item from the cart
    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    // Handle "Remove" button clicks
    cartContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-item")) {
            const index = e.target.getAttribute("data-index");
            removeFromCart(index);
        }
    });

    // Handle "Checkout" button
    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items before checking out.");
        } else {
            alert("Thank you for your purchase!");
            localStorage.removeItem("cart");
            renderCart();
        }
    });

    // Render the cart initially
    renderCart();
});


// home product cart 

document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-container");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");

    // Retrieve cart data from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to render cart items in home-detail format
    function renderCart() {
        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            cartTotal.textContent = "$0.00";
            return;
        }

        let total = 0;
        cartContainer.innerHTML = cart.map((home, index) => {
            total += parseFloat(home.price.replace("$", ""));
            return `
                <section id="home-detail" class="home-detail">
                    <div id="home-container" class="home-detail-content">
                        <img class="home-image" src="${home.image}" alt="Home Image">
                        <div data-id="${home.id}">
                            <p><span class="home-name">${home.name}</span></p>
                            <p><span id="home-description">${home.description || ""}</span></p>
                            <p><span class="home-price">${home.price}</span></p>
                            <button class="btn remove-item" data-index="${index}">Remove</button>
                        </div>
                    </div>
                </section>
            `;
        }).join("");

        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Function to remove an item from the cart
    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    // Handle "Remove" button clicks
    cartContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-item")) {
            const index = e.target.getAttribute("data-index");
            removeFromCart(index);
        }
    });

    // Handle "Checkout" button
    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items before checking out.");
        } else {
            alert("Thank you for your purchase!");
            localStorage.removeItem("cart");
            renderCart();
        }
    });

    // Render the cart initially
    renderCart();
});



// electronic cart details 
document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-container");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");

    // Retrieve cart data from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to render cart items in electronic-detail format
    function renderCart() {
        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            cartTotal.textContent = "$0.00";
            return;
        }

        let total = 0;
        cartContainer.innerHTML = cart.map((electronic, index) => {
            total += parseFloat(electronic.price.replace("$", ""));
            return `
                <section id="electronic-detail" class="electronic-detail">
                    <div id="electronic-container" class="electronic-detail-content">
                        <img class="electronic-image" src="${electronic.image}" alt="Electronic Image">
                        <div data-id="${electronic.id}">
                            <p><span class="electronic-name">${electronic.name}</span></p>
                            <p><span id="electronic-description">${electronic.description || ""}</span></p>
                            <p><span class="electronic-price">${electronic.price}</span></p>
                            <button class="btn remove-item" data-index="${index}">Remove</button>
                        </div>
                    </div>
                </section>
            `;
        }).join("");

        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Function to remove an item from the cart
    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    // Handle "Remove" button clicks
    cartContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-item")) {
            const index = e.target.getAttribute("data-index");
            removeFromCart(index);
        }
    });

    // Handle "Checkout" button
    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items before checking out.");
        } else {
            alert("Thank you for your purchase!");
            localStorage.removeItem("cart");
            renderCart();
        }
    });

    // Render the cart initially
    renderCart();
});

// clothing cart details 

document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-container");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");

    // Retrieve cart data from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to render cart items in clothing-detail format
    function renderCart() {
        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            cartTotal.textContent = "$0.00";
            return;
        }

        let total = 0;
        cartContainer.innerHTML = cart.map((clothing, index) => {
            total += parseFloat(clothing.price.replace("$", ""));
            return `
                <section id="clothing-detail" class="clothing-detail">
                    <div id="clothing-container" class="clothing-detail-content">
                        <img class="clothing-image" src="${clothing.image}" alt="Clothing Image">
                        <div data-id="${clothing.id}">
                            <p><span class="clothing-name">${clothing.name}</span></p>
                            <p><span id="clothing-description">${clothing.description || ""}</span></p>
                            <p><span class="clothing-price">${clothing.price}</span></p>
                            <button class="btn remove-item" data-index="${index}">Remove</button>
                        </div>
                    </div>
                </section>
            `;
        }).join("");

        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Function to remove an item from the cart
    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    // Handle "Remove" button clicks
    cartContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-item")) {
            const index = e.target.getAttribute("data-index");
            removeFromCart(index);
        }
    });

    // Handle "Checkout" button
    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items before checking out.");
        } else {
            alert("Thank you for your purchase!");
            localStorage.removeItem("cart");
            renderCart();
        }
    });

    // Render the cart initially
    renderCart();
});



// books cart details 
document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-container");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");

    // Retrieve cart data from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to render cart items in book-detail format
    function renderCart() {
        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            cartTotal.textContent = "$0.00";
            return;
        }

        let total = 0;
        cartContainer.innerHTML = cart.map((book, index) => {
            total += parseFloat(book.price.replace("$", ""));
            return `
                <section id="book-detail" class="book-detail">
                    <div id="book-container" class="book-detail-content">
                        <img class="book-image" src="${book.image}" alt="Book Image">
                        <div data-id="${book.id}">
                            <p><span class="book-name">${book.name}</span></p>
                            <p><span id="book-description">${book.description || ""}</span></p>
                            <p><span class="book-price">${book.price}</span></p>
                            <button class="btn remove-item" data-index="${index}">Remove</button>
                        </div>
                    </div>
                </section>
            `;
        }).join("");

        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Function to remove an item from the cart
    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    // Handle "Remove" button clicks
    cartContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-item")) {
            const index = e.target.getAttribute("data-index");
            removeFromCart(index);
        }
    });

    // Handle "Checkout" button
    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items before checking out.");
        } else {
            alert("Thank you for your purchase!");
            localStorage.removeItem("cart");
            renderCart();
        }
    });

    // Render the cart initially
    renderCart();
});


// cart stack details 
document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-container");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");

    // Retrieve cart data from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to render cart items in stack-detail format
    function renderCart() {
        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            cartTotal.textContent = "$0.00";
            return;
        }

        let total = 0;
        cartContainer.innerHTML = cart.map((stack, index) => {
            total += parseFloat(stack.price.replace("$", ""));
            return `
                <section id="stack-detail" class="stack-detail">
                    <div id="stack-container" class="stack-detail-content">
                        <img class="stack-image" src="${stack.image}" alt="Stack Image">
                        <div data-id="${stack.id}">
                            <p><span class="stack-name">${stack.name}</span></p>
                            <p><span id="stack-description">${stack.description || ""}</span></p>
                            <p><span class="stack-price">${stack.price}</span></p>
                            <button class="btn remove-item" data-index="${index}">Remove</button>
                        </div>
                    </div>
                </section>
            `;
        }).join("");

        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Function to remove an item from the cart
    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    // Handle "Remove" button clicks
    cartContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-item")) {
            const index = e.target.getAttribute("data-index");
            removeFromCart(index);
        }
    });

    // Handle "Checkout" button
    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items before checking out.");
        } else {
            alert("Thank you for your purchase!");
            localStorage.removeItem("cart");
            renderCart();
        }
    });

    // Render the cart initially
    renderCart();
});


