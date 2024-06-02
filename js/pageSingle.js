

let listProducts = null;
let productsInCart = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")):[]
fetch("product.json")
    .then((response) => response.json())
    .then((data) => {
        listProducts = data;
        showDetailProduct();
        totalCart()
    });

const showDetailProduct = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");
    console.log("name", name)
    const productId = urlParams.get("id");
    let thisProduct = listProducts[0].data.filter((item) => item.id === +productId)[0];
    if (!productId) {
        return;
    }
    if (name === "feature") {
        thisProduct = listProducts[1].data.filter((item) => item.id === +productId)[0];
        console.log("this", thisProduct)
    }

    const sizes = thisProduct.sizes;
    const colors = thisProduct.colors;
    const priceNormal = thisProduct.price.normal ? thisProduct.price.normal : ''
    const breadcrumb = document.querySelector(".breadcrumb");
    breadcrumb.innerHTML = `
        <ul class="flexitem">
        <li><a href="index.html">Home</a></li>
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
                      <a id="primary-image" data-fslightbox href=${thisProduct.url
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
                          <img id="img-three" src=${thisProduct.image[2]
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
                      <img id="img-two-2" src=${thisProduct.image[1]} alt="">
                  </li>
                  
                  <li class="thumbnail-show swiper-slide">
                      <img id="img-three-3" src=${thisProduct.image[2]} alt="">
                  </li>
                  
                  <li class="thumbnail-show swiper-slide">
                  <img id="img-four-4" src=${thisProduct.image[3]} alt="">
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
                  <a href="#" class="mini-text">${thisProduct.reviews.length
        } reviews</a>
                  <a href="" class="add-review mini-text">Add Your Review</a>
              </div>
              <div class="stock-sku">
                  <span class="available">In Stock</span>
                  <span class="sku mini-text">SKU-881</span>
              </div>
              <div class="price">
                  <span class="current">${thisProduct.price.current}</span>
                  <span class="normal">${priceNormal}</span>
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
                                          <td>36</td>
                                          <td>85</td>
                                          <td>63,5</td>
                                          <td>89</td>
                                      </tr>
                                      <tr>
                                          <td>37</td>
                                          <td>87,5</td>
                                          <td>67,5</td>
                                          <td>89</td>
                                      </tr>
                       
                                      <tr>
                                          <td>38</td>
                                          <td>90</td>
                                          <td>72,5</td>
                                          <td>98</td>
                                      </tr>
                                      <tr>
                                          <td>39</td>
                                          <td>93</td>
                                          <td>77,5</td>
                                          <td>103</td>
                                      </tr>
                                      <tr>
                                      <td>40</td>
                                      <td>93</td>
                                      <td>77,5</td>
                                      <td>103</td>
                                  </tr>
                                  <tr>
                                  <td>41</td>
                                  <td>93</td>
                                  <td>77,5</td>
                                  <td>103</td>
                              </tr>
                              <tr>
                              <td>42</td>
                              <td>93</td>
                              <td>77,5</td>
                              <td>103</td>
                          </tr>
                          <tr>
                          <td>43</td>
                          <td>93</td>
                          <td>77,5</td>
                          <td>103</td>
                      </tr>
                      <tr>
                      <td>44</td>
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
                              Reviews <span class="mini-text">${thisProduct.reviews.length
        }-k</span>
                          </a>
                          <div class="content">
                              <div class="reviews">
                                  <h4>Customers</h4>
                                  <div class="review-block">
                                      <div class="review-block-head">
                                          <div class="flexitem">
                                              <span class="rate-sum">4.9</span>
                                              <span>${thisProduct.reviews.length
        } Reviews</span>
                                          </div>
                                          <a href="#review-form" class="secondary-button">Write Review</a>
                                      </div>
                                     <div class="review-block-body">
                                            ${thisProduct.reviews.map(
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
                                                `).join("")}
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
    var cartColor,cartSize;
    sizes.forEach((size) => {
        // Create elements
        const pElement = document.createElement("p");

        const inputElement = document.createElement("input");
        inputElement.type = "radio";
        inputElement.name = "size";
        inputElement.id = `size-${size.id}`;
        inputElement.value=`${size.name}`;

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
        inputElement.addEventListener('click',()=>{
            if(inputElement.checked){
                cartSize=inputElement.value
            }
        })
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
                cartColor=inputElm.id
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
    const btnAdd =document.querySelector(".button-cart button");

    const quantityInput = document.querySelector(".qty-control input");
    const plusButton = document.querySelector(".qty-control .plus");
    const minusButton = document.querySelector(".qty-control .minus");
// Now you can use selectedSize and selectedColor variables as needed.

    btnAdd.addEventListener("click",()=>{
        const soLuong=document.querySelector(".qty-control input").value;
        console.log("cart",cartColor)
        console.log("cart",cartSize)
        console.log("cart",soLuong)
        if(cartColor===undefined){
            showToast("Vui lòng chọn màu sắc")
            return ;
        }else
        if(cartSize===undefined){
            showToast("Vui lòng chọn size")
            return;
        }else{   
            addToCart(thisProduct.id,name,thisProduct,cartColor,cartSize,soLuong)
            showToastSuccess("Thêm thành công")

        }
    })
    


    let amount = 1;

    plusButton.addEventListener("click", () => {
        amount += 1; // Thêm 1 vào biến amount mỗi khi nút plus được nhấn
        quantityInput.value = amount; // Cập nhật giá trị của quantityInput trực tiếp
    });
    minusButton.addEventListener('click',()=>{
        amount-=1;
        if(amount>0){
            quantityInput.value=amount
        }else{
            amount=1
            quantityInput.value=amount

        }
    })
  
    
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

function saveToLocalStorage(){
    localStorage.setItem("products",JSON.stringify(productsInCart))
}
function renderCart(){
    const cartContainer = document.querySelector(".mini-cart .content .cart-body .products.mini");
    const cartFooter = document.querySelector(".cart-footer p strong");
    const cartHead = document.querySelector(".cart-head");

    const productCart = JSON.parse(localStorage.getItem("products"));
    if (!productCart || productCart.length === 0) {
        cartContainer.innerHTML = "<p>No items in cart</p>";
        cartFooter.textContent = "$0.00";
        cartHead.textContent = "0 items in cart";
        return;
    }

    cartContainer.innerHTML = "";  // Clear the existing items
    let totalCartValue = 0;

    productCart.forEach((item, index) => {
        const data = `
        <li class="item">
            <div class="thumbnail object-cover">
                <a href="#">
                    <img src="${item.url}" alt="">
                </a>
            </div>
            <div class="item-content">
                <p><a href="#">${item.name}</a></p>
                <span class="price">
                    <span>$${item.price}</span>
                    <span class="fly-item">
                        <span>${item.amount}</span>
                        </span>
                        </span>
                        <span style="float:right;">Size:${item.size}
                        </span>
                </div>
            <a href="#" onclick="deleteProductInCart(${index})" class="item-remove" data-index="${index}"><i class="ri-close-line"></i></a>
        </li>
        `;
        const currentPrice = parsePrice(item.price);
        const totalPrice = currentPrice * item.amount;
        totalCartValue += totalPrice;

        cartContainer.innerHTML += data;
    });

    cartFooter.textContent = formatCurrency(totalCartValue);
    cartHead.textContent = `${productCart.length} items in cart`;
}
renderCart()
// Hàm này loại bỏ dấu phẩy và ký tự '₫' từ giá trị
function parsePrice(priceString) {
    return parseInt(priceString.replace(/[^0-9]/g, ''));
}
function formatCurrency(price) {
    // Chuyển đổi giá trị số thành chuỗi và ngược lại
    const formatter = new Intl.NumberFormat('vi-VN');
    // Sử dụng hàm format của đối tượng formatter để định dạng số thành chuỗi số tiền
    return formatter.format(price) + "₫";
}

const deleteProductInCart=(index)=>{
    productsInCart.splice(index,1)
    saveToLocalStorage()
    renderCart()
    totalCart()
}
function addToCart(id,name,thisProduct,color,size,amount){
    const checkProduct = productsInCart.some((item)=>item.id === id);
    const priceNormal = thisProduct.price.current ? thisProduct.price.current : ''

    if(!checkProduct){
        productsInCart.unshift({
            ...thisProduct,
            id:thisProduct.id,
            name:thisProduct.name,
            color:color,
            size:size,
            price:priceNormal,
            amount:amount,
            quantity:1
        })
        saveToLocalStorage()
        totalCart()
        renderCart()

    }else{
        let getIndex= productsInCart.findIndex((value)=>value.id===id)
        const pro = productsInCart.find((item)=>item.id===id)
        console.log("size",pro.size!==size)
        console.log("pro",pro)
        console.log("color",pro.color!==color)
        console.log("getIndex",getIndex)
        if (pro.size !== size || pro.color !== color) {
            // Nếu cùng ID nhưng khác kích thước hoặc màu sắc, thêm sản phẩm mới vào giỏ hàng
            const url = thisProduct.colors.find(item => item.color === color)?.image[0] || '';
            productsInCart.unshift({
                    ...pro,
                    url:url,
                    name: thisProduct.name,
                    color: color,
                    size: size,
                    price:priceNormal,
                    amount: amount,
                    quantity: ++pro.quantity
            })
            saveToLocalStorage()
            totalCart()
            renderCart()
        }else if (pro.size===size && pro.color!==color){
            const url = thisProduct.colors.find(item => item.color === color)?.image[0] || '';
            productsInCart.unshift({
                    ...pro,
                    url:url,
                    name: thisProduct.name,
                    color: color,
                    size: size,
                    price:priceNormal,
                    amount: amount,
                    quantity: ++pro.quantity
            })
            saveToLocalStorage()
            totalCart()
            renderCart()
        }
    }
}

function totalCart (){
    document.querySelector(".iscart .fly-item .item-number").innerHTML=productsInCart.length
}