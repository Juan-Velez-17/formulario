document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    const message = document.getElementById('message');

    if (password !== passwordConfirm) {
        message.innerHTML = 'Las contraseñas no coinciden.';
        return;
    }

    // En este punto, puedes enviar los datos del formulario a tu servidor para su procesamiento.
    // Puedes usar fetch() o una solicitud AJAX para enviar los datos.

    // Por ejemplo:
    // fetch('tu_url_de_registro', {
    //     method: 'POST',
    //     body: JSON.stringify({ username, email, password }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         message.innerHTML = 'Registro exitoso.';
    //     } else {
    //         message.innerHTML = 'Error en el registro.';
    //     }
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    //     message.innerHTML = 'Error en el registro.';
    // });

    // Aquí puedes agregar tu lógica de registro o conexión a la base de datos.

    // Limpia el formulario después del registro exitoso.
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('passwordConfirm').value = '';
    message.innerHTML = 'Registro exitoso.';
});
