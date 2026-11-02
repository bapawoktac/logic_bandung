document.getElementById("year").textContent = new Date().getFullYear();
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 450);
});
backToTop.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));

// Tutup menu navigasi mobile setelah pengunjung memilih tautan.
document.querySelectorAll(".navbar-nav .nav-link, .navbar-nav .btn").forEach((link) => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("mainNav");
    if (nav.classList.contains("show") && window.bootstrap) {
      bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }
  });
});
