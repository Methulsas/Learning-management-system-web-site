let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
      slides.forEach(slide => {
        slide.classList.remove('active');
      });
      slideIndex++;
      if (slideIndex > slides.length) slideIndex = 1;
      slides[slideIndex - 1].classList.add('active');
      setTimeout(showSlides, 5000);
    }

    document.addEventListener("DOMContentLoaded", showSlides);

    function goToCourses() {
      window.location.href = "courses.html";
    }

    // Add smooth scroll animation for course cards
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.addEventListener('DOMContentLoaded', () => {
      const courseCards = document.querySelectorAll('.course-card');
      courseCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
      });
    });