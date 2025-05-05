document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll('.reveal-list li');
  
    const reveal = () => {
      listItems.forEach((li, index) => {
        setTimeout(() => {
          li.style.opacity = 1;
          li.style.transform = 'translateX(0)';
        }, index * 200);
      });
    };
  
    reveal();
  });
  document.addEventListener("DOMContentLoaded", () => {
    // Reveal list
    const listItems = document.querySelectorAll('.reveal-list li');
    listItems.forEach((li, index) => {
      setTimeout(() => {
        li.style.opacity = 1;
        li.style.transform = 'translateX(0)';
      }, index * 200);
    });
  
    // Slider
    const slides = document.querySelectorAll('.slide');
    let index = 0;
    setInterval(() => {
      slides.forEach(slide => slide.style.opacity = 0);
      slides[index].style.opacity = 1;
      index = (index + 1) % slides.length;
    }, 4000);
  
    // Liczniki
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
      const update = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = Math.ceil(target / 80);
  
        if (current < target) {
          counter.innerText = current + increment;
          setTimeout(update, 30);
        } else {
          counter.innerText = target;
        }
      };
      update();
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