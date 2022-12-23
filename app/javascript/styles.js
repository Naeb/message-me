$(document).on ('turbo:load', function () {
    $('.ui.menu .ui.dropdown').dropdown({
        on: 'hover'
    });
    $('.ui.menu a.item')
        .on('click', function () {
            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active');
        });
        $('.message .close')
        .on('click', function() {
          $(this)
            .closest('.message')
            .transition('fade');
        });
});