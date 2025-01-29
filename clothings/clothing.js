// Clothing Data
const clothings = {
    9: {
        name: "Sweart Shirt",
        price: "$150.00",
        description: "Top-notch quality at an affordable price.",
        image: "../shirts/mens sweartshirt7.avif",
        thumbnails: [
            "../shirts/mens sweartshirt7.avif",
            "../shirts/Loose Fit Sweatshirt2.avif",
            "../shirts/Loose Fit Sweatshirt3.avif",
            "../shirts/Loose Fit Sweatshirt4.avif"
        ],
        related: [10, 11, 12, 13, 14, 15, 16]
    },
    10: {
        name: "Black hoodie",
        price: "$150.00",
        description: "Top-notch quality at an affordable price.",
        image: "../shirts/hoodie1.avif",
        thumbnails: [
            "../shirts/hoodie1.avif",
            "../shirts/blackhoodie2.avif",
            "../shirts/blackhoodie3.avif",
            "../shirts/blackhoodie4.avif"
        ],
        related: [9, 11, 12, 13, 14, 15, 16]
    },
    11: {
        name: "Black Sweart Shirt",
        price: "$150.00",
        description: "Top-notch quality at an affordable price.",
        image: "../shirts/men sweatshirt2.avif",
        thumbnails: [
            "../shirts/men sweatshirt2.avif",
            "../shirts/Black Sweart Shirt2.avif",
            "../shirts/Black Sweart Shirt3.avif",
            "../shirts/Black Sweart Shirt4.avif"
        ],
        related: [9, 10, 12, 13, 14, 15, 16]
    },
    12: {
        name: "Sweart Shirt",
        price: "$150.00",
        description: "Top-notch quality at an affordable price.",
        image: "../shirts/mens sweartshirt8.avif",
        thumbnails: [
            "../shirts/mens sweartshirt8.avif",
            "../shirts/Loose Fit Sweatshirt a2.avif",
            "../shirts/Loose Fit Sweatshirt a3.avif",
            "../shirts/Loose Fit Sweatshirt a4.avif"
        ],
        related: [9, 10, 11, 13, 14, 15, 16]
    },
    13: {
        name: "Sweart Shirt",
        price: "$150.00",
        description: "Top-notch quality at an affordable price.",
        image: "../shirts/men sweatshirt4.avif",
        thumbnails: [
            "../shirts/men sweatshirt4.avif",
            "../shirts/Sweatshirt s2.avif",
            "../shirts/Sweatshirt s3.avif",
            "../shirts/Sweatshirt s4.avif"
        ],
        related: [9, 10, 11, 12, 14, 15, 16]
    },
    14: {
        name: "Green Hoodie",
        price: "$150.00",
        description: "Top-notch quality at an affordable price.",
        image: "../shirts/hoodie3.avif",
        thumbnails: [
            "../shirts/hoodie3.avif",
            "../shirts/greenhoodie2.jpg",
            "../shirts/greenhoodie3.avif",
            "../shirts/greenhoodie4.avif"
        ],
        related: [9, 10, 11, 12, 13, 15, 16]
    },
    15: {
        name: "Brown Sweart Shirt",
        price: "$150.00",
        description: "Top-notch quality at an affordable price.",
        image: "../shirts/mens sweartshirt6.avif",
        thumbnails: [
            "../shirts/mens sweartshirt6.avif",
            "../shirts/Brown Sweart Shirt2.avif",
            "../shirts/Brown Sweart Shirt3.avif",
            "../shirts/Brown Sweart Shirt4.avif"
        ],
        related: [9, 10, 11, 12, 13, 14, 16]
    },
    16: {
        name: "Green Sweart Shirt",
        price: "$150.00",
        description: "Top-notch quality at an affordable price.",
        image: "../shirts/mens sweartshirt1.jpeg",
        thumbnails: [
            "../shirts/mens sweartshirt1.jpeg",
            "../shirts/green Sweatshirt2.avif",
            "../shirts/mens sweartshirt1.jpeg",
            "../shirts/green Sweatshirt2.avif",
        ],
        related: [9, 10, 11, 12, 13, 14, 15]
    },
    // Other clothing items here...
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
// Get the clothing ID from the URL
const params = new URLSearchParams(window.location.search);
const clothingId = params.get("id");

// Load Clothing Details
if (clothings[clothingId]) {
    const clothing = clothings[clothingId];
    document.getElementById("clothing-name").textContent = clothing.name;
    document.getElementById("clothing-price").textContent = clothing.price;
    document.getElementById("clothing-description").textContent = clothing.description;
    document.getElementById("main-image").src = clothing.image;

     // Change the thumbnails based on selected product
     const thumbnails = document.querySelectorAll(".thumbnail");
     thumbnails.forEach((thumb, index) => {
         thumb.src = clothing.thumbnails[index];
         thumb.setAttribute("data-src", clothing.thumbnails[index]);
     });
     
    // clothing cart details 
    const addToCartButton = document.querySelector(".btn-cart-btn");
    addToCartButton.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({
        id: clothingId, // Replace 'electronicId' with 'clothingId'
        name: clothing.name, // Replace 'electronic.name' with 'clothing.name'
        price: clothing.price, // Replace 'electronic.price' with 'clothing.price'
        image: clothing.image // Replace 'electronic.image' with 'clothing.image'
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${clothing.name} has been added to the cart!`); // Replace 'electronic.name' with 'clothing.name'
});

    // Add clothing to wishlist on button click
    const addToWishlistButton = document.querySelector(".btn-add-to-wishlist");
    addToWishlistButton.addEventListener("click", () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    
    // Check if clothing is already in the wishlist
    const isClothingInWishlist = wishlist.some(item => item.id === clothingId);

    if (isClothingInWishlist) {
        alert(`${clothing.name} is already in your wishlist!`);
    } else {
        wishlist.push({
            id: clothingId,
            name: clothing.name,
            price: clothing.price,
            image: clothing.image
        });
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert(`${clothing.name} has been added to your wishlist!`);
    }
});

   // related product 
    const relatedClothingsContainer = document.getElementById("related-clothings-container");
    clothing.related.forEach(relatedId => {
    if (clothings[relatedId]) {
        const relatedClothing = clothings[relatedId];

        // Create a div for each related clothing item
        const relatedDiv = document.createElement("div");
        relatedDiv.classList.add("related-clothing");

        // Wrap the related clothing item div with an <a> tag to make it clickable
        const clothingLink = document.createElement("a");
        clothingLink.href = `clothing-product.html?id=${relatedId}`;
        clothingLink.classList.add("related-clothing-link");

        // Add the related clothing content inside the <a> tag
        clothingLink.innerHTML = `
            <img src="${relatedClothing.image}" alt="${relatedClothing.name}" class="related-clothing-image">
            <p class="related-clothing-name">${relatedClothing.name}</p>
            <p class="related-clothing-price">${relatedClothing.price}</p>
        `;

        // Append the <a> tag to the container div
        relatedDiv.appendChild(clothingLink);

        // Append to the related clothing container
        relatedClothingsContainer.appendChild(relatedDiv);
    }
});

} else {
    document.getElementById("clothing-name").textContent = "Clothing Not Found";
    document.querySelector(".clothing-detail-content").style.display = "none";
}

// Show "Related Clothings" when scrolling down
const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});