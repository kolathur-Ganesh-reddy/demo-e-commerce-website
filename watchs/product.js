const watchs = {
    31: {
        name: "Samsung Galaxy Watch Active2 LTE",
        price: "$119.99",
        description: "The Galaxy Watch Active2 LTE Smartwatch from Samsung is a motivator, coach, and companion.",
        image: "../shirts/watch1.jpg",
        thumbnails: [
            "../shirts/watch1.jpg",
            "../shirts/w2.avif",
            "../shirts/w3.jpg",
            "../shirts/w4.avif"
        ],
        related: [32, 33, 34]
    },
    32: {
        name: "Apple Smartwatch and Accessories",
        price: "$259.99",
        description: "The Apple Smartwatch LTE Smartwatch is a motivator, coach, and companion.",
        image: "../shirts/watch2.avif",
        thumbnails: [
            "../shirts/watch2.avif",
            "../shirts/a2.jpg",
            "../shirts/a3.jpg",
            "../shirts/a4.jpg"
        ],
        related: [31, 33, 34]
    },
    33: {
        name: "Smartwatch Stainless Steel - Silver",
        price: "$90.99",
        description: "The Smartwatch Stainless Steel is a motivator, coach, and companion.",
        image: "../shirts/watch3.avif",
        thumbnails: [
            "../shirts/watch3.avif",
            "../shirts/b2.webp",
            "../shirts/b3.jpg",
            "../shirts/b4.jpg"
        ],
        related: [31, 32, 34]
    },
    34: {
        name: "Cartier Watch - Men's Cartier Drive",
        price: "$39.99",
        description: "Cartier Watch - Men's Cartier Drive De Drive On eBay is a motivator, coach, and companion.",
        image: "../shirts/watch4.jpg",
        thumbnails: [
            "../shirts/watch4.jpg",
            "../shirts/c2.jpg",
            "../shirts/c3.jpg",
            "../shirts/c4.jpg"
        ],
        related: [31, 32, 33]
    }
};


// Handle thumbnails and main image
const mainImage = document.getElementById("main-image");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
        const newSrc = thumbnail.getAttribute("data-src");
        mainImage.src = newSrc;
    });
});
// Get the product ID from the URL
const params = new URLSearchParams(window.location.search);
const watchId = params.get("id");

// Load Product Details
if (watchs[watchId]) {
    const watch = watchs[watchId];
    document.getElementById("watch-name").textContent = watch.name;
    document.getElementById("watch-price").textContent = watch.price;
    document.getElementById("watch-description").textContent = watch.description;
    document.getElementById("main-image").src = watch.image;

      // Change the thumbnails based on selected product
      const thumbnails = document.querySelectorAll(".thumbnail");
      thumbnails.forEach((thumb, index) => {
          thumb.src = watch.thumbnails[index];
          thumb.setAttribute("data-src", watch.thumbnails[index]);
      });

    // Add product to cart on button click
    const addToCartButton = document.querySelector(".btn-cart-btn");
    addToCartButton.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({
            id: watchId,
            name: watch.name,
            price: watch.price,
            image: watch.image
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${watch.name} has been added to the cart!`);
    });

    // Add product to wishlist on button click
    const addToWishlistButton = document.querySelector(".btn-add-to-wishlist");
    addToWishlistButton.addEventListener("click", () => {
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        
        // Check if product is already in the wishlist
        const iswatchInWishlist = wishlist.some(item => item.id === watchId);

        if (iswatchInWishlist) {
            alert(`${watch.name} is already in your wishlist!`);
        } else {
            wishlist.push({
                id: watchId,
                name: watch.name,
                price: watch.price,
                image: watch.image
            });
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            alert(`${watch.name} has been added to your wishlist!`);
        }
    });

    // Load Related Products
    const relatedwatchsContainer = document.getElementById("related-watchs-container");
    watch.related.forEach(relatedId => {
    if (watchs[relatedId]) {
        const relatedwatch = watchs[relatedId];

        // Create a div for each related product
        const relatedDiv = document.createElement("div");
        relatedDiv.classList.add("related-watch");

        // Wrap the related product div with an <a> tag to make it clickable
        const watchLink = document.createElement("a");
        watchLink.href = `watch-product.html?id=${relatedId}`;
        watchLink.classList.add("related-watch-link");

        // Add the related product content inside the <a> tag
        watchLink.innerHTML = `
            <img src="${relatedwatch.image}" alt="${relatedwatch.name}" class="related-watch-image">
            <p class="related-watch-name">${relatedwatch.name}</p>
            <p class="related-watch-price">${relatedwatch.price}</p>
        `;

        // Append the <a> tag to the container div
        relatedDiv.appendChild(watchLink);

        // Append to the related products container
        relatedwatchsContainer.appendChild(relatedDiv);
    }
});

} else {
    document.getElementById("watch-name").textContent = "Product Not Found";
    document.querySelector(".watch-detail-content").style.display = "none";
}
