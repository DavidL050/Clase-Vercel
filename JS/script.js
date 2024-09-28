document.addEventListener("DOMContentLoaded", () => {
    const validateForm = (form, fields) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            for (let field of fields) {
                if (!document.getElementById(field).value) {
                    alert("Por favor complete todos los campos.");
                    return;
                }
            }
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirm-password');
            if (confirmPassword && password.value !== confirmPassword.value) {
                alert("Las contraseñas no coinciden.");
                return;
            }
            alert("Formulario válido.");
            window.location.href = "ok.html";  // Redirigir a ok.html tras validación
        });
    };

    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');

    if (loginForm) validateForm(loginForm, ['username', 'password']);
    if (registerForm) validateForm(registerForm, ['cedula', 'nombre', 'apellidos', 'telefono', 'password', 'confirm-password']);
});
