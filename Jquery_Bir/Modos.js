//Modos Pagina
$(document).ready(function () {
    $(".modos").click(function () {
        $("body").toggleClass("modo-oscuro");
        // Cambiar imagen dentro del botón según el modo
        let img = $(this).find("img");
        if ($("body").hasClass("modo-oscuro")) {
            img.attr("src", "./claro.png");
        } else {
            img.attr("src", "./oscuro.png");
        }
    });
});
