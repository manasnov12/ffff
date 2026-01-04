document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('authForm');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    // 1. Password Visibility Toggle
    togglePassword.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        togglePassword.textContent = isPassword ? 'Hide' : 'Show';
    });

    // 2. Form Submission Handling
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const userData = {
            name: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            password: passwordInput.value
        };

        console.log('Account Data:', userData);

        // Simple visual feedback on button
        const btn = authForm.querySelector('.submit-btn');
        const originalText = btn.textContent;
        btn.textContent = 'Creating Account...';
        btn.disabled = true;

        setTimeout(() => {
            alert(`Welcome, ${userData.name}! Your account has been created.`);
            btn.textContent = originalText;
            btn.disabled = false;
            // Redirect to portfolio
            // window.location.href = "index.html"; 
        }, 1500);
    });
});