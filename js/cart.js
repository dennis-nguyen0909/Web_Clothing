//  function renderCart(){
//     const cartContainer = document.querySelector(".mini-cart .content .cart-body .products.mini ")
//     const productCart = JSON.parse(localStorage.getItem("products"))
// let totalCartValue = 0;
// productCart.map((item,index) => {
//     console.log("item",item)
//     const data = `
//     <li class="item">
//                                         <div class="thumbnail object-cover">
//                                                 <a href="#" >
//                                                     <img src=${item.url} alt="">
//                                                 </a>
//                                             </div>
//                                             <div class="item-content">
//                                                 <p><a href="#">${item.name}</a></p>
//                                                 <span class="price">
//                                                     <span>$${item.price}</span>
//                                                     <span class="fly-item">
//                                                         <span>${item.amount}</span>
//                                                     </span>
//                                                 </span>
//                                             </div>
//                                             <a  class="item-remove" onclick=${removeProductFromCart(index)} ><i class="ri-close-line"></i></a>
//      </li>
//     `
//      // Giá trị hiện tại của sản phẩm
//      const currentPrice = parsePrice(item.price);
//      const totalPrice = currentPrice * item.amount;
 
//      // Thêm giá trị của sản phẩm vào tổng giá trị của giỏ hàng
//      totalCartValue += totalPrice;
 
//      cartContainer.innerHTML += data;
// })
// }
// renderCart()
// // Hàm này loại bỏ dấu phẩy và ký tự '₫' từ giá trị
// function parsePrice(priceString) {
//     return parseInt(priceString.replace(/[^0-9]/g, ''));
// }
// function formatCurrency(price) {
//     // Chuyển đổi giá trị số thành chuỗi và ngược lại
//     const formatter = new Intl.NumberFormat('vi-VN');
//     // Sử dụng hàm format của đối tượng formatter để định dạng số thành chuỗi số tiền
//     return formatter.format(price) + "₫";
// }
// const cartFooter = document.querySelector(".cart-footer p strong");
// cartFooter.textContent = formatCurrency(totalCartValue);


// const cartHead = document.querySelector(".cart-head");
// cartHead.innerHTML=productCart.length+" items in cart"


// function removeProductFromCart(id){
//     console.log("id",id)
// }

