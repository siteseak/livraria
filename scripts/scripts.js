const catalogoContainer = document.getElementById('catalogoContainer');
const searchInput = document.getElementById('searchInput');

function createCard(livro) {
    return `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="card">
                <img src="imagens/${livro.arquivo}" class="card-img-top" data-bs-toggle="modal" data-bs-target="#modal-${removeFileExtension(livro.arquivo)}">
                <div class="card-body">
                    <h5 class="card-title">${livro.titulo}</h5>
                    <p class="card-text">${livro.autor}</p>
                </div>
            </div>
            <div class="modal fade" id="modal-${removeFileExtension(livro.arquivo)}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${livro.titulo}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src="imagens/${livro.arquivo}" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function displayCatalogo(catalogo) {
    catalogoContainer.innerHTML = catalogo.map(createCard).join('');
}

function filterCatalogo() {
    const query = searchInput.value.toLowerCase();
    const filteredCatalogo = catalogo.filter(livro =>
        livro.titulo.toLowerCase().includes(query) || livro.autor.toLowerCase().includes(query)
    );
    displayCatalogo(filteredCatalogo);
}

searchInput.addEventListener('input', filterCatalogo);

document.addEventListener('DOMContentLoaded', () => {
    displayCatalogo(catalogo);
});

function removeFileExtension(filename) {
    return filename.split('.').slice(0, -1).join('.');
}