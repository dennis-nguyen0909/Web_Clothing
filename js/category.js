let products=null;
fetch("product.json")
    .then((response)=>response.json())
    .then((data)=>{
        products=data;
        console.log(data)
        showCategory();
    })

const showCategory = (newProducts)=>{
    let productsRender;
    if(!products) return ;
    const urlParams = new URLSearchParams(window.location.search);
    const nameParams = urlParams.get("name");
    const categoryParams = urlParams.get("category");
    const mergeProducts = products[0].data.concat(products[1].data);
    if(nameParams){
        productsRender=mergeProducts.filter((item)=>item.gender.includes(nameParams))
    }else if(categoryParams){
        productsRender=mergeProducts.filter((item)=>item.category.includes(categoryParams))
        
    }
    const productFilterMen = mergeProducts.filter((item)=>item.gender.includes(nameParams))
    const productFilterSports = mergeProducts.filter((item)=>item.category.includes(categoryParams))
    const namePage = document.getElementById("name-page");
    const pageTitle = document.querySelector('.page-title h1');
    namePage.innerHTML=nameParams?nameParams:categoryParams
    pageTitle.innerHTML=nameParams?nameParams:categoryParams

    // render products
    const containerProducts = document.querySelector(".products.main.flexwrap");
    productsRender.forEach((item)=>{
        const priceNormal = item.price.normal ===undefined ? '':item.price.normal
        const html = `
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
                    <div class="offer">
                        <p class="mini-text">Offer ends at</p>
                        <ul class="flexcenter">
                            <li>1</li>
                            <li>15</li>
                            <li>27</li>
                            <li>07</li>
                        </ul>
                    </div>
                    <div class="rating">
                        <div class="stars"></div>
                        <span class="mini-text">(${item.rating})</span>
                    </div>
                    <h3 class="main-links">
                        <a href="page-single.html?id=${item.id}">${item.name}</a>
                    </h3>
                    <div class="price">
                        <span class="current">${item.current}</span>
                        <span class="normal mini-text">${priceNormal}</span>
                    </div>
                    <div class="stock mini-text" data-stock="4000">
                        <div class="qty">
                            <span>Sold: <strong class="qty-sold">${item.sold}</strong></span>
                            <span>Stock: <strong class="qty-available">107</strong></span>
                        </div>
                        <div class="bar">
                            <div class="available"></div>
                        </div>
                    </div>
                </div>
            </div>
        `
        containerProducts.innerHTML+=html
    })

}
