document.addEventListener('DOMContentLoaded', (event) => {
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;
        
        if (username === '' || password === '') {
            alert('Please fill in all fields');
            return;
        }
        
        alert('Login Done');
        document.querySelector('input[name="username"]').value = '';
        document.querySelector('input[name="password"]').value = '';
        document.querySelector('input[name="remember_me"]').checked = false;
        
        window.location.href = 'after-submision.html';
    });
});
