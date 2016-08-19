$(document).ready(function () {
    $('#btnSubmit').click(click.login);

});

var click = {
    login: function () {
        window.location.href = '/home'
    } 
};