$(() => {
    $(".add-to-cart-button").click(() => {
        const productJson = {
            name: $(".product-name")[0].innerHTML,
            price: $(".product-price")[0].innerHTML.replace(",", "."),
            discountPercentage: $(".discount-tag")[0].innerHTML,
            quantity: $(".product-quantity-setter")[0].value,
            freight: $(".product-freight")[0].innerHTML.replace(",", "."),
            volunteers: String(parseInt($(".product-volunteers")[0].innerHTML) + 1),
            volunteersNeeded: $(".product-volunteers-needed")[0].innerHTML 
        }
        console.log(productJson)
    })
})