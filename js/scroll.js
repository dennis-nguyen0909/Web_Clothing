

const menuFeature = document.getElementById("featureProduct");

const featureTarget =document.querySelector(".features")
menuFeature.addEventListener('click', function() {
    // Thêm hành động bạn muốn thực hiện khi nhấp vào phần tử
    featureTarget.scrollIntoView({
        behavior:"smooth"
    })
});

function showToastSuccess(message) {
    var toast = document.getElementById("toast");
    toast.innerHTML=message
    toast.classList.add("showSuccess");
    setTimeout(function(){
        toast.classList.remove("showSuccess");
    }, 3000); // 3 seconds
}
function showToast(message) {
    var toast = document.getElementById("toast");
    toast.innerHTML=message
    toast.classList.add("show");
    setTimeout(function(){
        toast.classList.remove("show");
    }, 3000); 
}


const menuTrending = document.getElementById("trendingProduct");

const trendingTarget =document.querySelector(".trending")
menuTrending.addEventListener('click', function() {
    // Thêm hành động bạn muốn thực hiện khi nhấp vào phần tử
    trendingTarget.scrollIntoView({
        behavior:"smooth"
    })
});
