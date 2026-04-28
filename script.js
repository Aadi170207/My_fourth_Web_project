const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="deleteTask(${index})">❌</button>`;
    taskList.appendChild(li);
  });
}

function addTask() {
  if (taskInput.value === "") return;
  tasks.push(taskInput.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

addTaskBtn.addEventListener("click", addTask);
renderTasks();
const products = [
  { name: "Headphones", price: 2000, rating: 4.5, category: "electronics" },
  { name: "Shoes", price: 1500, rating: 4.2, category: "fashion" },
  { name: "Smartwatch", price: 3000, rating: 4.8, category: "electronics" }
];

const productContainer = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");

function renderProducts(list) {
  productContainer.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `<h4>${p.name}</h4><p>₹${p.price}</p><p>⭐ ${p.rating}</p>`;
    productContainer.appendChild(div);
  });
}

function updateProducts() {
  let filtered = [...products];
  if (categoryFilter.value !== "all") {
    filtered = filtered.filter(p => p.category === categoryFilter.value);
  }

  filtered.sort((a, b) => sortOption.value === "price" ? a.price - b.price : b.rating - a.rating);

  renderProducts(filtered);
}

categoryFilter.addEventListener("change", updateProducts);
sortOption.addEventListener("change", updateProducts);

renderProducts(products);
const products = [
  { name: "Headphones", price: 1800, rating: 4.5, category: "electronics" },
  { name: "Shoes", price: 2500, rating: 4.2, category: "fashion" },
  { name: "Smartwatch", price: 3200, rating: 4.8, category: "electronics" },
  { name: "T-Shirt", price: 1200, rating: 4.1, category: "fashion" }
];

const productContainer = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortOption = document.getElementById("sortOption");

function renderProducts(list) {
  productContainer.innerHTML = "";

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h4>${product.name}</h4>
      <p>Price: ₹${product.price}</p>
      <p>Rating: ⭐ ${product.rating}</p>
    `;
    productContainer.appendChild(card);
  });
}

function updateProducts() {
  let filtered = [...products];

  if (categoryFilter.value !== "all") {
    filtered = filtered.filter(p => p.category === categoryFilter.value);
  }

  if (priceFilter.value === "low") {
    filtered = filtered.filter(p => p.price < 2000);
  } else if (priceFilter.value === "high") {
    filtered = filtered.filter(p => p.price >= 2000);
  }

  if (sortOption.value === "price") {
    filtered.sort((a, b) => a.price - b.price);
  } else {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(filtered);
}

categoryFilter.addEventListener("change", updateProducts);
priceFilter.addEventListener("change", updateProducts);
sortOption.addEventListener("change", updateProducts);

renderProducts(products);