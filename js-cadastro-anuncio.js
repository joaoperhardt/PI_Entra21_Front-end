
$(function () {
    const anuncio = {
        titulo: "",
        descricao: "",
        categoria: "",
        tipo: "",
        valor: "R$ ",
        quantidadeDisponivel: 10
    };

    // preenche as caixas de texto.
    $.each(anuncio, function (campo, valor) {
        $("#" + campo).val(valor);
    });

    // evento de para enviar formulario.
    $("form").submit(function (event) {
        event.preventDefault();

});
