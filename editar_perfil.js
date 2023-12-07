function InvalidateInput(msg="", id="") {
    alert(msg)
    $(id).addClass("invalid-label")
}

$(() => {
    $(".save-button").click(() => {
        const values = {
            name: $('#name')[0].value,
            cep: $('#cep')[0].value,
            email: $('#email')[0].value,
            cellphone: $('#phone')[0].value
        }
        console.log(values)
        
        if (!values.name) {
            InvalidateInput("Nome não informado", "#name")
            return;
        }
        $("#name").removeClass("invalid-label")

        if (!values.cep) {
            InvalidateInput("Nome não informado", "#name")
            return;
        }
        $("#cep").removeClass("invalid-label")

        if (!values.email) {
            InvalidateInput("Nome não informado", "#name")
            return;
        }
        $("#email").removeClass("invalid-label")

        if (!values.cellphone) {
            InvalidateInput("Nome não informado", "#name")
            return;
        }
        $("#cellphone").removeClass("invalid-label")
    })
})