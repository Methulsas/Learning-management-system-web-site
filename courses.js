// Course data
    const courseData = {
      ai: {
        title: 'Artificial Intelligence',
        subtitle: 'Master AI fundamentals and advanced techniques',
        instructor: 'Prof. Michael Chen',
        duration: '10 weeks',
        students: 12350,
        rating: 4.8,
        price: '$299',
        description: 'Learn essential AI concepts, machine learning algorithms, and neural networks.',
        features: [
          'Industry Tools',
          'Real-world Scenarios', 
          'Expert Mentorship',
          'Job Placement Support',
          'Hands-on Projects',
          'Certificate of Completion'
        ]
      },
      cybersecurity: {
        title: 'Cybersecurity Fundamentals',
        subtitle: 'Protect digital assets and learn security protocols',
        instructor: 'Prof. Michael Chen',
        duration: '10 weeks',
        students: 12350,
        rating: 4.8,
        price: '$249',
        description: 'Learn essential cybersecurity concepts, threat detection, and security protocols.',
        features: [
          'Industry Tools',
          'Real-world Scenarios',
          'Expert Mentorship', 
          'Job Placement Support',
          'Practical Labs',
          'Security Certifications'
        ]
      },
      data: {
        title: 'Data Analysis',
        subtitle: 'Analyze data and extract meaningful insights',
        instructor: 'Dr. Sarah Johnson',
        duration: '12 weeks',
        students: 15420,
        rating: 4.9,
        price: '$329',
        description: 'Master data analysis techniques using Python, R, and advanced statistical methods.',
        features: [
          'Python & R Programming',
          'Statistical Analysis',
          'Data Visualization',
          'Machine Learning',
          'Real Datasets',
          'Industry Projects'
        ]
      },
      web: {
        title: 'Web Development',
        subtitle: 'Build modern web applications and websites',
        instructor: 'Alex Rodriguez',
        duration: '14 weeks',
        students: 18750,
        rating: 4.7,
        price: '$399',
        description: 'Learn full-stack web development with modern frameworks and technologies.',
        features: [
          'HTML, CSS, JavaScript',
          'React & Node.js',
          'Database Integration',
          'API Development',
          'Responsive Design',
          'Portfolio Projects'
        ]
      },
      database: {
        title: 'Database Management',
        subtitle: 'Design and manage database systems',
        instructor: 'Prof. David Kumar',
        duration: '8 weeks',
        students: 9340,
        rating: 4.6,
        price: '$279',
        description: 'Master database design, SQL, and modern database management systems.',
        features: [
          'SQL Mastery',
          'Database Design',
          'Performance Optimization',
          'NoSQL Databases',
          'Cloud Databases',
          'Real-world Projects'
        ]
      }
    };

    // DOM elements
    const courseCards = document.querySelectorAll('.course-card');
    const courseModal = document.getElementById('courseModal');
    const registrationModal = document.getElementById('registrationModal');
    const closeModal = document.getElementById('closeModal');
    const closeRegistrationModal = document.getElementById('closeRegistrationModal');
    const registerBtn = document.getElementById('registerBtn');
    const registrationForm = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');

    let currentCourse = null;

    // Initialize event listeners
    function init() {
      courseCards.forEach(card => {
        card.addEventListener('click', () => {
          const courseType = card.dataset.course;
          showCourseDetails(courseType);
        });
      });

      closeModal.addEventListener('click', closeCourseModal);
      closeRegistrationModal.addEventListener('click', closeRegistrationModalFunc);
      registerBtn.addEventListener('click', openRegistrationModal);
      registrationForm.addEventListener('submit', handleRegistration);

      // Close modals when clicking outside
      courseModal.addEventListener('click', (e) => {
        if (e.target === courseModal) closeCourseModal();
      });

      registrationModal.addEventListener('click', (e) => {
        if (e.target === registrationModal) closeRegistrationModalFunc();
      });
    }

    function showCourseDetails(courseType) {
      const course = courseData[courseType];
      if (!course) return;

      currentCourse = course;

      // Update modal content
      document.getElementById('modalTitle').textContent = course.title;
      document.getElementById('modalSubtitle').textContent = course.subtitle;
      document.getElementById('coursePrice').textContent = course.price;

      // Update course details
      const detailsContent = document.getElementById('courseDetailsContent');
      detailsContent.innerHTML = `
        <div class="detail-row">
          <span class="detail-label">Instructor:</span>
          <span class="detail-value">${course.instructor}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Duration:</span>
          <span class="detail-value">${course.duration}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Students:</span>
          <span class="detail-value">${course.students.toLocaleString()}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Rating:</span>
          <span class="detail-value">${course.rating} </span>
        </div>
      `;

      // Update features
      const featuresContent = document.getElementById('courseFeatures');
      featuresContent.innerHTML = course.features.map(feature => `
        <div class="feature-item">
          <span class="feature-icon">✓</span>
          <span>${feature}</span>
        </div>
      `).join('');

      courseModal.classList.add('active');
    }

    function closeCourseModal() {
      courseModal.classList.remove('active');
    }

    function openRegistrationModal() {
      courseModal.classList.remove('active');
      document.getElementById('registrationPrice').textContent = currentCourse.price;
      registrationModal.classList.add('active');
      successMessage.classList.remove('show');
    }

    function closeRegistrationModalFunc() {
      registrationModal.classList.remove('active');
      registrationForm.reset();
      successMessage.classList.remove('show');
    }

    function handleRegistration(e) {
      e.preventDefault();
      
      // Basic form validation
      const formData = new FormData(registrationForm);
      const data = Object.fromEntries(formData);

      // Simulate registration process
      setTimeout(() => {
        successMessage.classList.add('show');
        registrationForm.reset();
        
        // Auto close after 3 seconds
        setTimeout(() => {
          closeRegistrationModalFunc();
        }, 3000);
      }, 1000);
    }

    // Initialize the app
    init();
    document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent default form submission

    const fullName = document.querySelector('input[name="fullName"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const country = document.querySelector('input[name="country"]').value.trim();
    const age = parseInt(document.querySelector('input[name="age"]').value.trim());
    const phone = document.querySelector('input[name="phone"]').value.trim();
    const payment = document.querySelector('select[name="payment"]').value;

    let errors = [];

    // Full Name - at least 2 words
    if (fullName.split(" ").length < 2) {
      errors.push("Please enter your full name (first and last name).");
    }

    // Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push("Please enter a valid email address.");
    }

    // Country
    if (country === "") {
      errors.push("Country is required.");
    }

    // Age
    if (isNaN(age) || age < 16 || age > 100) {
      errors.push("Age must be between 16 and 100.");
    }

    // Phone number - digits and length check
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      errors.push("Please enter a valid phone number (9 digits).");
    }

    // Payment Method
    if (payment === "") {
      errors.push("Please select a payment method.");
    }

    // Show errors or success message
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "none"; // hide it first

    if (errors.length > 0) {
      alert("⚠️ Please fix the following errors:\n\n" + errors.join("\n"));
    } else {
      successMessage.style.display = "block";
      document.getElementById("registrationForm").reset();
    }
  });