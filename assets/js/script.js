// Prosty fade-in animacji dla ogłoszeń
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".ad-item");
  
    items.forEach((item, index) => {
      item.style.opacity = 0;
      item.style.transform = "translateY(20px)";
      setTimeout(() => {
        item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        item.style.opacity = 1;
        item.style.transform = "translateY(0)";
      }, 150 * index);
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

// script.js - rozszerzenie istniejącego kodu

document.addEventListener("DOMContentLoaded", () => {
  // Animacje dla ogłoszeń
  const items = document.querySelectorAll(".ad-item");
  items.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = "translateY(20px)";
    setTimeout(() => {
      item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }, 150 * index);
  });

  // Aktywne linki
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    if (window.location.href.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });

  // Obsługa kliknięcia w ogłoszenie
  document.querySelectorAll('.ad-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Pobierz dane ogłoszenia
      const adData = {
        title: this.querySelector('h3').textContent,
        price: this.querySelector('p').textContent.split('•')[0].trim(),
        condition: this.querySelector('p').textContent.split('•')[1].trim(),
        mainImage: this.querySelector('img').src,
        // Domyślne zdjęcia - w prawdziwej implementacji można pobierać z API
        gallery: [
          this.querySelector('img').src,
          'https://via.placeholder.com/800x500?text=Silnik',
          'https://via.placeholder.com/800x500?text=Wnętrrze',
          'https://via.placeholder.com/800x500?text=Detale'
        ],
        description: `
          <h3>Opis pojazdu</h3>
          <p>Profesjonalnie przygotowany ${this.querySelector('h3').textContent} w idealnym stanie technicznym i wizualnym. Pojazd pochodzi wyłącznie z legalnego źródła, posiada pełną dokumentację i historię serwisową.</p>
          
          <h3>Wyposażenie</h3>
          <ul>
            <li>Klimatyzacja automatyczna</li>
            <li>System multimedialny z ekranem dotykowym</li>
            <li>Skórzana tapicerka</li>
            <li>System asystenta pasa ruchu</li>
            <li>Kamera cofania</li>
          </ul>
          
          <h3>Dane techniczne</h3>
          <table>
            <tr><td>Marka:</td><td>${this.querySelector('h3').textContent.split(' ')[0]}</td></tr>
            <tr><td>Model:</td><td>${this.querySelector('h3').textContent.split(' ').slice(1).join(' ')}</td></tr>
            <tr><td>Rok produkcji:</td><td>${this.querySelector('h3').textContent.split(' ').pop()}</td></tr>
            <tr><td>Przebieg:</td><td>50 000 km</td></tr>
            <tr><td>Moc:</td><td>150 KM</td></tr>
            <tr><td>Skrzynia biegów:</td><td>Automatyczna</td></tr>
            <tr><td>Rodzaj paliwa:</td><td>Benzyna</td></tr>
          </table>
        `,
        contact: {
          phone: '+48 123 456 789',
          email: 'kontakt@gowheelie.pl',
          address: 'ul. Motoryzacyjna 15, 00-001 Warszawa'
        }
      };

      // Zapisz dane w localStorage
      localStorage.setItem('currentAd', JSON.stringify(adData));
      
      // Przekieruj do strony ogłoszenia
      window.location.href = 'ad-details.html';
    });
  });

  // Generuj stronę ogłoszenia jeśli jesteśmy na ad-details.html
  if (window.location.pathname.includes('ad-details.html')) {
    generateAdPage();
  }
});

function generateAdPage() {
  const adData = JSON.parse(localStorage.getItem('currentAd'));
  if (!adData) {
    window.location.href = 'index.html';
    return;
  }

  // Stwórz strukturę strony
  document.body.innerHTML = `
    <header class="hero">
      <div class="overlay">
        <div class="top-bar">
          <div class="logo">
            <img src="logo-gowheelie.png" alt="GoWheelie Logo" />
          </div>
          <nav>
            <ul>
              <li><a href="index.html">Strona Główna</a></li>
              <li><a href="ogloszenia.html">Ogłoszenia</a></li>
              <li><a href="o-nas.html">O Nas</a></li>
              <li><a href="kontakt.html">Kontakt</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main class="ad-container">
      <section class="ad-gallery">
        <div class="main-image">
          <img src="${adData.mainImage}" alt="${adData.title}" id="mainImage">
        </div>
        <div class="thumbnail-container">
          ${adData.gallery.map((img, index) => `
            <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}')">
              <img src="${img}" alt="Miniatura ${index + 1}">
            </div>
          `).join('')}
        </div>
      </section>

      <section class="ad-info">
        <h1>${adData.title}</h1>
        <div class="price-condition">
          <span class="price">${adData.price}</span>
          <span class="condition">${adData.condition}</span>
        </div>
        
        <div class="ad-description">
          ${adData.description}
        </div>
        
        <div class="contact-box">
          <h2>Skontaktuj się z nami</h2>
          <p><i class="fas fa-phone"></i> ${adData.contact.phone}</p>
          <p><i class="fas fa-envelope"></i> ${adData.contact.email}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${adData.contact.address}</p>
          <button class="btn contact-btn">Wyślij wiadomość</button>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 GoWheelie. Wszelkie prawa zastrzeżone.</p>
    </footer>

    <style>
      /* Style dla strony ogłoszenia */
      .ad-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        max-width: 1400px;
        margin: 50px auto;
        padding: 0 20px;
      }
      
      .ad-gallery {
        position: sticky;
        top: 20px;
      }
      
      .main-image {
        margin-bottom: 15px;
      }
      
      .main-image img {
        width: 100%;
        height: 500px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      }
      
      .thumbnail-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
      }
      
      .thumbnail {
        cursor: pointer;
        border-radius: 5px;
        overflow: hidden;
        border: 2px solid transparent;
        transition: all 0.3s ease;
      }
      
      .thumbnail.active {
        border-color: #ffd700;
      }
      
      .thumbnail img {
        width: 100%;
        height: 80px;
        object-fit: cover;
      }
      
      .ad-info h1 {
        font-size: 32px;
        margin-bottom: 10px;
        color: #222;
      }
      
      .price-condition {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 30px;
      }
      
      .price {
        font-size: 28px;
        font-weight: bold;
        color: #d40000;
      }
      
      .condition {
        background: #f0f0f0;
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 14px;
      }
      
      .ad-description {
        line-height: 1.7;
        margin-bottom: 40px;
      }
      
      .ad-description h3 {
        margin: 25px 0 15px;
        color: #333;
      }
      
      .ad-description ul {
        margin-left: 20px;
        margin-bottom: 20px;
      }
      
      .ad-description table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      .ad-description table td {
        padding: 8px 0;
        border-bottom: 1px solid #eee;
      }
      
      .ad-description table td:first-child {
        font-weight: bold;
        width: 40%;
      }
      
      .contact-box {
        background: #f9f9f9;
        padding: 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
      }
      
      .contact-box h2 {
        margin-bottom: 20px;
        color: #222;
      }
      
      .contact-box p {
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .contact-btn {
        width: 100%;
        padding: 12px;
        font-size: 16px;
        margin-top: 15px;
      }
      
      @media (max-width: 900px) {
        .ad-container {
          grid-template-columns: 1fr;
        }
        
        .main-image img {
          height: 350px;
        }
      }
    </style>

    <script>
      function changeMainImage(src) {
        document.getElementById('mainImage').src = src;
        document.querySelectorAll('.thumbnail').forEach(thumb => {
          thumb.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
      }
      
      document.querySelector('.contact-btn').addEventListener('click', () => {
        alert('Dziękujemy za zainteresowanie! Skontaktujemy się z Tobą wkrótce.');
      });
    </script>
  `;
}