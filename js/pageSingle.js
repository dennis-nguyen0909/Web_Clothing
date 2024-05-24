let products = null;
fetch("product.json")
  .then((response) => response.json())
  .then((data) => {
    products = data[0].data;
    console.log("products",data)
    showDetailProduct();
  });

const showDetailProduct = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  if (!productId) {
    return;
  }
  const thisProduct = products.filter((item) => item.id === +productId)[0];
  const sizes = thisProduct.sizes;
  const colors = thisProduct.colors;
  console.log(colors);

  const breadcrumb = document.querySelector(".breadcrumb");
  breadcrumb.innerHTML = `
        <ul class="flexitem">
        <li><a href="#">Home</a></li>
        <li><a href="#">Shoes</a></li>
        <li><a href="#">${thisProduct.name}</a></li>
        </ul>`;

  const productOne = document.querySelector(".products.one");
  productOne.innerHTML = `
  <div class="flexwrap">
  <div class="row">
      <div class="item is_sticky">
          <div class="price">
              <span class="discount">${thisProduct.discount}%<br>OFF</span>
          </div>
          <div class="big-image">
              <div class="big-image-wrapper swiper-wrapper">
                  <div class="image-show swiper-slide">
                      <a id="primary-image" data-fslightbox href=${
                        thisProduct.url
                      }>
                          <img id="primary-img" src=${thisProduct.url} alt="">
                      </a>
                  </div>
                  <div class="image-show swiper-slide">
                      <a data-fslightbox href=${thisProduct.image[0]}
                          <img id="img-one" src=${thisProduct.image[0]} alt="">
                      </a>
                  </div>
                  <div class="image-show swiper-slide">
                      <a data-fslightbox href=${thisProduct.image[1]}>
                          <img id="img-two" src=${thisProduct.image[1]} alt="">
                      </a>
                  </div>
                  <div class="image-show swiper-slide">
                      <a data-fslightbox href=${thisProduct.image[2]}>
                          <img id="img-three" src=${
                            thisProduct.image[2]
                          } alt="">
                      </a>
                  </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
          </div>
          <div thumbSlider="" class="small-image">
              <ul class="small-image-wrapper flexitem swiper-wrapper">
                  <li class="thumbnail-show swiper-slide">
                      <img id="img-one-1" src=${thisProduct.url} alt="">
                  </li>
                  <li class="thumbnail-show swiper-slide">
                      <img id="img-two-2" src=${thisProduct.image[0]} alt="">
                  </li>
                  
                  <li class="thumbnail-show swiper-slide">
                      <img id="img-three-3" src=${thisProduct.image[1]} alt="">
                  </li>
                  
                  <li class="thumbnail-show swiper-slide">
                  <img id="img-four-4" src=${thisProduct.image[2]} alt="">
                    </li>
                    
              
                  
              </ul>
          </div>
      </div>
  </div>
  <div class="row">
      <div class="item">
          <h1>${thisProduct.name}</h1>
          <div class="content">
              <div class="rating">
                  <div class="stars"></div>
                  <a href="#" class="mini-text">${
                    thisProduct.reviews.length
                  } reviews</a>
                  <a href="" class="add-review mini-text">Add Your Review</a>
              </div>
              <div class="stock-sku">
                  <span class="available">In Stock</span>
                  <span class="sku mini-text">SKU-881</span>
              </div>
              <div class="price">
                  <span class="current">${thisProduct.price.current}</span>
                  <span class="normal">${thisProduct.price.normal}</span>
              </div>
              <div class="colors">
                  <p>Color</p>
                  <div class="variant">
                      <form id="colorsContainer" action="">
                      </form>
                  </div>
              </div>
              <div class="sizes">
                  <p>Size</p>
                  <div class="variant">
                      <form class="sizes-container" id="sizesContainer" action="">

                      </form>
                  </div>
              </div>
              <div class="actions">
                  <div class="qty-control flexitem">
                      <button class="minus circle">-</button>
                      <input type="text" value="1">
                      <button class="plus circle">+</button>
                  </div>
                  <div class="button-cart">
                      <button class="primary-button">Add to cart</button>
                  </div>
                  <div class="wish-share">
                      <ul class="flexitem second-links">
                          <li><a href="#">
                              <span class="icon-large">
                                  <i class="ri-heart-line"></i>
                              </span>
                              <span>Wishlist</span>
                          </a></li>
                          <li><a href="#">
                              <span class="icon-large">
                                  <i class="ri-share-line"></i>
                              </span>
                              <span>Share</span>
                          </a></li>
                      </ul>
                  </div>
              </div>
              <div class="description collapse">
                  <ul>
                      <li class="has-child expand">
                          <a href="#" class="icon-small">Information</a>
                          <ul class="content">
                              <li>
                                  <span>Brands</span>
                                  <span>${thisProduct.brand}</span>
                              </li>
                              <li>
                                  <span>Activity</span>
                                  <span>${thisProduct.activity}</span>
                              </li>
                              <li>
                                  <span>Material</span>
                                  <span>${thisProduct.material}</span>
                              </li>
                              <li>
                                  <span>Gender</span>
                                  <span>${thisProduct.gender}</span>
                              </li>
                          </ul>
                      </li>
                      <li class="has-child ">
                          <a href="#0" class="icon-small">Details</a>
                          <div class="content">
                              <p>${thisProduct.information}</p>
                              <p>${thisProduct.description}</p>
                          </div>
                      </li>
                      <li class="has-child">
                          <a href="#0" class="icon-small">Custom</a>
                          <div class="content">
                              <table>
                                  <thead>
                                      <tr>
                                          <th>Size</th>
                                          <th>Bust<span class="mini-text">(cm)</span></th>
                                          <th>Waist<span class="mini-text">(cm)</span></th>
                                          <th>Hip<span class="mini-text">(cm)</span></th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>S</td>
                                          <td>85</td>
                                          <td>63,5</td>
                                          <td>89</td>
                                      </tr>
                                      <tr>
                                          <td>M</td>
                                          <td>87,5</td>
                                          <td>67,5</td>
                                          <td>89</td>
                                      </tr>
                       
                                      <tr>
                                          <td>L</td>
                                          <td>90</td>
                                          <td>72,5</td>
                                          <td>98</td>
                                      </tr>
                                      <tr>
                                          <td>XL</td>
                                          <td>93</td>
                                          <td>77,5</td>
                                          <td>103</td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </li>
                      <li class="has-child ">
                          <a href="#" class="icon-small">
                              Reviews <span class="mini-text">${
                                thisProduct.reviews.length
                              }-k</span>
                          </a>
                          <div class="content">
                              <div class="reviews">
                                  <h4>Customers</h4>
                                  <div class="review-block">
                                      <div class="review-block-head">
                                          <div class="flexitem">
                                              <span class="rate-sum">4.9</span>
                                              <span>${
                                                thisProduct.reviews.length
                                              } Reviews</span>
                                          </div>
                                          <a href="#review-form" class="secondary-button">Write Review</a>
                                      </div>
                                     <div class="review-block-body">
                                            ${thisProduct.reviews
                                              .map(
                                                ({
                                                  person,
                                                  date,
                                                  rating,
                                                  title,
                                                  text,
                                                }) => `
                                                <ul>
                                                    <li class="item">
                                                    <div class="review-form">
                                                        <p class="person">Review by ${person}</p>
                                                        <p class="mini-text">On ${date}</p>
                                                    </div>
                                                    <div class="review-rating rating">
                                                        <div class="stars"></div>
                                                    </div>
                                                    <div class="review-title">
                                                        <p>${title}</p>
                                                    </div>
                                                    <div class="review-text">
                                                        <p>${text}</p>
                                                    </div>
                                                    </li>
                                                </ul>
                                                `
                                              )
                                              .join("")}
                                            <div class="second-links">
                                            <a href="#" class="view-all">View all reviews <i class="ri-arrow-right-line"></i></a>
                                            </div>

                                      <div id="review-orm" class="review-form">
                                          <h4>Write a review</h4>
                                          <div class="rating">
                                              <p>Are you satisfied enough?</p>
                                              <div class="rate-this">
                                                  <input type="radio" name="rating" id="star5">
                                                  <label for="star5"><i class="ri-star-fill"></i></label>
                                                  <input type="radio" name="rating" id="star4">
                                                  <label for="star4"><i class="ri-star-fill"></i></label>
                                                  <input type="radio" name="rating" id="star3">
                                                  <label for="star3"><i class="ri-star-fill"></i></label>
                                                  <input type="radio" name="rating" id="star2">
                                                  <label for="star2"><i class="ri-star-fill"></i></label>
                                                  <input type="radio" name="rating" id="star1">
                                                  <label for="star1"><i class="ri-star-fill"></i></label>
                                              </div>
                                          </div>
                                          <form action="">
                                              <p>
                                                  <label>Name</label>
                                                  <input type="text">
                                              </p>
                                              <p>
                                                  <label>Summary</label>
                                                  <input type="text">
                                              </p>
                                              <p>
                                                  <label>Review</label>
                                                  <textarea cols="30" rows="10"></textarea>
                                              </p>
                                              <p><a href="#" class="primary-button">Submit Review</a></p>
                                          </form>
                                      </div>

                                  </div>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</div>
  `;
  const sizesContainer = document.getElementById("sizesContainer");
  sizes.forEach((size) => {
    // Create elements
    const pElement = document.createElement("p");

    const inputElement = document.createElement("input");
    inputElement.type = "radio";
    inputElement.name = "size";
    inputElement.id = `size-${size.id}`;

    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", `size-${size.id}`);
    labelElement.className = "circle";

    const spanElement = document.createElement("span");
    spanElement.textContent = size.name;

    // Append elements to the DOM
    labelElement.appendChild(spanElement);
    pElement.appendChild(inputElement);
    pElement.appendChild(labelElement);
    sizesContainer.appendChild(pElement);
  });
  const colorsContainer = document.getElementById("colorsContainer");
  colors.forEach((color) => {
    const PElement = document.createElement("P");
    const inputElm = document.createElement("input");
    inputElm.type = "radio";
    inputElm.name = "color";
    inputElm.id = `${color.color}`;
    const labelElm = document.createElement("label");
    labelElm.htmlFor = color.color;
    labelElm.classList.add("circle");

    PElement.appendChild(inputElm);
    PElement.appendChild(labelElm);
    colorsContainer.appendChild(PElement);
    const radBtn = document.getElementById(color.color);
    inputElm.addEventListener("click", () => {
      if (inputElm.checked) {
        const findColor = colors.find((item) => item.color === inputElm.id);
        if (findColor && findColor.image) {
          // Get the image element
          const imagePrimary = document.getElementById("primary-img");
          // Update the image source
          imagePrimary.src = findColor.image[0];
          imagePrimary.setAttribute("href", findColor.url);

          const oneImg = document.getElementById("img-one");
          oneImg.src = findColor.image[0];
          oneImg.setAttribute("href", findColor.image[0]);

          const twoImg = document.getElementById("img-two");
          twoImg.src = findColor.image[1];
          twoImg.setAttribute("href", findColor.image[1]);

          const threeImg = document.getElementById("img-three");
          threeImg.src = findColor.image[2];
          threeImg.setAttribute("href", findColor.image[2]);

          const oneImgChild = document.getElementById("img-one-1");
          oneImgChild.src = findColor.image[0];
          oneImgChild.setAttribute("href", findColor.image[0]);

          const twoImgChild = document.getElementById("img-two-2");
          twoImgChild.src = findColor.image[1];
          twoImgChild.setAttribute("href", findColor.image[1]);

          const threeImgChild = document.getElementById("img-three-3");
          threeImgChild.src = findColor.image[2];
          threeImgChild.setAttribute("href", findColor.image[2]);

          const fourImg = document.getElementById("img-four-4");
          fourImg.src = findColor.image[3];
          fourImg.setAttribute("href", findColor.image[3]);
        }
      }
    });
  });
};

document.addEventListener("click", function (event) {
  if (event.target.closest(".has-child .icon-small")) {
    event.preventDefault();
    const $subMenu = document.querySelectorAll(".has-child .icon-small");
    $subMenu.forEach((item) => {
      if (item !== event.target) {
        item.closest(".has-child").classList.remove("expand");
      }
    });
    event.target.closest(".has-child").classList.toggle("expand");
  }
});
