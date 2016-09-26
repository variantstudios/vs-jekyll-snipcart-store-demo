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
            var sizeText = $(".snipcart-add-item").attr('data-item-title');
            var desc = $(".snipcart-add-item").attr('data-item-description');
            var price  = $(this).find(':selected').attr('data-item-price');
            //console.log(price);
            $(".snipcart-add-item").attr('data-item-id', size);
            $('.snipcart-add-item').removeAttr('disabled');
            // Optionally prepend the selected size to the product's description.
            $(".snipcart-add-item").attr('data-item-description', sizeText + ': ' + desc);
            $(".snipcart-add-item").attr('data-item-price', price);
            $('span.price').html('$' + price);
        });
        // SnipCart: Quantity
        $("#qty").change(function() {
            var qty = $("#qty").val();
            var price  = $("#select-size").find(':selected').attr('data-item-price');
            //console.log(qty);
            $(".snipcart-add-item").attr('data-item-quantity', qty);
            var total = price * qty;
            //console.log(price + qty);
            $('span.price').html('$' + total);
        });


    Snipcart.execute('registerLocale', 'en', {
        "thankyou_message": "Thanks for your order on our super flabbergasting website! For your next purchase, use NEXT_ORDER discount code and get 10% off!"
    });

    Snipcart.execute('bind', 'order.completed', function(order) {
        var url = '/thankyou?order=' + order.token;
        window.location.href = url;
    });

});
