// Dark/Light Mode
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Typed.js
new Typed(".input", {
  strings: ["Frontend Developer | UI/UX Enthusiast","UI/UX Designer","Web Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1500,
  loop: true
});

// Hire Me button
document.querySelector(".hire-me").addEventListener("click", e => {
  e.preventDefault();
  alert("Thank you for reaching out! Let's get in touch.");
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});

// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  const icon = hamburger.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    const icon = hamburger.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  });
});

// Back To Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// Smooth scroll to top
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
