
// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Add a scroll event listener
window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

// Function to scroll to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
