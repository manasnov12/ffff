document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.submit-btn');
    btn.innerHTML = 'Signing In...';
    btn.style.opacity = '0.7';

    setTimeout(() => {
        alert('Welcome back to Infinity!');
        btn.innerHTML = 'Authorize';
        btn.style.opacity = '1';
    }, 1500);
});