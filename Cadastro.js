sessionStorage.setItem('arrayClientes', '[]');

const formulario = document.querySelector('form');

//Obtém os dados armazenados na sessão
let arrayClientes = JSON.parse(sessionStorage.arrayClientes);

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const id = arrayClientes.length;
    const nome = formulario.elements.nome.value;
    const email = formulario.elements.email.value;
    const senha = formulario.elements.senha.value;

    let usuario = {
        "id": id,
        "nome": nome,
        "email": email,
        "senha": senha
    };

    //incrementa o array com um novo cliente
    arrayClientes.push(usuario);

    //armazena todos os valores, incluindo o novo, na sessão
    sessionStorage.arrayClientes = JSON.stringify(arrayClientes);

    formulario.elements.nome.value = '';
    formulario.elements.email.value = '';
    formulario.elements.senha.value = '';

});