document.getElementById("form-validation").addEventListener("submit", function(event) {
event.preventDefault(); 

    var numeroA = parseFloat(document.getElementById("numeroA").value);
    var numeroB = parseFloat(document.getElementById("numeroB").value);
    var formulario = document.getElementById('form-validation')

    const mensagemSucesso = `Válido, o número "B":   <b>${numeroB}</b> é maior que o número "A":   <b>${numeroA}</b>`;
    const mensagemNaoSucesso = `Não válido, o número "A":   <b>${numeroB}</b> é maior que o número "B":   <b>${numeroA}</b>`;

    if (numeroB > numeroA) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        const containerMensagemNaoSucesso = document.querySelector('.not-success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemNaoSucesso.style.display = 'none';
    } else {
        const containerMensagemNaoSucesso = document.querySelector('.not-success-message');
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemNaoSucesso.innerHTML = mensagemNaoSucesso;
        containerMensagemNaoSucesso.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
    }
    formulario.reset();
});

