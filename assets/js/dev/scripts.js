$(document).ready(function() {
    // Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
    if (Modernizr.mq('only all')) {
        $('html').addClass('mq');
    } else {
        $('html').addClass('no-mq');
    }
    // Mobile Menu Funcation
    $(".menu-btn").on('click touch', function() {
        $('.menu').toggleClass('show');
    });

    /* --- SnipCart Funcationality -- */

    // SnipCart: by default disable the Buy Now button
    $('.snipcart-add-item').attr('disabled', 'disabled');

    // SnipCart: Size
    $("#select-size").change(function() {
        var size = $("#select-size").val();
        var sizeText = $("#select-size option:selected").text();
        var desc = $(".snipcart-add-item").attr('data-item-description');
        console.log(sizeText);
        $(".snipcart-add-item").attr('data-item-id', size);
        $('.snipcart-add-item').removeAttr('disabled');
        // Optionally prepend the selected size to the product's description.
        $(".snipcart-add-item").attr('data-item-description', sizeText + ': ' + desc);
    });
    // SnipCart: Quantity
    $("#qty").change(function() {
        var qty = $("#qty").val();
        console.log(qty);
        $(".snipcart-add-item").attr('data-item-quantity', qty);
    });

});
