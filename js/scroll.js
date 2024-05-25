

const menuFeature = document.getElementById("featureProduct");

const featureTarget =document.querySelector(".features")
menuFeature.addEventListener('click', function() {
    // Thêm hành động bạn muốn thực hiện khi nhấp vào phần tử
    featureTarget.scrollIntoView({
        behavior:"smooth"
    })
});


const menuTrending = document.getElementById("trendingProduct");

const trendingTarget =document.querySelector(".trending")
menuTrending.addEventListener('click', function() {
    // Thêm hành động bạn muốn thực hiện khi nhấp vào phần tử
    trendingTarget.scrollIntoView({
        behavior:"smooth"
    })
});
