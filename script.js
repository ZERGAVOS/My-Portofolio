document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');

  toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });
});
const searchInput = document.getElementById('search-input');
searchInput.addEventListener ('focus', function () {
    this.placeholder = ' ';
})
searchInput.addEventListener('blur', function () {
    if (this.value === '') {
    this.placeholder = 'Search...';
    }
});
const header = document.getElementById("mainHeader");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
    header.classList.remove("default");
  } else {
    header.classList.remove("scrolled");
    header.classList.add("default");
  }
});