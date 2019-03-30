// ======================================== LOGIN =================================================

function login() {
    var email = document.getElementById('user-email').value
    var password = document.getElementById('user-password').value
    $.ajax({
        url: 'http://127.0.0.1:9500/login',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            email: email,
            password: password,
        }),
        success: function (response) {
            alert(response.message)
            window.location.href = 'homeEmployee.html'
        },
        error: function (error) {
            alert("masukkan username dan password dengan benar")
        }
        // complete: function() {

        // }
    })
}