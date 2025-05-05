document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const toast = document.getElementById("toast");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(response => {
          if (response.ok) {
            form.reset();
            toast.classList.add("show");
            setTimeout(() => toast.classList.remove("show"), 4000);
          } else {
            alert("Błąd podczas wysyłania wiadomości.");
          }
        })
        .catch(() => alert("Wystąpił problem z połączeniem."));
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