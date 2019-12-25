(function($) {
  "use strict"; // Start of use strict

    $('.input--select').select2({
        "language": {
            "noResults": function(){
                return "Không tìm thấy";
            }
        },
    });
    $('.input--select.no-search').select2({
        minimumResultsForSearch: -1
    });

    // multi modal
    $(document).on('hidden.bs.modal', '.modal', function () {
        $('.modal:visible').length && $(document.body).addClass('modal-open');
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('.btn--to-top').addClass('show');
        } else {
            $('.btn--to-top').removeClass('show');
        }
    });

    $('.btn--to-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

})(jQuery); // End of use strict
