// Sample data for electronics, clothing, books, home appliances, and watches
const electronics = [
    { id: 15, name: "IPhone 13 Pro", price: "$150.00", image: "../shirts/electronic1.jpeg" },
    { id: 16, name: "Headphones", price: "$150.00", image: "../shirts/electronic2.webp" },
    { id: 17, name: "Smartwatch Ultra", price: "$150.00", image: "../shirts/electronic3.jpeg" },
    { id: 18, name: "Gaming Laptop", price: "$150.00", image: "../shirts/electronic4.webp" },
];

const clothings = [
    { id: 9, name: "Sweat Shirt", price: "$150.00", image: "../shirts/mens sweartshirt7.avif" },
    { id: 10, name: "Black hoodie", price: "$150.00", image: "../shirts/hoodie1.avif" },
    { id: 11, name: "Black Sweat Shirt", price: "$150.00", image: "../shirts/men sweatshirt2.avif" },
    { id: 12, name: "Sweat Shirt", price: "$150.00", image: "../shirts/mens sweartshirt8.avif" },
    { id: 13, name: "Sweat Shirt", price: "$150.00", image: "../shirts/men sweatshirt4.avif" },
    { id: 14, name: "Green Hoodie", price: "$150.00", image: "../shirts/hoodie3.avif" },
    { id: 15, name: "Brown Sweat Shirt", price: "$150.00", image: "../shirts/mens sweartshirt6.avif" },
    { id: 16, name: "Green Sweat Shirt", price: "$150.00", image: "../shirts/mens sweartshirt1.jpeg" },
];

const books = [
    { id: 1, name: "To Kill a Mockingbird", price: "$150.00", image: "../shirts/book1.jpeg" },
    { id: 2, name: "The Land of Story", price: "$150.00", image: "../shirts/book2.jpeg" },
    { id: 3, name: "Love", price: "$150.00", image: "../shirts/book3.jpeg" },
    { id: 4, name: "PRIDE & PREJUDICE", price: "$150.00", image: "../shirts/book4.jpeg" },
];

const homes = [
    { id: 21, name: "Front Load Washing Machine", price: "$150.00", image: "../shirts/home.jpeg" },
    { id: 22, name: "Double Door Refrigerator", price: "$150.00", image: "../shirts/home2.jpeg" },
    { id: 23, name: "Convection Microwave Oven", price: "$150.00", image: "../shirts/home3.jpeg" },
    { id: 24, name: "Split Air Conditioner", price: "$150.00", image: "../shirts/home4.jpeg" },
];

const watches = [
    { id: 31, name: "Samsung Galaxy Watch Active2 LTE", price: "$119.99", image: "../shirts/watch1.jpg" },
    { id: 32, name: "Apple Smartwatch and Accessories", price: "$259.99", image: "../shirts/watch2.avif" },
    { id: 33, name: "Smartwatch Stainless Steel - Silver", price: "$90.99", image: "../shirts/watch3.avif" },
    { id: 34, name: "Cartier Watch - Men's Cartier Drive", price: "$39.99", image: "../shirts/watch4.jpg" },
];

// Get the search query from the URL
const params = new URLSearchParams(window.location.search);
const query = params.get("query") ? params.get("query").toLowerCase() : '';

// Flag to check if any product was found
let anyProductFound = false;

// Function to render product cards with dynamic links for different categories
const renderCategoryProducts = (products, category, categoryType) => {
    const resultsSection = document.getElementById("results");

    // Filter products by search query
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query)
    );

    // Display results for this category
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productCard = `
                <div class="${category}-card">
                    <a href="../${category}/${categoryType}-product.html?id=${product.id}">
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>${product.price}</p>
                    </a>
                </div>
            `;
            resultsSection.innerHTML += productCard;
        });
        anyProductFound = true; // Set flag to true if products are found
    }
};

// Clear previous results
const resultsSection = document.getElementById("results");
resultsSection.innerHTML = ''; 

// Render products for each category
renderCategoryProducts(electronics, "electronics", "electronic");
renderCategoryProducts(clothings, "clothings", "clothing");
renderCategoryProducts(books, "books", "books");
renderCategoryProducts(homes, "home-appliances", "home");
renderCategoryProducts(watches, "watchs", "watch");

// If no products were found in any category, display a general "No items found"
if (!anyProductFound) {
    resultsSection.innerHTML = `<p>No items found for "${query}".</p>`;
}
