$(() => {
    $("#register-button").click(() => {
        const valuesJson = {
            cpf: $("#user-cpf")[0].value,
            cardName: $("#card-name")[0].value,
            cardNumber: $("#card-number")[0].value,
            cardCvv: $("#card-cvv")[0].value,
            cardExpiringMonth: $("#expiring-date-month")[0].value,
            cardExpiringYear: $("#expiring-date-year")[0].value
        }

        console.log(valuesJson);
    })
}) 