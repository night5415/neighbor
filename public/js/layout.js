$(document).ready(function () {
    $('#btnHome').click(click.home);
    $('#btnUser').click(click.user);
    $('#btnComment').click(click.comment);
});

var click = {
    home: function () {
        ajax.page('/home/nolayout');
    },
    user: function () {
        ajax.page('/home/profile/nolayout');
    },
    comment: function () {
        ajax.page('/home/comment/nolayout');
    },
    picture: function () {
        console.log('clicked on picture');
    },
    settings: function () {
        console.log('clicked on settings');
    }
};

var ajax = {
    page: function (url) {
        $.ajax(
            {
                url: url
                , type: 'GET'
                , dataType: 'html'
            })
            .done(function (data) {
                $('#dynamicContent').html(data);
            })
            .fail(function () {
                var errorDiv = $('<div />', {
                    "class": 'error-message',
                    text: "Sorry, an error has occured!",
                    click: function (e) {
                        e.preventDefault();
                        alert("test")
                    }
                });
                $('#dynamicContent').html(errorDiv);
            });
    }
};