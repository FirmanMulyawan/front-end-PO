// =====================================alert register ===========================================
$(document).ready(function () {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            fullname: {
                validators: {
                    stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please enter your First Name'
                    }
                }
            },
            user_password: {
                validators: {
                    stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please enter your Password'
                    }
                }
            },
            // confirm_password: {
            //     validators: {
            //         stringLength: {
            //             min: 8,
            //         },
            //         notEmpty: {
            //             message: 'Please confirm your Password'
            //         }
            //     }
            // },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your Email Address'
                    },
                    emailAddress: {
                        message: 'Please enter a valid Email Address'
                    }
                }
            },
                position: {
                    validators: {
                        notEmpty: {
                            message: 'Please select your Position'
                        }
                    }
                },
            }
    })
        .on('success.form.bv', function (e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
            $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function (result) {
                console.log(result);
            }, 'json');
        });
});
// ========================================= check ===========================================================
var check = function () {
    if (document.getElementById('user_password').value ==
        document.getElementById('confirm_password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'not matching';
    }
}
// ===============================================fungsi register =============================================
function register() {
    var fullname = document.getElementById('fullname').value
    var position = document.getElementById('position').value
    var user_password = document.getElementById('user_password').value
    var confirm_password = document.getElementById('confirm_password').value
    var email = document.getElementById('email').value

    console.log(fullname);
    console.log(position);
    console.log(user_password);
    console.log(confirm_password);
    console.log(email)

    $.ajax({
        url: 'http://127.0.0.1:9500/addEmployee', 
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            fullname: fullname,
            position: position,
            password: user_password,
            email: email
        }),
        success: function () {
            alert("anda berhasil bergabung")
            window.location.href = 'index.html'
        },
        error: function () {
            alert("anda gagal bergabung")
        }
    })
}