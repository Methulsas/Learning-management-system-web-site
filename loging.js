document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            const errorMessage = document.getElementById('errorMessage');
            const successMessage = document.getElementById('successMessage');
            
            // Clear previous messages
            errorMessage.classList.remove('show');
            successMessage.classList.remove('show');
            
            // Validation: any name (non-empty) and any digit(s)
            const isValidUsername = username.length > 0;
            const isValidPassword = /\d/.test(password); // Contains at least one digit
            
            if (!isValidUsername) {
                showError('Please enter a username');
                return;
            }
            
            if (!isValidPassword) {
                showError('Password must contain at least one digit');
                return;
            }
            
            // If validation passes
            showSuccess('Login successful! Welcome, ' + username + '!');
            
            // You can add redirect logic here
            setTimeout(() => {
                // window.location.href = 'dashboard.html';
                console.log('Redirecting to dashboard...');
            }, 1500);
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
        
        // Add some interactive effects
        document.querySelectorAll('.input-field').forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });