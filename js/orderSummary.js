let orderSummary = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")):[]

const renderOrderItems = (orderItems)=>{
    const container = document.querySelector(".summary-order .products.mini");
    if(orderItems==null) {
        container.innerHTML=`
        <li>
        <span>Chưa có sản phẩm</span>
        </li>
        `
        ;
    }
    let totalPriceValue=0
    let shippingValue=''
    let discount = 0
    orderItems.forEach((item)=>{
        const totalPrice =parsePrice(item.price)*parseInt(item.amount)
        let data =`
                <li class="item">
                <div class="thumbnail object-cover">
                    <img src=${item.url} alt="">
                </div>
                <div class="item-content">
                    <p>${item.name}</p>
                    <span class="price">
                        <span>${item.price}</span>
                        <span>x ${item.amount}</span>
                    </span>
                </div>
            </li>
        `
        totalPriceValue+=totalPrice
        container.innerHTML+=data
        shippingValue=item.shipping
        discount+=parseInt(item.discount)
    })
    const total= document.querySelector(".summary-totals #totalPrice")
    total.innerHTML=formatCurrency(totalPriceValue- totalPriceValue*(discount/100))
    const shipping =document.querySelector(".summary-totals #shipping");
    shipping.innerHTML=shippingValue
    const discountHTML = document.querySelector(".summary-totals #discount");
    console.log(discountHTML)
    discountHTML.innerHTML=discount+'%'

}
renderOrderItems(orderSummary)

function parsePrice(priceString) {
    return parseInt(priceString.replace(/[^0-9]/g, ''));
}
const regexPhoneNumber= (phone) => {

    const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

    return phone.match(regexPhoneNumber) ? true : false;

}

function formatCurrency(price) {
    // Chuyển đổi giá trị số thành chuỗi và ngược lại
    const formatter = new Intl.NumberFormat('vi-VN');
    // Sử dụng hàm format của đối tượng formatter để định dạng số thành chuỗi số tiền
    return formatter.format(price) + "₫";
}
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  function showToastError(message) {
    var toast = document.getElementById("toast");
    toast.innerHTML=message
    toast.classList.add("show");
    setTimeout(function(){
        toast.classList.remove("show");
    }, 3000); // 3 seconds
    }
function showToastSuccess(message) {
        var toast = document.getElementById("toast");
        toast.innerHTML=message
        toast.classList.add("showSuccess");
        setTimeout(function(){
            toast.classList.remove("showSuccess");
        }, 3000); // 3 seconds
}
const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
  const $submit =document.querySelector(".single-checkout .primary-checkout .primary-button")
  console.log(validateEmail('duyxitrum000@gmail.com'));
  $submit.addEventListener('click',()=>{
    const $email =document.getElementById("email").value;
    const $fname =document.getElementById("fname").value;
    const $lname =document.getElementById("lname").value;
    const $cname =document.getElementById("cname").value;
    const $address =document.getElementById("address").value;
    const $city =document.getElementById("city").value;
    const $state =document.getElementById("state").value;
    const $postal =document.getElementById("postal").value;
    const $country =document.getElementById("country").value;
    const $phone =document.getElementById("phone").value;
    if($email==='' && validateEmail($email)===false){
        showToastError("Email không được để trống")
        return ;
    }
    if(validateEmail($email)===false){
        showToastError("Email không đúng định dạng")
        return ;
    }
    if($fname==='' ){
        showToastError("FirstName không được để trống")
        return ;
    }
    if($lname==='' ){
        showToastError("LastName không được để trống")
        return ;
    }
   
    if($cname==='' ){
        showToastError("Company name không được để trống")
        return ;
    }
   
    if($address==='' ){
        showToastError("Address không được để trống")
        return ;
    }
    if($city==='' ){
        showToastError("City không được để trống")
        return ;
    }
   
    if($state==='' ){
        showToastError("State không được để trống")
        return ;
    }
   
    if($postal==='' ){
        showToastError("Postal không được để trống")
        return ;
    }
   
    if($country==='' ){
        showToastError("Country không được để trống")
        return ;
    }
    if($phone==='' ){
        showToastError("phone không được để trống")
        return ;
    }
   
    if(regexPhoneNumber($phone)===false ){
        showToastError("Phone không đúng định dạng")
        return ;
    }

    localStorage.removeItem("products")
    renderOrderItems(orderSummary)
    showToastSuccess("Đặt hàng thành công")
    setTimeout(()=>{
        window.location.reload()
    },3000)
    
   
})