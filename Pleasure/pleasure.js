// pleasure.js - Shop page for Pleasure section with auto-swipe and arrow

const products = [
  {
    name: "Satisfyer Wand-er Woman (Wand Massager)",
    age: 18,
    desc: "Powerful wand, full-body massage + clitoral stimulation, USB-charged / mains style, body-safe design.",
    price: 9999,
    imgs: ["../Satisfyer1.jpg", "../Satisfyer2.jpg", "../Satisfyer3.jpg"],
  },
  {
    name: "PleasureX Bolt (Mini Vibrator)",
    age: 18,
    desc: "Compact, beginner-friendly, simple vibration, travel friendly, discreet.",
    price: 499,
    imgs: ["../Satisfyer4.jpg", "../Satisfyer5.jpg", "../Satisfyer6.jpg"],
  },
  {
    name: "PleasureX BlissWave",
    age: 18,
    desc: "More powerful than Bolt, ergonomic design, multiple vibration modes, body-safe material.",
    price: 990,
    imgs: ["../Satisfyer7.jpg", "../Satisfyer8.jpg", "../Satisfyer9.jpg"],
  },
  {
    name: "Protoys Egg Vibrator",
    age: 18,
    desc: "Egg-shaped, remote-controlled, soft silicon, multiple vibration modes.",
    price: 990,
    imgs: ["../Satisfyer10.jpg", "../Satisfyer11.jpg", "../Satisfyer12.jpg"],
  },
];

const shopContainer = document.getElementById("shopContainer");
const searchInput = document.getElementById("searchInput");
const popup = document.getElementById("popup");
let cart = JSON.parse(localStorage.getItem("pleasureCart")) || [];

// Display products
function displayProducts(list) {
  shopContainer.innerHTML = "";
  list.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    // Arrow hint
    const arrowHint = document.createElement("div");
    arrowHint.classList.add("swipe-hint");
    arrowHint.innerText = "⬅️ Swipe ➡️";

    // Image slider
    const slider = document.createElement("div");
    slider.classList.add("image-slider");
    const imgElement = document.createElement("img");
    imgElement.src = product.imgs[0];
    imgElement.alt = product.name;
    slider.appendChild(imgElement);

    // Auto swipe logic
    let index = 0;
    let direction = 1; // 1: forward, -1: backward
    setInterval(() => {
      index += direction;
      if (index >= product.imgs.length)
        (direction = -1), (index = product.imgs.length - 2);
      if (index < 0) (direction = 1), (index = 1);
      imgElement.src = product.imgs[index];
    }, 3000);

    // Product info
    const info = document.createElement("div");
    info.innerHTML = `
      <h3>${product.name}</h3>
      <p>Age: ${product.age}+</p>
      <p>${product.desc}</p>
      <p class="price">₹${product.price}</p>
      <button class="add-to-cart">Add to Cart</button>
      <button class="buy-now">Buy Now</button>
    `;

    // Add-to-cart
    info.querySelector(".add-to-cart").addEventListener("click", () => {
      cart.push(product);
      localStorage.setItem("pleasureCart", JSON.stringify(cart));
      showPopup("Added to Cart!");
    });

    // Buy-now
    info.querySelector(".buy-now").addEventListener("click", () => {
      cart.push(product);
      localStorage.setItem("pleasureCart", JSON.stringify(cart));
      window.location.href = "pleasurecheckout.html";
    });

    // Assemble card
    card.appendChild(arrowHint);
    card.appendChild(slider);
    card.appendChild(info);
    shopContainer.appendChild(card);
  });
}

// Popup
function showPopup(msg) {
  popup.innerText = msg;
  popup.classList.add("show");
  setTimeout(() => popup.classList.remove("show"), 2000);
}

// Search filter
searchInput.addEventListener("input", () => {
  const filter = searchInput.value.toLowerCase();
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(filter)
  );
  displayProducts(filtered);
});

// Initial display
displayProducts(products);
