$(document).ready(function () {
    $('#btnSubmit').click(click.login);
});

var click = {
    login: function () {
        var userName = $('#txtUserName').val();
        var passWord = $('#txtPassWord').val();
        login.check(userName, passWord);

    }
};

var login = {
    check: function (usr, pass) {
        $.ajax({
            url: '/auth/login',
            type: 'POST',
            data: JSON.stringify({ userName: usr, passWord : pass }),
            contentType: 'application/json',
            success: function (data) {
                 window.location.href = '/home'
            }
            , error: function (jqXHR, textStatus, err) {
                alert('text status ' + textStatus + ', err ' + err)
            }
        });

    }
};


