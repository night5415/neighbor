$(document).ready(function () {
    $('#btnSubmit').click(click.submitComment);
});

click.submitComment = function () {
    ajax.postComment('/comment/submit');

};

ajax.postComment = function (url) {
    $.ajax({
        url: '/comment/post',
        type: 'POST',
        data: JSON.stringify({ args: $('.form-control').val() }),
        contentType: 'application/json',
        success: function (data) {
            alert(data)
        }
        , error: function (jqXHR, textStatus, err) {
            alert('text status ' + textStatus + ', err ' + err)
        } 
    });
};


 