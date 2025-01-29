const homes = {

    21: {
        name: "Front Load Washing Machine",
        price: "$150.00",
        description: "Capacity: 7kg | Energy Efficiency: A++ | Color: Silver",
        image: "../shirts/home.jpeg",
        related: [22, 23, 24]
    },
    22: {
        name: "Double Door Refrigerator",
        price: "$150.00",
        description: "Capacity: 330L | Energy Rating: 4 Star | Color: Black",
        image: "../shirts/home2.jpeg",
        related: [21, 23, 24]
    },
    23: {
        name: "Convection Microwave Oven",
        price: "$150.00",
        description: "Power: 1200W | Features: Auto Cook, Grill | Capacity: 25L",
        image: "../shirts/home3.jpeg",
        related: [21, 22, 24]
    },
    24: {
        name: "Split Air Conditioner",
        price: "$150.00",
        description: "Cooling Capacity: 1.5 Ton | Energy Efficiency: 5 Star | Color: White",
        image: "../shirts/home4.jpeg",
        related: [21, 22, 23]
    },
   
};


const homeContainer = document.getElementById('home-container');
// Get the home ID from the URL
const params = new URLSearchParams(window.location.search);
const homeId = params.get("id");

// Load Home Details
if (homes[homeId]) {
    const home = homes[homeId];
    document.getElementById("home-name").textContent = home.name;
    document.getElementById("home-price").textContent = home.price;
    document.getElementById("home-description").textContent = home.description;
    document.getElementById("home-image").src = home.image;

    
    // Add product to cart on button click
    const addToCartButton = document.querySelector(".btn-cart-btn");
    addToCartButton.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({
            id: homeId, // Replace 'productId' with 'homeId'
            name: home.name, // Replace 'product.name' with 'home.name'
            price: home.price, // Replace 'product.price' with 'home.price'
            image: home.image // Replace 'product.image' with 'home.image'
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${home.name} has been added to the cart!`); // Replace 'product.name' with 'home.name'
    });
    
    // Add home to wishlist on button click
    const addToWishlistButton = document.querySelector(".btn-add-to-wishlist");
    addToWishlistButton.addEventListener("click", () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    
    // Check if home is already in the wishlist
    const isHomeInWishlist = wishlist.some(item => item.id === homeId);

    if (isHomeInWishlist) {
        alert(`${home.name} is already in your wishlist!`);
    } else {
        wishlist.push({
            id: homeId,
            name: home.name,
            price: home.price,
            image: home.image
        });
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert(`${home.name} has been added to your wishlist!`);
    }
});
      
     // related product 
    const relatedHomesContainer = document.getElementById("related-homes-container");
    home.related.forEach(relatedId => {
    if (homes[relatedId]) {
        const relatedHome = homes[relatedId];

        // Create a div for each related home
        const relatedDiv = document.createElement("div");
        relatedDiv.classList.add("related-home");

        // Wrap the related home div with an <a> tag to make it clickable
        const homeLink = document.createElement("a");
        homeLink.href = `home-product.html?id=${relatedId}`;
        homeLink.classList.add("related-home-link");

        // Add the related home content inside the <a> tag
        homeLink.innerHTML = `
            <img src="${relatedHome.image}" alt="${relatedHome.name}" class="related-home-image">
            <p class="related-home-name">${relatedHome.name}</p>
            <p class="related-home-price">${relatedHome.price}</p>
        `;

        // Append the <a> tag to the container div
        relatedDiv.appendChild(homeLink);

        // Append to the related homes container
        relatedHomesContainer.appendChild(relatedDiv);
    }
});

} else {
    document.getElementById("home-name").textContent = "Home Not Found";
    document.querySelector(".home-detail-content").style.display = "none";
}


const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});