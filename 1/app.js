
document.getElementById('Sign-up').addEventListener('submit', function(event) {
            event.preventDefault()
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
                alert('Invalid email format. Please enter a valid email address.');
                return;
            }
            const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
if (!passwordRegex.test(password)) {
                alert('Password must be at least 8 characters and contain at least one uppercase letter, one special character, and one number.');
                return;
            }
            alert('Sign-up successful!');
        });
