function mainLoadOm() {
    $(".card").each(function (i) {
        $(this).attr("style", "background-color: " + ["grey", "darkgrey", "silver", "gainsboro"][i]);
    });
}
