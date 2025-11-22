// menshop.js - Handles Men's Shop: display products, search, add-to-cart, buy-now

const products = [
  {
    name: "Durex Extra Time",
    age: +18,
    desc: "Extra time, stamina improve, reliable latex quality",
    price: 220,
    img: "durex.jpg",
  },
  {
    name: "Durex invisible/Ultra thin",
    age: +18,
    desc: "High sensitive, electronic testing",
    price: 225,
    img: "doll_japan.jpg",
  },
  {
    name: "KamaSutra Superthin",
    age: +18,
    desc: "Provide longlast varient, feel natural superthin varient",
    price: 150,
    img: "doll_russia.jpg",
  },
  {
    name: "Skore ZigZag/ flavored",
    age: +18,
    desc: "Unique texture, zigzag desine, skore flavore range",
    price: 153,
    img: "doll_uk.jpg",
  },
  {
    name: "Bleu(vegan/hypoallergenic)",
    age: +18,
    desc: "Latex ethically sourced. low protein level, low chemical- nasties.",
    price: 249,
    img: "doll_brazil.jpg",
  },
];

const shopContainer = document.getElementById("shopContainer");
const searchInput = document.getElementById("searchInput");
const popup = document.getElementById("popup");
let cart = JSON.parse(localStorage.getItem("menCart")) || [];

function displayProducts(list) {
  shopContainer.innerHTML = "";
  list.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src='${product.img}' alt='${product.name}'>
      <h3>${product.name}</h3>
      <p>Age: ${product.age}+</p>
      <p>${product.desc}</p>
      <p class='price'>₹${product.price}</p>
      <button class='add-to-cart'>Add to Cart</button>
      <button class='buy-now'>Buy Now</button>
    `;

    // Add to Cart
    card.querySelector(".add-to-cart").addEventListener("click", () => {
      cart.push(product);
      localStorage.setItem("menCart", JSON.stringify(cart));
      showPopup("Added to Cart!");
    });

    // Buy Now
    card.querySelector(".buy-now").addEventListener("click", () => {
      cart.push(product);
      localStorage.setItem("menCart", JSON.stringify(cart));
      window.location.href = "mencheckout.html";
    });

    shopContainer.appendChild(card);
  });
}

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
