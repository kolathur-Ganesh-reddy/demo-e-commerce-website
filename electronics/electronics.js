const electronics = {
    15: {
        name: "IPhone 13 Pro",
        price: "$150.00",
        description: "This product is ideal for anyone looking for quality and affordability.",
        image: "../shirts/electronic1.jpeg",
        thumbnails: [
            "../shirts/electronic1.jpeg",
            "../shirts/apple2.jpg",
            "../shirts/apple3.jpg",
            "../shirts/apple4.jpg"
        ],
        related: [16, 17, 18, 19, 20]
    },
    16: {
        name: "NOISE Wireless Headphones",
        price: "$150.00",
        description: "This product is ideal for anyone looking for quality and affordability.",
        image: "../shirts/electronic2.webp",
        thumbnails: [
            "../shirts/electronic2.webp",
            "../shirts/headphones1.jpg",
            "../shirts/headphones2.jpg",
            "../shirts/headphones3.jpg"
        ],
        related: [15, 17, 18, 19, 20]
    },
    17: {
        name: "Smartwatch Ultra",
        price: "$150.00",
        description: "This product is ideal for anyone looking for quality and affordability.",
        image: "../shirts/electronic3.jpeg",
        thumbnails: [
            "../shirts/electronic3.jpeg",
            "../shirts/samsung2.jpg",
            "../shirts/samsung3.jpg",
            "../shirts/samsung4.avif"
        ],
        related: [15, 16, 18, 19, 20]
    },
    18: {
        name: "Gaming Laptop",
        price: "$150.00",
        description: "This product is ideal for anyone looking for quality and affordability.",
        image: "../shirts/electronic4.webp",
        thumbnails: [
            "../shirts/electronic4.webp",
            "../shirts/Gaming Laptop2.jpg",
            "../shirts/Gaming Laptop3.webp",
            "../shirts/Gaming Laptop4.jpg"
        ],
        related: [15, 16, 17, 19, 20]
    },
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

// Get the electronic ID from the URL
const params = new URLSearchParams(window.location.search);
const electronicId = params.get("id");

// Load Electronic Details
if (electronics[electronicId]) {
    const electronic = electronics[electronicId];
    document.getElementById("electronic-name").textContent = electronic.name;
    document.getElementById("electronic-price").textContent = electronic.price;
    document.getElementById("electronic-description").textContent = electronic.description;
    document.getElementById("main-image").src = electronic.image;

    // Change the thumbnails based on selected product
    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach((thumb, index) => {
        thumb.src = electronic.thumbnails[index];
        thumb.setAttribute("data-src", electronic.thumbnails[index]);
    });

    // Add product to cart
    const addToCartButton = document.querySelector(".btn-cart-btn");
    addToCartButton.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({
            id: electronicId,
            name: electronic.name,
            price: electronic.price,
            image: electronic.image
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${electronic.name} has been added to the cart!`);
    });

    // Add to wishlist
    const addToWishlistButton = document.querySelector(".btn-add-to-wishlist");
    addToWishlistButton.addEventListener("click", () => {
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        const isInWishlist = wishlist.some(item => item.id === electronicId);

        if (isInWishlist) {
            alert(`${electronic.name} is already in your wishlist!`);
        } else {
            wishlist.push({
                id: electronicId,
                name: electronic.name,
                price: electronic.price,
                image: electronic.image
            });
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            alert(`${electronic.name} has been added to your wishlist!`);
        }
    });

    // Load related products
    const relatedElectronicsContainer = document.getElementById("related-electronics-container");
    electronic.related.forEach(relatedId => {
        if (electronics[relatedId]) {
            const relatedElectronic = electronics[relatedId];
            const relatedDiv = document.createElement("div");
            relatedDiv.classList.add("related-electronic");
            const electronicLink = document.createElement("a");
            electronicLink.href = `electronic-product.html?id=${relatedId}`;
            electronicLink.classList.add("related-electronic-link");
            electronicLink.innerHTML = `
                <img src="${relatedElectronic.image}" alt="${relatedElectronic.name}" class="related-electronic-image">
                <p class="related-electronic-name">${relatedElectronic.name}</p>
                <p class="related-electronic-price">${relatedElectronic.price}</p>
            `;
            relatedDiv.appendChild(electronicLink);
            relatedElectronicsContainer.appendChild(relatedDiv);
        }
    });
} else {
    document.getElementById("electronic-container").innerHTML = "<p>Product not found.</p>";
}

const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});

