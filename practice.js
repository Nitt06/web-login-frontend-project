document.addEventListener('DOMContentLoaded', (event) => {
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Form submitted');
        
        document.querySelector('input[name="username"]').value = '';
        document.querySelector('input[name="password"]').value = '';
        document.querySelector('input[name="remember_me"]').checked = false;
    });
});
