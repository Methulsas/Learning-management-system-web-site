// Password strength checker
        document.getElementById('password').addEventListener('input', function() {
            const password = this.value;
            const strengthIndicator = document.getElementById('passwordStrength');
            
            if (password.length === 0) {
                strengthIndicator.textContent = '';
                return;
            }
            
          
        });

        // Form validation
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const phone = document.getElementById('phone').value.trim();
            const agreeTerms = document.getElementById('agreeTerms').checked;
            
            const errorMessage = document.getElementById('errorMessage');
            const successMessage = document.getElementById('successMessage');
            
            // Clear previous messages
            errorMessage.classList.remove('show');
            successMessage.classList.remove('show');
            
            // Validation
            if (!firstName) {
                showError('First name is required');
                return;
            }
            
            if (!lastName) {
                showError('Last name is required');
                return;
            }
            
            if (!email || !isValidEmail(email)) {
                showError('Please enter a valid email address');
                return;
            }
            
            if (!username || username.length < 3) {
                showError('Username must be at least 3 characters long');
                return;
            }
            
            if (!password || password.length < 6) {
                showError('Password must be at least 6 characters long');
                return;
            }
            
            if (!/\d/.test(password)) {
                showError('Password must contain at least one digit');
                return;
            }
            
            if (password !== confirmPassword) {
                showError('Passwords do not match');
                return;
            }
            
            if (!agreeTerms) {
                showError('You must agree to the Terms of Service and Privacy Policy');
                return;
            }
            
            // If all validation passes
            showSuccess(`Account created successfully! Welcome, ${firstName}!`);
            
            // You can add registration logic here
            setTimeout(() => {
                // window.location.href = 'login.html';
                console.log('Registration successful, redirecting to login...');
            }, 2000);
        });
        
        function showError(message) {
            const errorMessage = document.getElementById('errorMessage');
            errorMessage.textContent = message;
            errorMessage.classList.add('show');
        }
        
        function showSuccess(message) {
            const successMessage = document.getElementById('successMessage');
            successMessage.textContent = message;
            successMessage.classList.add('show');
        }
        
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        
        // Interactive effects
        document.querySelectorAll('.input-field').forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });