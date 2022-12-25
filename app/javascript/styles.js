window.scroll_bottom = function () {
    if ($('#messages').length > 0) {
        $('#messages').scrollTop($('#messages')[0].scrollHeight);
    };
};

window.submit_message = function () {
    $('#message_body').on('keydown', function (e) {
        if (e.keyCode == 13) {
            $('button').click();
            e.target.value = "";
        }
    });
};

$(document).on('turbo:load', function () {
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
        .on('click', function () {
            $(this)
                .closest('.message')
                .transition('fade');
        });
    submit_message();
    scroll_bottom();
});