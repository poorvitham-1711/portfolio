// Back to Top button
window.addEventListener("scroll", function() {
  const button = document.getElementById("backToTop");
  button.style.display = window.scrollY > 300 ? "block" : "none";
});

document.getElementById("backToTop").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Fade-in animation
const sections = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));
