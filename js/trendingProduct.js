let products = null;
// Fetch product data from the JSON file
fetch("product.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    console.log("product", data);
    loadProduct(); // Call the function to load products after fetching the data
  })
  .catch((error) => {
    console.error("Error fetching product data:", error);
  });

// Select the container where mini products will be displayed
let listProducts1 = document.querySelectorAll(".row.products.mini")[0];
let listProducts2 = document.querySelectorAll(".row.products.mini")[1];
let featureProduct =document.querySelector(".products.main.flexwrap");
const loadProduct = () => {
  if (!products && !featureProducts) return;
  
  products[0].data.filter((item)=>item.id<=4).forEach((product) => {
    // Create HTML for each product
    const productHTML = `
        <div class="item">
          <div class="media">
            <div class="thumbnail object-cover">
              <a href="page-single.html?id=${product.id}&name=${products[0].name}">
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
    listProducts1.innerHTML += productHTML;
  });

  products[0].data.filter((item)=>item.id>4).forEach((product) => {
    const productHTML2 = `
        <div class="item">
          <div class="media">
            <div class="thumbnail object-cover">
              <a href="page-single.html?id=${product.id}&name=${products[0].name}">
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
    listProducts2.innerHTML+=productHTML2;
  });
console.log(products[1].name)
console.log(products[0].name)
  products[1].data.forEach((item)=>{
    const html=`
            <div class="item">
            <div class="media">
                <div class="thumbnail object-cover">
                    <a href="page-single.html?id=${item.id}&name=${products[1].name}">
                        <img src=${item.url} alt="">
                    </a>
                </div>
                <div class="hoverable">
                    <ul>
                        <li class="active"><a href=""><i class="ri-heart-line"></i></a></li>
                        <li><a href=""><i class="ri-eye-line"></i></a></li>
                        <li><a href=""><i class="ri-shuffle-line"></i></a></li>
                    </ul>
                </div>
                <div class="discount circle flexcenter">
                    <span>${item.discount}%</span>
                </div>
            </div>
            <div class="content">
                <div class="rating">
                    <div class="stars"></div>
                    <span class="mini-text">(${item.rating})</span>
                </div>
                <h3 class="main-links">
                    <a href="#">${item.name}</a>
                </h3>
                <div class="price">
                    <span class="current">${item.price.current}</span>
                    <span class="normal mini-text">${item.price.normal}</span>
                </div>
            </div>
        </div>
    `
    featureProduct.innerHTML+=html;
  })

};
