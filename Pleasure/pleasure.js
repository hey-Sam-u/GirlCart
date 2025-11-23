// pleasure.js - Shop page for Pleasure section
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
    desc: "on PleasureX Compact, beginner-friendly, simple vibration, travel friendly, discreet.",
    price: 499,
    imgs: ["../Satisfyer4.jpg", "../Satisfyer5.jpg", "../Satisfyer6.jpg"],
  },
  {
    name: "PleasureX BlissWave",
    age: 18,
    desc: "at PleasureX More powerful than Bolt, ergonomic design, multiple vibration modes, body-safe material.",
    price: 990,
    imgs: ["../Satisfyer7.jpg", "../Satisfyer8.jpg", "../Satisfyer9.jpg"],
  },

  {
    name: "Protoys Egg Vibrator",
    age: 18,
    desc: "(according to Protoys India) Egg-shaped, remote-controlled (ya wireless), soft silicon, multiple vibration modes.",
    price: 990,
    imgs: ["../Satisfyer10.jpg", "../Satisfyer11.jpg", "../Satisfyer12.jpg"],
  },


  {
    name: "Freaky Fun Satisfyer Pro Pressure-Wave ",
    age: 18,
    desc: "(in Freaky Fun) Uses air-pulse / suction technology for clitoral stim — very different feel than vibrator.",
    price: 4499,
    imgs: ["../Satisfyer13.jpg", "../Satisfyer14.jpg", "../Satisfyer15.jpg"],
  },

  {
    name: "Fifty Shades of Grey Flickering Tongue Vibrator",
    age: 18,
    desc: "(LoveDepot) Tongue-like design, flickers / licks, very sensual / realistic feeling, medical-grade silicone.",
    price: 5169,
    imgs: ["../Satisfyer4", "../Satisfyer8.jpg", "../Satisfyer10.jpg"],
  },

  {
    name: " Lovely Toys 30-Mode Silicone Vibrator",
    age: 18,
    desc: "(according to Jask Wellness) 30 vibration modes, good length, soft silicone, USB charging, strong motor.",
    price: 3498,
    imgs: ["../Satisfyer3.jpg", "../Satisfyer7.jpg", "../Satisfyer11.jpg"],
  },
];

const shopContainer = document.getElementById("shopContainer");
const searchInput = document.getElementById("searchInput");
const popup = document.getElementById("popup");
let cart = JSON.parse(localStorage.getItem("pleasureCart")) || [];

// Function to display products
function displayProducts(list) {
  shopContainer.innerHTML = "";
  list.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    // Create swipeable image slider
    let sliderHTML = `<div class="image-slider">`;
    product.imgs.forEach((img) => {
      sliderHTML += `<img src="${img}" alt="${product.name}">`;
    });
    sliderHTML += `</div>`;

    card.innerHTML = `
        ${sliderHTML}
        <h3>${product.name}</h3>
        <p>Age: ${product.age}+</p>
        <p>${product.desc}</p>
        <p class="price">₹${product.price}</p>
        <button class="add-to-cart">Add to Cart</button>
        <button class="buy-now">Buy Now</button>
      `;

    // Add to Cart functionality
    card.querySelector(".add-to-cart").addEventListener("click", () => {
      cart.push(product);
      localStorage.setItem("pleasureCart", JSON.stringify(cart));
      showPopup("Added to Cart!");
    });

    // Buy Now functionality
    card.querySelector(".buy-now").addEventListener("click", () => {
      cart.push(product);
      localStorage.setItem("pleasureCart", JSON.stringify(cart));
      window.location.href = "pleasurecheckout.html";
    });

    shopContainer.appendChild(card);
  });
}

// Show popup message
function showPopup(msg) {
  popup.innerText = msg;
  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.remove("show");
  }, 2000);
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
