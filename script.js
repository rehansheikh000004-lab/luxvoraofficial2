// Example products
const products = [
  { id: 1, name: "Luxury Watch", price: 250, img: "https://via.placeholder.com/220x150?text=Watch" },
  { id: 2, name: "Designer Shoes", price: 180, img: "https://via.placeholder.com/220x150?text=Shoes" },
  { id: 3, name: "Premium Jacket", price: 320, img: "https://via.placeholder.com/220x150?text=Jacket" },
  { id: 4, name: "Smartphone", price: 699, img: "https://via.placeholder.com/220x150?text=Phone" },
];

const productContainer = document.getElementById("products");
const cartCount = document.getElementById("cart-count");
let cart = [];

// Load products dynamically
function loadProducts() {
  products.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productContainer.appendChild(div);
  });
}

// Add to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  cartCount.textContent = cart.length;
  alert(`${product.name} added to cart!`);
}

loadProducts();
