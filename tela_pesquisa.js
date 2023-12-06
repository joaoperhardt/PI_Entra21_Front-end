$(() => {
    $("#filter-icon").click(() => {
        $("#mobile-filters-div").removeClass("hidden")
        $("#cards-div").addClass("hidden")
        return
    })

    $("#close-mobile-filters-div").click(() => {
        $("#mobile-filters-div").addClass("hidden")
        $("#cards-div").removeClass("hidden")
    })

    $("#approve-mobile-filters-div").click(() => {
        $("#mobile-filters-div").addClass("hidden")
        $("#cards-div").removeClass("hidden")
    })
})