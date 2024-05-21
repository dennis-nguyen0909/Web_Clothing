let products = null;

// Fetch product data from the JSON file
fetch("product.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    console.log("product", products);
    loadProduct(); // Call the function to load products after fetching the data
  })
  .catch((error) => {
    console.error("Error fetching product data:", error);
  });

// Select the container where mini products will be displayed
let listProducts = document.querySelector(".row.products.mini");

const loadProduct = () => {
  if (!products) return; // Check if products are loaded

  products.forEach((product) => {
    // Create HTML for each product
    const productHTML = `
        <div class="item">
          <div class="media">
            <div class="thumbnail object-cover">
              <a href="page-single.html?id=${product.id}">
                <img src="${product.url}" alt="${product.name}">
              </a>
            </div>
            <div class="hoverable">
              <ul>
                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                <li><a href="#"><i class="ri-eye-line"></i></a></li>
                <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
              </ul>
            </div>
            <div class="discount circle flexcenter">
              <span>${product.discount}%</span>
            </div>
          </div>
          <div class="content">
            <h3 class="main-links">
              <a href="page-single.html?id=${product.id}">${product.name}</a>
            </h3>
            <div class="rating">
              <div class="stars"></div>
              <span class="mini-text">(${product.rating})</span>
            </div>
            <div class="price">
              <span class="current">$${product.price.current}</span>
              <span class="normal mini-text">$${product.price.normal}</span>
            </div>
            <div class="mini-text">
              <p>${product.sold} sold</p>
              <p>${product.shipping}</p>
              ${
                product.stock
                  ? `<p class="stock-danger">Stock: ${product.stock} left!</p>`
                  : ""
              }
            </div>
          </div>
        </div>
      `;
    listProducts.innerHTML += productHTML;
  });
};
