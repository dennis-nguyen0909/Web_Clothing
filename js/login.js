let users = null;
fetch("users.json")
  .then((response) => response.json())
  .then((data) => {
    users = data;
    console.log(data)
    loadLogin(); 
  })
  .catch((error) => {
    console.error("Error fetching product data:", error);
  });

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

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

function loadLogin (){
    if (users===null){
        return;
    }
    const getUser = JSON.parse(localStorage.getItem("users")) ;
        if(getUser!==null){
            window.location.href="index.html";
        }
        console.log("users",users)
    document.getElementById("login-form").addEventListener("submit", function(e) {
        e.preventDefault(); 

        // Lấy dữ liệu từ các trường nhập liệu
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if(email===''){
            showToast("Email  không được để trống")
            return ;
        }
        if(validateEmail(email)===false){
            showToast("Email  không đúng định dạng")
            return ;
        }
        if(password===''){
            showToast("Password không được để trống")
            return ;
        }
        const filterUser = users.find((item)=>item.email===email && item.password===password)
        if(filterUser){

            showToastSuccess("Đăng nhập thành công")
            localStorage.setItem("users",JSON.stringify(filterUser))
            setTimeout(()=>{
                window.location.href='index.html'
            },3000)
        }else{
            showToast("Email hoặc password không đúng")
        }
        
    
        
    });
}
