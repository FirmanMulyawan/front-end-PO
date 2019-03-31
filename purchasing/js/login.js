// ======================================== LOGIN =================================================

function login() {
    var email = document.getElementById('user-email').value
    var password = document.getElementById('user-password').value
    var position = document.getElementById('position').value

    $.ajax({
        url: 'http://127.0.0.1:9500/login',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            email: email,
            password: password,
            position: position
        }),
        success: function (response) {
            alert(response.message)
            // window.location.href = 'homeEmploye.html'
            if (position == 'employee')
                window.location.href = 'homeEmploye.html';
            else if (position == 'manager')
                window.location.href = 'homeManager.html';
            else if (position == 'scm_reviewer')
                window.location.href = 'homeSCMReviewer.html';
            else if (position == 'contract_owner')
                window.location.href = 'homeOwner.html';
        },
        error: function (error) {
            alert("masukkan username dan password dengan benar")
            window.location.href = 'login.html'
        }
        
    })
}