function InvalidateInput(msg="", id="") {
   alert(msg)
    $(id).addClass("invalid-label")
  }

  $(() => {
     $(".save-button").click(() => {
          const values = {
             name: $('#namet')[0].value,
              cep: $('#cept')[0].value,
              email: $('#emailt')[0].value,
              cellphone: $('#phonet')[0].value
          }
          console.log(values)
        
          if (!values.name) {
             InvalidateInput("Nome não informado", "#namet")
             return;
          }
         $("#namet").removeClass("invalid-label")

         if (!values.cep) {
              InvalidateInput("Cep não informado", "#cept")
              return;
          }
          else if (values.cep.length !==8){
            InvalidateInput("Cep necessita ter oito digitos", "#cept")
            return;
           }
          $("#cept").removeClass("invalid-label")

          if (!values.email) {
             InvalidateInput(" e-mail não informado", "#emailt")
              return;
          }
         
          $("#emailt").removeClass("invalid-label")

          if (!values.cellphone) {
             InvalidateInput("Telefone não informado", "#phonet")
            return;
          }
         $("#phonet").removeClass("invalid-label")
      })
  })

  