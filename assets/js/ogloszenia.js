document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.ad-card');
    cards.forEach((card, index) => {
      card.style.opacity = 0;
      card.style.transform = "translateY(40px)";
      setTimeout(() => {
        card.style.transition = "all 0.6s ease";
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }, index * 150);
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
      if (window.location.href.includes(link.getAttribute("href"))) {
        link.classList.add("active");
      }
    });
  });