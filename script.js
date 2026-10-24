// ===== 1. MOBILE MENU: open and close the hamburger menu =====
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen); // helps screen readers
});

// Close the menu after tapping a link
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// ===== 2. FADE-IN: show items gently when they scroll into view =====
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".fade").forEach(function (el) {
  observer.observe(el);
});

// ===== 3. HIDE SOCIAL BUTTONS WITH EMPTY LINKS (LinkedIn, GitHub) =====
document.querySelectorAll(".social").forEach(function (btn) {
  if (!btn.getAttribute("href")) {
    btn.style.display = "none";
  }
});

// ===== 4. HIDE BROKEN IMAGES so the placeholder text shows instead =====
document.querySelectorAll(".photo img, .shot img").forEach(function (img) {
  img.addEventListener("error", function () {
    img.style.display = "none";
  });
});
