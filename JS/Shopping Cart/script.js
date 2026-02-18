const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Mouse", price: 20 },
  { id: 3, name: "Keyboard", price: 40 },
  { id: 4, name: "Headphone", price: 60 }
];

const productsContainer = document.getElementById("products");
const cartList = document.getElementById("cartList");
const totalEl = document.getElementById("total");

let cart = [];

// Render Products
function renderProducts() {
  productsContainer.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <span>${product.name} - $${product.price}</span>
      <button onclick="addToCart(${product.id})">Add</button>
    `;

    productsContainer.appendChild(div);
  });
}

// Add to Cart
function addToCart(id) {
  const product = products.find(p => p.id === id);

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
}

// Remove from Cart
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
}

// Render Cart
function renderCart() {
  cartList.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name} x ${item.quantity} - $${item.price * item.quantity}</span>
      <button class="remove-btn" onclick="removeFromCart(${item.id})">X</button>
    `;

    cartList.appendChild(li);
  });

  totalEl.textContent = total;
}

renderProducts();
