let productRelated = null;
// Fetch product data from the JSON file
fetch("product.json")
  .then((response) => response.json())
  .then((data) => {
    productRelated = data;
    console.log("product", data);
    loadProduct(); // Call the function to load products after fetching the data
  })
  .catch((error) => {
    console.error("Error fetching product data:", error);
  });

const loadProduct = ()=>{
    if(!productRelated) return ;
    console.log("prodct",productRelated)
    let listProducts1 = document.querySelector(".features .products.main.flexwrap")
    console.log("lisssss",listProducts1)
    productRelated[0].data.forEach((item)=>{
    const priceNormal = item.price.normal ? item.price.normal : ''
        let data =`
                <div class="item">
                    <div class="media">
                        <div class="thumbnail object-cover">
                            <a href="page-single.html?id=${item.id}">
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
                            <a href="page-single.html?id=${item.id}">${item.name}</a>
                        </h3>
                        <div class="price">
                            <span class="current">${item.price.current}</span>
                            <span class="normal mini-text">${priceNormal}</span>
                        </div>
                    </div>
                </div> 
        `
        listProducts1.innerHTML+=data
    })
    productRelated[1].data.forEach((item)=>{
        const priceNormal = item.price.normal ? item.price.normal : ''
    
            let data =`
                    <div class="item">
                        <div class="media">
                            <div class="thumbnail object-cover">
                                <a href="page-single.html?id=${item.id}&name=feature">
                                    <img src=${item.url} alt="page-single?id=${item.id}&name=feauture">
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
                                <a href="page-single?id=${item.id}&name=feauture">${item.name}</a>
                            </h3>
                            <div class="price">
                                <span class="current">${item.price.current}</span>
                                <span class="normal mini-text">${priceNormal}</span>
                            </div>
                        </div>
                    </div> 
            `
    
            listProducts1.innerHTML+=data
    })
}