function InvalidateInput(msg="", id="") {
    alert(msg)
    $(id).addClass("invalid-label")
 }

 $(() => {
    $("button-continuar").click(() => {
        const valuesJson = {
            nomeloja: $("#nome-loja")[0].value,
            descrcao: $("#descricao-loja")[0].value,
            cep: $("#cep-loja")[0].value,
            estado: $("#estado")[0].value,
            cidade: $("#cidade")[0].value,
            bairro: $("#bairro")[0].value,
            rua: $("#rua")[0].value,
            numero: $("#numero")[0].value,
            complemento: $("#complemento")[0].value,
            contato: $("#contato-loja")[0].value,
            cpf: $("#cpf-loja")[0].value,
            cnpj: $("#cnpj-loja")[0].value,
            senha: $("#senha-confirmar-loja")[0].value
        }
    })
 })