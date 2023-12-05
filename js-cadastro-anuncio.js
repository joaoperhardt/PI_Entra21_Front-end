
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

        // pega os dados preenchidos.
        const dadosFormulario = {};
        $("form :input").each(function () {
            dadosFormulario[this.id] = $(this).val();
        });

        // exibe no console o que foi preenchido.
        console.log("Dados do formulário:", dadosFormulario);

});
