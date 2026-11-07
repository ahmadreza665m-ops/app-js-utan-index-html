const products = [
  { namn: "hörlurar", category: "elektronik", price: 1000, icon: "2🎧" },
  { namn: "hoodise", category: "kläder", price: 500, icon: "👕" },
  { namn: "tangentbord", category: "elektronik", price: 1500, icon: "⌨️" },
  { namn: "keps", category: "kläder", price: 600, icon: "🧢" },
  { namn: "mus", category: "elektronik", price: 600, icon: "🖱️" },
];

const productscontainer = document.getElementById("products-container");
const categoryselect = document.getElementById("filter-category");
const sortselect = document.getElementById("sort-price");
const discountbtn = document.getElementById("btn-discount");

let hasdiscount = false;

const updatelist = () => {
  let result = [...products];

  result = result.filter((item) => {
    if (categoryselect.value === item.category || categoryselect.value === "alla") {
      return true;
    }
    
  });
};

if (sortselect.value === "low-high") {
  result.sort((a, b) => a.price - b.price);
} else if (sortselect.value === "high-low") {
  result.sort((a, b) => b.price - a.price);
}

if (hasdiscount) {
  result = result.map((item) => {
    return {
      name: item.name,
      category: item.category,
      price: item.price * 0.8,
      icon:item.icon,
    };
  });

  render(result);
}

const render = (result) => {
  productscontainer.innerHTML = "";

  result.forEach((product) => {
    const card = document.createElement("div");
    card.classname = "product-card";

    card.innerHTML = `
        <div class="product-icon">${product.icon}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-category">${product.category}</div>
        <div class="product-price">${product.price}</div>

        `;
    productscontainer.appendChild(card);
  });
};

categoryselect.addEventListener("change", updatelist);
sortselect.addEventListener("change", updatelist);
discountbtn.addEventListener("click", () => {
  hasdiscount = !hasdiscount;

  if (hasdiscount) {
    discountbtn.textContent = "utan rabatt";
  } else {
    discountbtn.textContent = " ge 20% rabatt";
  }
  updatelist();
});
updatelist();
