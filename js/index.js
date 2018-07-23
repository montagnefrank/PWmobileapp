$(document).on('click', '#login-button', function () {
    $.when(
            $('#login-button,#guest-button').fadeOut(1200)
            ).then(function () {
        $("#container").fadeIn();
        TweenMax.from("#container", .4, {scale: 0, ease: Sine.easeInOut});
        TweenMax.to("#container", .4, {scale: 1, ease: Sine.easeInOut});
    });
});
$(document).on('click', '#guest-button', function () {
    $.when(
            $('#login-button,#guest-button').fadeOut(1200)
            ).then(function () {
        $("#reg_container").fadeIn();
        TweenMax.from("#reg_container", .4, {scale: 0, ease: Sine.easeInOut});
        TweenMax.to("#reg_container", .4, {scale: 1, ease: Sine.easeInOut});
    });
});

$(".close-btn").click(function () {
    $.when(
            TweenMax.from("#container", .4, {scale: 1, ease: Sine.easeInOut}),
            TweenMax.to("#container", .4, {left: "0px", scale: 0, ease: Sine.easeInOut}),
            $("#container, #user_container , #reg_container, .msglink").fadeOut(800)
            ).then(function () {
        $("#login-button,#guest-button").fadeIn(800);
    });
});

/* newuser Password */
$('.guestlink').click(function () {
    $.when(
            TweenMax.from("#container", .4, {scale: 1, ease: Sine.easeInOut}),
            TweenMax.to("#container", .4, {left: "0px", scale: 0, ease: Sine.easeInOut}),
            $("#container, #user_container , #reg_container, .msglink").fadeOut(800)
            ).then(function () {
        $("#reg_container").fadeIn(800);
        TweenMax.from("#reg_container", .4, {scale: 0, ease: Sine.easeInOut});
        TweenMax.to("#reg_container", .4, {scale: 1, ease: Sine.easeInOut});
    });
});

/* already Password */
$('.userlink').click(function () {
    $.when(
            TweenMax.from("#reg_container", .4, {scale: 1, ease: Sine.easeInOut}),
            TweenMax.to("#reg_container", .4, {left: "0px", scale: 0, ease: Sine.easeInOut}),
            $("#reg_container, .msglink").fadeOut(800)
            ).then(function () {
        $("#container").fadeIn(800);
        TweenMax.from("#container", .4, {scale: 0, ease: Sine.easeInOut});
        TweenMax.to("#container", .4, {scale: 1, ease: Sine.easeInOut});
    });
});

$(document).on('click', '#submitneuser', function (e) {
    e.preventDefault;
    var fullname = $('#fullname_input').val(),
            phone = $('#phone_input').val(),
            vehicle = $('#vehicle_input').val(),
            plate = $('#plate_input').val(),
            username = $('#newusername_input').val(),
            pass = $('#newpassword_input').val(),
            passconf = $('#confpassword_input').val(),
            self = this;

    if (fullname == '' || vehicle == '' || plate == '' || username == '' || pass == '') {
        event.preventDefault();
        $.when(
                $(".msglink").hide()
                ).then(function () {
            console.log('empty fields');
            $(".msglink").show();
            setTimeout(function () {
                $(".msglink").hide();
            }, 4000);
            $(".msglink").html('Must fill all fields');
        });
        return false;
    } else {
        if (pass !== passconf) {
            event.preventDefault();
            $.when(
                    $(".msglink").hide()
                    ).then(function () {
                console.log('Passwords must match');
                $(".msglink").show();
                setTimeout(function () {
                    $(".msglink").hide();
                }, 4000);
                $(".msglink").html('Passwords must match');
            });
            return false;
        }
        $(self).find('.loadingimg').show();
        $(self).find('.titlebtn').hide();
        $.ajax({
            url: "http://parkedwashed.burtonservers.com/api.php?meth=reg&fullname=" + fullname + "&phone=" + phone + "&vehicle=" + vehicle + "&plate=" + plate + "&username=" + username + "&password=" + pass,
            dataType: "jsonp",
            type: "GET",
            jsonpCallback: 'validateReg', // add this property
            contentType: "application/json; charset=utf-8",
            success: function (result, status, xhr) {
                console.log('Ajax response success');
                $(self).find('.loadingimg').hide();
                $(self).find('.titlebtn').show();
            },
            error: function (xhr, status, error) {
                console.log("Ajax Error Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
                $(self).find('.loadingimg').hide();
                $(self).find('.titlebtn').show();
            }
        });
    }
});

$(document).on('click', '#submitlogin', function (e) {
    e.preventDefault;
    var username = $('#username_input').val(), pass = $('#password_input').val(),
            self = this;
    ;
    if (username == '' || pass == '') {
        $('#username_input, #password_input').attr('placeholder', 'Complete this field');
        $('#username_input, #password_input').addClass('alerted');
    } else {

        $(self).find('.loadingimg').show();
        $(self).find('.titlebtn').hide();
        $.ajax({
            url: "http://parkedwashed.burtonservers.com/api.php?meth=login&username=" + username + "&password=" + pass,
            dataType: "jsonp",
            type: "GET",
            jsonpCallback: 'validateLogin', // add this property
            contentType: "application/javascript; charset=utf-8",
            success: function (result, status, xhr) {
                console.log('Ajax response success');
                $(self).find('.loadingimg').hide();
                $(self).find('.titlebtn').show();
            },
            error: function (xhr, status, error) {
                console.log("Ajax Error Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
                $(self).find('.loadingimg').hide();
                $(self).find('.titlebtn').show();
            }
        });
        console.log("http://parkedwashed.burtonservers.com/api.php?meth=login&username=" + username + "&password=" + pass);
    }
});

function validateLogin(data) {
    if (data.scriptResp == 'match') {
        $.when(
                TweenMax.from("#container", .4, {scale: 1, ease: Sine.easeInOut}),
                TweenMax.to("#container", .4, {left: "0px", scale: 0, ease: Sine.easeInOut}),
                $("#container, .msglink").fadeOut(800)
                ).then(function () {
            $("#user_container h1").html('Welcome ' + data.nombresUsuario);
            console.log('login usuario exitoso');
            localStorage.setItem("userData", JSON.stringify(data.userIntel));
            localStorage.setItem("panel", "newOrder"); // DEFAULT PANEL AFTER LOGIN
            window.location.href = "/src";
        });
    } else {
        $.when(
                $(".msglink").hide()
                ).then(function () {
            console.log('login usuario fail');
            $(".msglink").show();
            setTimeout(function () {
                $(".msglink").hide();
            }, 4000);
            $(".msglink").html('login failed');
        });
        return false;
    }
}
function validateReg(data) {
    if (data.scriptResp == 'regsuccess') {
        $.when(
                TweenMax.from("#reg_container", .4, {scale: 1, ease: Sine.easeInOut}),
                TweenMax.to("#reg_container", .4, {left: "0px", scale: 0, ease: Sine.easeInOut}),
                $("#reg_container").fadeOut(800)
                ).then(function () {
            $("#user_container h1").html('New User ' + data.user.fullname);
            console.log('login usuario exitoso');
            window.location.href = "/src";
        });
    }
    if (data.scriptResp == 'userAlreadyInDB') {
        $.when(
                $(".msglink").hide()
                ).then(function () {
            console.log('Reg user fail');
            $(".msglink").show();
            setTimeout(function () {
                $(".msglink").hide();
            }, 4000);
            $(".msglink").html('username taken');
        });
    }
    if (data.scriptResp != 'regsuccess' && data.scriptResp != 'userAlreadyInDB') {
        $.when(
                $(".msglink").hide()
                ).then(function () {
            console.log('Reg user fail');
            $(".msglink").show();
            setTimeout(function () {
                $(".msglink").hide();
            }, 4000);
            $(".msglink").html('registration invalid');
        });
    }
}

setTimeout(function () {
    $('#sliderslick').slick({
        dots: false,
        infinite: true,
        speed: 300,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1000
    });
}, 1000);

$(document).on('click', '.sliderimg', function () {
    var vehmod = $(this).attr('vehicle');
    $('#vehicle_input').val(vehmod);
});