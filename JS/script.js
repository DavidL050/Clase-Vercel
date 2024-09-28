document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Validación: ambos deben ser "admin"
        if (username === 'admin' && password === 'admin') {
            

             window.location.href = "register.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
});
