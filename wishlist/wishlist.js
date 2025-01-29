document.addEventListener("DOMContentLoaded", () => {
    const wishlistContainer = document.getElementById("wishlist-container");
    const wishlistTotal = document.getElementById("wishlist-total");
    const moveToCartButton = document.getElementById("move-to-cart-button");

    // Retrieve wishlist data from localStorage
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Function to render wishlist products
    function renderWishlist() {
        if (wishlist.length === 0) {
            wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
            wishlistTotal.textContent = "$0.00";
            return;
        }

        let total = 0;
        wishlistContainer.innerHTML = wishlist.map((product, index) => {
            total += parseFloat(product.price.replace("$", ""));
            return `
               <section id="product-detail" class="product-detail">
                    <div id="product-container" class="product-detail-content">
                        <img class="product-image" src="${product.image}" alt="Product Image">
                        <div data-id="${product.id}">
                            <p><span class="product-name">${product.name}</span></p>
                            <p><span id="product-description">${product.description || ""}</span></p>
                            <p><span class="product-price">${product.price}</span></p>
                            <button class="btn remove-product" data-index="${index}">Remove</button>
                        </div>
                    </div>
                </section>
            `;
        }).join("");

        wishlistTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Function to remove a product from the wishlist
    function removeFromWishlist(index) {
        wishlist.splice(index, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        renderWishlist();
    }

    // Function to move a product to the cart
    function moveToCart(index) {
        const product = wishlist.splice(index, 1)[0];
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        renderWishlist();
    }

    // Handle "Remove" and "Move to Cart" button clicks
    wishlistContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-product")) {
            const index = e.target.getAttribute("data-index");
            removeFromWishlist(index);
        }

        if (e.target.classList.contains("move-to-cart-product")) {
            const index = e.target.getAttribute("data-index");
            moveToCart(index);
        }
    });

    // Render the wishlist initially
    renderWishlist();
});

// home-appliancs 
document.addEventListener("DOMContentLoaded", () => {
    const wishlistContainer = document.getElementById("wishlist-container");
    const wishlistTotal = document.getElementById("wishlist-total");
    const moveToCartButton = document.getElementById("move-to-cart-button");

    // Retrieve wishlist data from localStorage
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Function to render wishlist homes
    function renderWishlist() {
        if (wishlist.length === 0) {
            wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
            wishlistTotal.textContent = "$0.00";
            return;
        }

        let total = 0;
        wishlistContainer.innerHTML = wishlist.map((home, index) => {
            total += parseFloat(home.price.replace("$", ""));
            return `
               <section id="home-detail" class="home-detail">
                    <div id="home-container" class="home-detail-content">
                        <img class="home-image" src="${home.image}" alt="Home Image">
                        <div data-id="${home.id}">
                            <p><span class="home-name">${home.name}</span></p>
                            <p><span id="home-description">${home.description || ""}</span></p>
                            <p><span class="home-price">${home.price}</span></p>
                            <button class="btn remove-home" data-index="${index}">Remove</button>
                        </div>
                    </div>
                </section>
            `;
        }).join("");

        wishlistTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Function to remove a home from the wishlist
    function removeFromWishlist(index) {
        wishlist.splice(index, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        renderWishlist();
    }

    // Function to move a home to the cart
    function moveToCart(index) {
        const home = wishlist.splice(index, 1)[0];
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(home);
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        renderWishlist();
    }

    // Handle "Remove" and "Move to Cart" button clicks
    wishlistContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-home")) {
            const index = e.target.getAttribute("data-index");
            removeFromWishlist(index);
        }

        if (e.target.classList.contains("move-to-cart-home")) {
            const index = e.target.getAttribute("data-index");
            moveToCart(index);
        }
    });

    // Render the wishlist initially
    renderWishlist();
});

// clothing 
document.addEventListener("DOMContentLoaded", () => {
    const wishlistContainer = document.getElementById("wishlist-container");
    const wishlistTotal = document.getElementById("wishlist-total");
    const moveToCartButton = document.getElementById("move-to-cart-button");

    // Retrieve wishlist data from localStorage
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Function to render wishlist clothing items
    function renderWishlist() {
        if (wishlist.length === 0) {
            wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
            wishlistTotal.textContent = "$0.00";
            return;
        }

        let total = 0;
        wishlistContainer.innerHTML = wishlist.map((clothing, index) => {
            total += parseFloat(clothing.price.replace("$", ""));
            return `
               <section id="clothing-detail" class="clothing-detail">
                    <div id="clothing-container" class="clothing-detail-content">
                        <img class="clothing-image" src="${clothing.image}" alt="Clothing Image">
                        <div data-id="${clothing.id}">
                            <p><span class="clothing-name">${clothing.name}</span></p>
                            <p><span id="clothing-description">${clothing.description || ""}</span></p>
                            <p><span class="clothing-price">${clothing.price}</span></p>
                            <button class="btn remove-clothing" data-index="${index}">Remove</button>
                        </div>
                    </div>
                </section>
            `;
        }).join("");

        wishlistTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Function to remove a clothing item from the wishlist
    function removeFromWishlist(index) {
        wishlist.splice(index, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        renderWishlist();
    }

    // Function to move a clothing item to the cart
    function moveToCart(index) {
        const clothing = wishlist.splice(index, 1)[0];
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(clothing);
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        renderWishlist();
    }

    // Handle "Remove" and "Move to Cart" button clicks
    wishlistContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-clothing")) {
            const index = e.target.getAttribute("data-index");
            removeFromWishlist(index);
        }

        if (e.target.classList.contains("move-to-cart-clothing")) {
            const index = e.target.getAttribute("data-index");
            moveToCart(index);
        }
    });

    // Render the wishlist initially
    renderWishlist();
});

// electronics 
document.addEventListener("DOMContentLoaded", () => {
    const wishlistContainer = document.getElementById("wishlist-container");
    const wishlistTotal = document.getElementById("wishlist-total");
    const moveToCartButton = document.getElementById("move-to-cart-button");

    // Retrieve wishlist data from localStorage
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Function to render wishlist electronic items
    function renderWishlist() {
        if (wishlist.length === 0) {
            wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
            wishlistTotal.textContent = "$0.00";
            return;
        }

        let total = 0;
        wishlistContainer.innerHTML = wishlist.map((electronic, index) => {
            total += parseFloat(electronic.price.replace("$", ""));
            return `
               <section id="electronic-detail" class="electronic-detail">
                    <div id="electronic-container" class="electronic-detail-content">
                        <img class="electronic-image" src="${electronic.image}" alt="Electronic Image">
                        <div data-id="${electronic.id}">
                            <p><span class="electronic-name">${electronic.name}</span></p>
                            <p><span id="electronic-description">${electronic.description || ""}</span></p>
                            <p><span class="electronic-price">${electronic.price}</span></p>
                            <button class="btn remove-electronic" data-index="${index}">Remove</button>
                        </div>
                    </div>
                </section>
            `;
        }).join("");

        wishlistTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Function to remove an electronic item from the wishlist
    function removeFromWishlist(index) {
        wishlist.splice(index, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        renderWishlist();
    }

    // Function to move an electronic item to the cart
    function moveToCart(index) {
        const electronic = wishlist.splice(index, 1)[0];
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(electronic);
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        renderWishlist();
    }

    // Handle "Remove" and "Move to Cart" button clicks
    wishlistContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-electronic")) {
            const index = e.target.getAttribute("data-index");
            removeFromWishlist(index);
        }

        if (e.target.classList.contains("move-to-cart-electronic")) {
            const index = e.target.getAttribute("data-index");
            moveToCart(index);
        }
    });

    // Render the wishlist initially
    renderWishlist();
});

// books
document.addEventListener("DOMContentLoaded", () => {
    const wishlistContainer = document.getElementById("wishlist-container");
    const wishlistTotal = document.getElementById("wishlist-total");
    const moveToCartButton = document.getElementById("move-to-cart-button");

    // Retrieve wishlist data from localStorage
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Function to render wishlist book items
    function renderWishlist() {
        if (wishlist.length === 0) {
            wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
            wishlistTotal.textContent = "$0.00";
            return;
        }

        let total = 0;
        wishlistContainer.innerHTML = wishlist.map((book, index) => {
            total += parseFloat(book.price.replace("$", ""));
            return `
               <section id="book-detail" class="book-detail">
                    <div id="book-container" class="book-detail-content">
                        <img class="book-image" src="${book.image}" alt="Book Image">
                        <div data-id="${book.id}">
                            <p><span class="book-name">${book.name}</span></p>
                            <p><span id="book-description">${book.description || ""}</span></p>
                            <p><span class="book-price">${book.price}</span></p>
                            <button class="btn remove-book" data-index="${index}">Remove</button>
                        </div>
                    </div>
                </section>
            `;
        }).join("");

        wishlistTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Function to remove a book from the wishlist
    function removeFromWishlist(index) {
        wishlist.splice(index, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        renderWishlist();
    }

    // Function to move a book to the cart
    function moveToCart(index) {
        const book = wishlist.splice(index, 1)[0];
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(book);
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        renderWishlist();
    }

    // Handle "Remove" and "Move to Cart" button clicks
    wishlistContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-book")) {
            const index = e.target.getAttribute("data-index");
            removeFromWishlist(index);
        }

        if (e.target.classList.contains("move-to-cart-book")) {
            const index = e.target.getAttribute("data-index");
            moveToCart(index);
        }
    });

    // Render the wishlist initially
    renderWishlist();
});

document.addEventListener("DOMContentLoaded", () => {
    const wishlistContainer = document.getElementById("wishlist-container");
    const wishlistTotal = document.getElementById("wishlist-total");
    const moveToCartButton = document.getElementById("move-to-cart-button");

    // Retrieve wishlist data from localStorage
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Function to render wishlist stack items
    function renderWishlist() {
        if (wishlist.length === 0) {
            wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
            wishlistTotal.textContent = "$0.00";
            return;
        }

        let total = 0;
        wishlistContainer.innerHTML = wishlist.map((stack, index) => {
            total += parseFloat(stack.price.replace("$", ""));
            return `
               <section id="stack-detail" class="stack-detail">
                    <div id="stack-container" class="stack-detail-content">
                        <img class="stack-image" src="${stack.image}" alt="Stack Image">
                        <div data-id="${stack.id}">
                            <p><span class="stack-name">${stack.name}</span></p>
                            <p><span id="stack-description">${stack.description || ""}</span></p>
                            <p><span class="stack-price">${stack.price}</span></p>
                            <button class="btn remove-stack" data-index="${index}">Remove</button>
                        </div>
                    </div>
                </section>
            `;
        }).join("");

        wishlistTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Function to remove a stack from the wishlist
    function removeFromWishlist(index) {
        wishlist.splice(index, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        renderWishlist();
    }

    // Function to move a stack to the cart
    function moveToCart(index) {
        const stack = wishlist.splice(index, 1)[0];
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(stack);
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        renderWishlist();
    }

    // Handle "Remove" and "Move to Cart" button clicks
    wishlistContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-stack")) {
            const index = e.target.getAttribute("data-index");
            removeFromWishlist(index);
        }

        if (e.target.classList.contains("move-to-cart-stack")) {
            const index = e.target.getAttribute("data-index");
            moveToCart(index);
        }
    });

    // Render the wishlist initially
    renderWishlist();
});
