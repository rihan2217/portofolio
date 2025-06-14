function toggleLightMode() {
    const body = document.body;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
      // Switch to moon icon in light mode
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
      localStorage.setItem('lightMode', 'enabled');
    } else {
      // Switch to sun icon in dark mode
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
      localStorage.setItem('lightMode', 'disabled');
    }
  }
  
  // Check for saved preference on load
  function checkColorScheme() {
    const savedMode = localStorage.getItem('lightMode');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    if (savedMode === 'enabled' || (savedMode === null && systemPrefersLight)) {
      document.body.classList.add('light-mode');
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    }
  }
  
  // Initialize certificate swiper
  function initCertificateSwiper() {
    const swiper = new Swiper(".certificateSwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  
    // Zoom functionality on click
    swiper.on('slideClick', function () {
      const activeSlide = document.querySelector('.swiper-slide-active');
      activeSlide.style.transform = 'scale(1.5)';
      activeSlide.style.transition = 'transform 0.5s ease';
    });
  
    // Stop autoplay on hover
    const swiperContainer = document.querySelector('.certificateSwiper');
    swiperContainer.addEventListener('mouseover', () => {
      swiper.autoplay.stop();
    });
  
    swiperContainer.addEventListener('mouseout', () => {
      swiper.autoplay.start();
    });
  }
  
  // Initialize Matter.js (keep your existing implementation)
  function initMatterJS() {
    // Your existing Matter.js code here
  }
  
  // Initialize everything when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    checkColorScheme();
    initCertificateSwiper();
    initMatterJS();
  });