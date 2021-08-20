$(document).ready(() => {
    $.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
        console.log(data.ipAddress);
        var postData = {
            ip: data.ipAddress
        }
        $.ajax({
            url: 'https://scambackend.nipsuz.repl.co/post-ip',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function (res) {
                console.log(res);
            },
            data: JSON.stringify(postData)
        });
    });
});
