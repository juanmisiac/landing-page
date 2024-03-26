const btn = document.getElementById('btn-enviar');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_zwaqfnc';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Enviar';
            form.append("Correo enviado!");
        }, (err) => {
            btn.value = 'Enviar';
            alert(JSON.stringify(err));
        });
});