$(document).ready(function () {
    $('#btnHome').click(click.home);
    $('#btnUser').click(click.user);
});

var click = {
    home:function () {
         $.ajax({ url: '/home/nolayout'
            , type: 'GET'
            , dataType: 'html'
            })
        .done(function(data) {
            $('#dynamicContent').html(data);
        })
        .fail(function() {
            console.log("Something went wrong!");
        });
    },
    user:function () {
        $.ajax({ url: '/home/profile/nolayout'
            , type: 'GET'
            , dataType: 'html'
            })
        .done(function(data) {
           $('#dynamicContent').html(data);
        })
        .fail(function() {
            console.log("Something went wrong!");
        });
    },
    comment:function () {
        console.log('clicked on comment');
    },
    picture:function () {
        console.log('clicked on picture');
    },
    settings:function () {
        console.log('clicked on settings');
    }
};