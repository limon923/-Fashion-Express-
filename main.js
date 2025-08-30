// ============================
// Mobile Menu Toggle
// ============================
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  mobileMenu.style.left = '0';
  overlay.style.display = 'block';
});
overlay.addEventListener('click', () => {
  mobileMenu.style.left = '-100%';
  overlay.style.display = 'none';
});

// ============================
// Notification Dropdown
// ============================
const notifIcon = document.getElementById('notif-icon');
const notifDropdown = document.getElementById('notif-dropdown');

notifIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  notifDropdown.style.display = notifDropdown.style.display === 'block' ? 'none' : 'block';
});
window.addEventListener('click', () => {
  notifDropdown.style.display = 'none';
});

// ============================
// Mobile Search Logic
// ============================
const searchIcon = document.querySelector('.search-icon');
const searchBox = document.querySelector('.search-box');
const closeBtn = document.querySelector('.close-btn');
let searchTimeout;

searchIcon.addEventListener('click', () => {
  searchBox.style.display = 'inline-block';
  searchBox.focus();
  closeBtn.style.display = 'inline';
  searchIcon.style.display = 'none'; 

  searchTimeout = setTimeout(() => {
    if (searchBox.value === '') {
      searchBox.style.display = 'none';
      closeBtn.style.display = 'none';
      searchIcon.style.display = 'inline'; 
    }
  }, 5000);
});
searchBox.addEventListener('input', () => {
  clearTimeout(searchTimeout);
});
closeBtn.addEventListener('click', () => {
  searchBox.style.display = 'none';
  closeBtn.style.display = 'none';
  searchIcon.style.display = 'inline'; 
});

// ============================
// Scroll Header Effect
// ============================
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (header) {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      header.style.background = '#ffffff';
    } else {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
      header.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)';
    }
  }
});

// ============================
// Image Slider System
// ============================
// Hero Section JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.getElementById('hero-section');
    const images = [
        'images/hero-1.webp', 
         'images/hero-2.webp', 
         'images/hero-3.webp',
           'images/hero-4.webp', 
             'images/hero-5.webp', 
               'images/hero-6.webp', 
                 'images/hero-7.webp', 
                   'images/hero-8.webp', 
                     'images/hero-9.webp', 
                      'images/hero-10.webp', 
                       'images/hero-11.webp', 
        // Add more image paths if you have them, or repeat 'images/her-1.webp' if you only have one.
    ];

    let currentIndex = 0;
    let slideInterval; // To clear and reset interval

    function createAndAppendImage(src, index) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Hero Image ${index + 1}`;
        if (index === 0) {
            img.classList.add('active');
        }
        heroSection.appendChild(img);
    }

    // Load all images initially
    images.forEach((src, index) => {
        createAndAppendImage(src, index);
    });

    const imgElements = heroSection.querySelectorAll('img');

    // Create Dot Navigation Container
    const dotContainer = document.createElement('div');
    dotContainer.classList.add('slider-dots');
    heroSection.appendChild(dotContainer); // ensure dots are appended inside heroSection

    // Create Dots
    const dots = [];
    images.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetInterval(); // Reset interval on manual click
        });
        dotContainer.appendChild(dot);
        dots.push(dot);
    });

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.remove('active', 'animate');
            if (index === currentIndex) {
                dot.classList.add('active');
                // Trigger animation by adding and then removing the animate class
                setTimeout(() => {
                    dot.classList.add('animate');
                }, 50); // Small delay to ensure class is removed and then re-added
            }
        });
    }

    function goToSlide(index) {
        imgElements[currentIndex].classList.remove('active');
        currentIndex = index;
        imgElements[currentIndex].classList.add('active');
        updateDots();
    }

    function changeImage() {
        imgElements[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        imgElements[currentIndex].classList.add('active');
        updateDots();
    }

    function startSlider() {
        slideInterval = setInterval(changeImage, 3000); // Change image every 3 seconds (3000 milliseconds)
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startSlider();
    }

    // Initial setup
    updateDots(); // Ensure dots are correctly set at start
    startSlider(); // Start the automatic slider
});
// Hero Section JavaScript End
// ============================
// Product Box Generator
// ============================
/*document.addEventListener('DOMContentLoaded', function() {
  let container = document.getElementById("products");
  if (!container) return;

  const categoryImages = {
    'fashion': 'images/product1.jpg',
    'electronics': 'images/product2.jpg',
    'home': 'images/product3.jpg',
    'sports': 'images/product4.jpg'
  };
  const categories = ['fashion', 'electronics', 'home', 'sports'];

  for (let i = 1; i <= 100; i++) {
    const categoryIndex = (i - 1) % categories.length;
    const category = categories[categoryIndex];
    const productImage = categoryImages[category];
    
    container.innerHTML += `
      <div class="product-box">
        <div class="product-image">
          <img src="${productImage}" alt="Product ${i}">
          <div class="product-overlay">
            <button class="quick-view">Quick View</button>
          </div>
        </div>
        <div class="product-info">
          <h3 class="product-title">${category} Product ${i}</h3>
          <p class="product-category">${category}</p>
          <p class="product-price">৳${i * 100}</p>
          <div class="product-actions">
            <button class="add-to-cart">কার্টে যোগ করুন</button>
            <button class="wishlist"><i class="fas fa-heart"></i></button>
          </div>
        </div>
      </div>
    `;
  }
});

// ============================
// Firebase Authentication (Disabled Now)
// ============================
// NOTE: Uncomment when Firebase SDK added in index.html
/*
firebase.auth().signInWithEmailAndPassword(email, password)
.then((userCredential) => {
    // Login সফল হলে
    window.location.href = "index.html";  // এখানে রিডিরেক্ট
})
.catch((error) => {
    alert(error.message);
});
*/

// ============================
// Newsletter Subscription
// ============================
document.addEventListener('DOMContentLoaded', function() {
  const subscribeForm = document.querySelector('.subscribe-form');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      if (validateEmail(email)) {
        alert('Thank you for subscribing! You will receive our special offers soon.');
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});