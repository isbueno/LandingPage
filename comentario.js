const postsContainer = document.querySelector('#posts');


const comentarioForm = document.querySelector('form');
comentarioForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const usuarioInput = comentarioForm.elements.usuario;
    const livroInput = comentarioForm.elements.livro;
    const comentarioInput = comentarioForm.elements.comentario;

    addComentario(usuarioInput.value, livroInput.value, comentarioInput.value)
    usuarioInput.value = '';
    livroInput.value = '';
    comentarioInput.value = '';
});

const addComentario = function (usuario, livro, comentario) {
    const newComentario = document.createElement('li');
    const bTagUsuario = document.createElement('b');
    const pTagLivro = document.createElement('p');

    bTagUsuario.append(`Usuário: ${usuario}`);
    pTagLivro.append(bTagUsuario);

    pTagLivro.append(` — Comentou sobre o livro: ${livro}`);
    newComentario.append(pTagLivro);

    newComentario.append(`${comentario}`);
    postsContainer.append(newComentario);
}