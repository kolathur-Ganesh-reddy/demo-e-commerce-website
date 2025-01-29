const books = {

    1: {
        name: "To Kill a Mockingbird",
        price: "$150.00",
        description: "This is a high-quality product perfect for your needs.",
        image: "../shirts/book1.jpeg",
        related: [2, 3, 4] // Related products
    },
    2: {
        name: "The Land of Story",
        price: "$150.00",
        description: "This product is ideal for anyone looking for quality and affordability.",
        image: "../shirts/book2.jpeg",
        related: [1, 3, 4]
    },

    3: {
        name: "love",
        price: "$150.00",
        description: "This product is ideal for anyone looking for quality and affordability.",
        image: "../shirts/book3.jpeg",
        related: [1, 2, 4]
    },

    4: {
        name: "PRIDE & PREJUDICE",
        price: "$150.00",
        description: "This product is ideal for anyone looking for quality and affordability.",
        image: "../shirts/book4.jpeg",
        related: [1, 2, 3]
    },

};

const bookContainer = document.getElementById('book-container');
// Get the book ID from the URL
const params = new URLSearchParams(window.location.search);
const bookId = params.get("id");

// Load Book Details
if (books[bookId]) {
    const book = books[bookId];
    document.getElementById("book-name").textContent = book.name;
    document.getElementById("book-price").textContent = book.price;
    document.getElementById("book-description").textContent = book.description;
    document.getElementById("book-image").src = book.image;
   

    // add books cart details

    const addToCartButton = document.querySelector(".btn-cart-btn");
    addToCartButton.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({
        id: bookId, // Replace 'clothingId' with 'bookId'
        name: book.name, // Replace 'clothing.name' with 'book.name'
        price: book.price, // Replace 'clothing.price' with 'book.price'
        image: book.image // Replace 'clothing.image' with 'book.image'
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${book.name} has been added to the cart!`); // Replace 'clothing.name' with 'book.name'
});
   
    // Add book to wishlist on button click
    const addToWishlistButton = document.querySelector(".btn-add-to-wishlist");
    addToWishlistButton.addEventListener("click", () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    
    // Check if book is already in the wishlist
    const isBookInWishlist = wishlist.some(item => item.id === bookId);

    if (isBookInWishlist) {
        alert(`${book.name} is already in your wishlist!`);
    } else {
        wishlist.push({
            id: bookId,
            name: book.name,
            price: book.price,
            image: book.image
        });
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert(`${book.name} has been added to your wishlist!`);
    }
});

  // related product 
const relatedBooksContainer = document.getElementById("related-books-container");
book.related.forEach(relatedId => {
    if (books[relatedId]) {
        const relatedBook = books[relatedId];

        // Create a div for each related book item
        const relatedDiv = document.createElement("div");
        relatedDiv.classList.add("related-book");

        // Wrap the related book item div with an <a> tag to make it clickable
        const bookLink = document.createElement("a");
        bookLink.href = `books-product.html?id=${relatedId}`;
        bookLink.classList.add("related-book-link");

        // Add the related book content inside the <a> tag
        bookLink.innerHTML = `
            <img src="${relatedBook.image}" alt="${relatedBook.title}" class="related-book-image">
            <p class="related-book-title">${relatedBook.title}</p>
            <p class="related-book-price">${relatedBook.price}</p>
        `;

        // Append the <a> tag to the container div
        relatedDiv.appendChild(bookLink);

        // Append to the related books container
        relatedBooksContainer.appendChild(relatedDiv);
    }
});

} else {
    document.getElementById("book-name").textContent = "Book Not Found";
    document.querySelector(".book-detail-content").style.display = "none";
}

// Show "Related Clothings" when scrolling down
const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});