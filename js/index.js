$(document).on('click', '#login-button', function () {
    $('#login-button').fadeOut("slow", function () {
        $("#container").fadeIn();
        TweenMax.from("#container", .4, {scale: 0, ease: Sine.easeInOut});
        TweenMax.to("#container", .4, {scale: 1, ease: Sine.easeInOut});
    });
});

$(".close-btn").click(function () {
    TweenMax.from("#container", .4, {scale: 1, ease: Sine.easeInOut});
    TweenMax.to("#container", .4, {left: "0px", scale: 0, ease: Sine.easeInOut});
    $("#container, #user_container , #reg_container, .msglink").fadeOut(800, function () {
        $("#login-button").fadeIn(800);
    });
});

/* newuser Password */
$('.guestlink').click(function () {
    $("#container, #user_container").fadeOut(function () {
        $("#reg_container").fadeIn();
    });
});

/* already Password */
$('.userlink').click(function () {
    $("#user_container, #reg_container").fadeOut(function () {
        $("#container").fadeIn();
    });
});

$(document).on('click', '#submitlogin', function (e) {
    e.preventDefault;
    var username = $('#username_input').val(), pass = $('#password_input').val();
    if (username == '' || pass == '') {
        $('#username_input, #password_input').attr('placeholder', 'Complete this field');
        $('#username_input, #password_input').addClass('alerted');
    } else {

        $.ajax({
            url: "http://parkedwashed.burtonservers.com/login.php?username=" + username + "&password=" + pass,
            dataType: "jsonp",
            type: "GET",
            jsonpCallback: 'validateLogin', // add this property
            contentType: "application/json; charset=utf-8",
            success: function (result, status, xhr) {
                console.log('Ajax response success');
            },
            error: function (xhr, status, error) {
                console.log("Ajax Error Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
            }
        });
    }
});

$(document).on('click', '#submitneuser', function (e) {
    e.preventDefault;
    var fullname = $('#fullname_input').val(),
            phone = $('#phone_input').val(),
            vehicle = $('#vehicle_input').val(),
            plate = $('#plate_input').val(),
            username = $('#newusername_input').val(),
            pass = $('#newpassword_input').val(),
            passconf = $('#confpassword_input').val();


    if (fullname == '' || vehicle == '' || plate == '' || username == '' || pass == '') {
        event.preventDefault();
        $.when($(".msglink").slideUp("slow")).then(function () {
            $(".msglink").html('Must fill all fields');
            console.log('empty fields');
            $(".msglink").slideDown("slow");
        });
        return false;
    } else {
        if (pass !== passconf) {
            event.preventDefault();
            $.when($(".msglink").slideUp("slow")).then(function () {
                $(".msglink").html('Passwords must match');
                console.log('Passwords must match');
                $(".msglink").slideDown("slow");
            });
            return false;
        }
        $.ajax({
            url: "http://parkedwashed.burtonservers.com/api.php?meth=reg&fullname=" + fullname + "&phone=" + phone + "&vehicle=" + vehicle + "&plate=" + plate + "&username=" + username + "&password=" + pass,
            dataType: "jsonp",
            type: "GET",
            jsonpCallback: 'validateReg', // add this property
            contentType: "application/json; charset=utf-8",
            success: function (result, status, xhr) {
                console.log('Ajax response success');
            },
            error: function (xhr, status, error) {
                console.log("Ajax Error Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
            }
        });
    }
});

$(document).on('click', '#submitlogin', function (e) {
    e.preventDefault;
    var username = $('#username_input').val(), pass = $('#password_input').val();
    if (username == '' || pass == '') {
        $('#username_input, #password_input').attr('placeholder', 'Complete this field');
        $('#username_input, #password_input').addClass('alerted');
    } else {

        $.ajax({
            url: "http://parkedwashed.burtonservers.com/api.php?meth=login&username=" + username + "&password=" + pass,
            dataType: "jsonp",
            type: "GET",
            jsonpCallback: 'validateLogin', // add this property
            contentType: "application/json; charset=utf-8",
            success: function (result, status, xhr) {
                console.log('Ajax response success');
            },
            error: function (xhr, status, error) {
                console.log("Ajax Error Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
            }
        });
    }
});

function validateLogin(data) {
    if (data.scriptResp == 'match') {
        TweenMax.from("#container", .4, {scale: 1, ease: Sine.easeInOut});
        TweenMax.to("#container", .4, {left: "0px", scale: 0, ease: Sine.easeInOut});
        $("#container, #user_container").fadeOut(800, function () {
            $("#user_container").fadeIn(800);
            $("#user_container h1").html('Welcome ' + data.nombresUsuario);
            console.log('login usuario exitoso');
        });
    } else {
        $(" .msglink").slideUp(800, function () {
            $(".msglink").html('login invalid');
            $(".msglink").slideDown(800);
            console.log('login usuario fail');
            console.log(data);
        });
    }
}
function validateReg(data) {
    if (data.scriptResp == 'regsuccess') {
        TweenMax.from("#container", .4, {scale: 1, ease: Sine.easeInOut});
        TweenMax.to("#container", .4, {left: "0px", scale: 0, ease: Sine.easeInOut});
        $("#container, #reg_container").fadeOut(800, function () {
            $("#user_container").fadeIn(800);
            $("#user_container h1").html('New User ' + data.user.fullname);
            console.log('login usuario exitoso');
        });
    }
    if (data.scriptResp == 'userAlreadyInDB') {
        $(" .msglink").slideUp(800, function () {
            $(".msglink").html('username taken');
            $(".msglink").slideDown(800);
            console.log('Reg user fail');
            console.log(data);
        });
    } 
    else {
        $(" .msglink").slideUp(800, function () {
            $(".msglink").html('registration invalid');
            $(".msglink").slideDown(800);
            console.log('Reg user fail');
            console.log(data);
        });
    }
}