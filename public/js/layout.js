$(document).ready(function () {
    $('#btnHome').click(click.home);
    $('#btnUser').click(click.user);
    $('#btnComment').click(click.comment);
});
$(document).ajaxStart(function () {
    $(".loader").show();
});
$(document).ajaxComplete(function () {
    $(".loader").hide();
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
                var current = $('#dynamicContent');
                current.fadeOut(300, function () {
                    current.html(data).fadeIn(300);
                });

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