window.addEventListener("scroll", function() {

    let navbar = document.querySelector(".navbar");

    navbar.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});
const buscador = document.getElementById("buscarJugador");

if (buscador) {

    buscador.addEventListener("keyup", function () {

        let filtro = buscador.value.toLowerCase();

        let filas = document.querySelectorAll("#tablaJugadores tbody tr");

        filas.forEach(function (fila) {

            let texto = fila.textContent.toLowerCase();

            fila.style.display =
                texto.includes(filtro)
                    ? ""
                    : "none";

        });

    });

}