document.getElementById("searchBar").addEventListener("input", function() {
    console.log("passei aqui")
    let searchQuery = this.value.toLowerCase();
    let livros = document.querySelectorAll(".livro");

    livros.forEach(function(livro) {
        let titulo = livro.querySelector("p").innerText.toLowerCase();

        if (titulo.includes(searchQuery)) {
            livro.style.display = "block";
        } else {
            livro.style.display = "none";
        }
    });
});