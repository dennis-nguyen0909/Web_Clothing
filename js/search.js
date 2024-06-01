let productSearch = null;
// Fetch product data from the JSON file
fetch("product.json")
  .then((response) => response.json())
  .then((data) => {
    productSearch = data;
    $(document).ready(() => {
        // Xử lý sự kiện keyup trên #search-product
        $("#search-product").on("keyup", (event) => {
            var valueinput = $(event.target).val().toLowerCase();
            let result = [];
    
            // Kiểm tra xem 'products[1]' và 'products[1].data' đã được xác định chưa
            if (productSearch && productSearch[1] && productSearch[1].data) {
                result = productSearch[1].data.filter((product) => {
                    return product.name.toLowerCase().includes(valueinput);
                });
    
                // Hiển thị kết quả
                displayResults(result);
            } else {
                console.error("productSearch[1] or productSearch[1].data is not defined");
            }
        });
    
        // Ẩn kết quả khi click ra ngoài #result
        $(document).on("click", (event) => {
            if (!$(event.target).closest("#result").length) {
                $("#result").hide();
            }
        });
    });

  })
  .catch((error) => {
    console.error("Error fetching product data:", error);
  });


function displayResults(results) {
    const resultContainer = $("#result .items");
    resultContainer.empty();

    if (results.length > 0) {
        results.forEach(product => {
            const productItem = `<div class="item">
                <a href="page-single.html?id=${product.id}&name=feature"> 
                    <h4>${product.name}</h4>
                    <img src=${product.url}></img>
                    <p>Category: ${product.category}</p>
                </a>
            </div>`;
            resultContainer.append(productItem);
        });
        $("#result").show();
    } else {
        $("#result").hide();
    }
}
