
//Obtém todos os dados armazenados na sessão
const arrayClientes = JSON.parse(sessionStorage.arrayClientes);
let id = -1;
let inpNome = null;
let inpEmail = null;

arrayClientes.forEach(function (el) {
    const li = document.createElement('li');
    li.innerHTML = `Nome: ${el.nome}  -  E-mail: ${el.email}`;
    li.innerHTML += `  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Editar</button>`

    li.id = "id" + el.id;

    li.addEventListener('click', function (ev) {
        inpNome = document.querySelector("#nome");
        inpEmail = document.querySelector('#email');

        id = el.id;
        inpNome.value = el.nome;
        inpEmail.value = el.email;

    });

    const lista = document.querySelector('#lista');
    lista.append(li);
});


const modal = document.querySelector("#modalAlt");

modal.addEventListener('click', function (e) {
    arrayClientes.forEach(function (el) {
        if (el.id == id) {
            el.nome = inpNome.value;
            el.email = inpEmail.value;

            li = document.querySelector('#id' + el.id);
            li.innerHTML = `Nome: ${el.nome}  -  Email: ${el.email}`;
            li.innerHTML += `  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Editar</button>`
        }
    });

    sessionStorage.arrayClientes = JSON.stringify(arrayClientes);
});