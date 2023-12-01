function validateLogin(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorDiv = document.getElementById('error-message');

    if (!email || !password) {
        showError('Por favor, complete todos los campos.');
        return;
    }

    if (!validarContrasena(password)) {
        showError('La contraseña debe contener al menos 8 caracteres, incluidos al menos 1 letra mayúscula, 1 letra minúscula, 2 dígitos y 1 carácter especial.');
        return;
    }
    // ... (existing code)

 // Function to clear the form fields


 // ... (existing code)


    errorDiv.style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    validarUsuario(email, password)
        .then(function (isValidUser) {
            if (isValidUser) {
                // Redirigir al panel después de 2 segundos
                setTimeout(function () {
                    window.location.href = '/main.html';
                }, 2000);
            } else {
                // Mostrar mensaje de credenciales incorrectas
                document.getElementById('loading').style.display = 'none';
                showError('Correo electrónico o contraseña incorrectos.');
            }
        })
        .catch(function (error) {
            console.error('Error al validar el usuario:', error);
            document.getElementById('loading').style.display = 'none';
            showError('Ha ocurrido un error. Por favor, intente de nuevo más tarde.');
        });
}
function clearForm() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('error-message').style.display = 'none';
}

function validarContrasena(password) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

function validarUsuario(email, password) {
    var usuariosAutorizados = {
        'bakiyo': 'Ickkck2002*',
        'bakigod': 'Ickkck0618*',
        'bakimalo': 'Ickkck1001*'
    };

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(usuariosAutorizados[email] === password);
        }, 2000);
    });
}

function showError(message) {
    var errorDiv = document.getElementById('error-message');
    errorDiv.innerText = message;
    errorDiv.style.display = 'block';
}
