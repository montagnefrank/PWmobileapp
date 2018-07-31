// jQuery & Velocity.js

function showLogin() {
    $("#register, .row, #login").hide();
    $("#login").velocity("transition.slideUpIn", 1250);
    $("#login .row").delay(500).velocity("transition.slideLeftIn", {stagger: 500})
}
;

function showReg() {
    $("#login, .row, #register").hide();
    $("#register").velocity("transition.slideUpIn", 1250);
    $("#register .row").delay(500).velocity("transition.slideLeftIn", {stagger: 500})
}
;

function shake() {
    $(".password-row").velocity("callout.shake");
}

$(document).on("click", "#signup-btn", function () {
    showReg();
});

$(document).on("click", "#signin-btn", function () {
    showLogin();
});

showLogin();


//////////////////////////////////////////////////////////////////////////
////////////////////////////// INICIAR SESION ///////////////////////////
/////////////////////////////////////////////////////////////////////////
/* Acciones a tomar al presionar el inicio de sesion  
 *  Escucha de Eventos
 *  Declaracion de Callbacks
 *  Validaciones de Formularios 
 */
$(document).on('click', '#login-button', function (e) {
    e.preventDefault;
    var username = $('#username_input').val(),
            pass = $('#password_input').val(),
            self = this;

    // CHECK FOR EMPTY FIELDS
    if (username == '') {
        $(".username-row").velocity("callout.shake");
        return false;
    }
    if (pass == '') {
        $(".password-row").velocity("callout.shake");
        return false;
    }

    // LOADING IMPORTANT
//        $(self).find('.loadingimg').show();
//        $(self).find('.titlebtn').hide();

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
});

//CALLBACK LUEGO DE INICIAR SESION
function validateLogin(data) {
    if (data.scriptResp == 'match') {
        console.log('login usuario exitoso');
//        localStorage.setItem("userData", JSON.stringify(data.userIntel));
//        localStorage.setItem("panel", "newOrder"); // DEFAULT PANEL AFTER LOGIN
//        window.location.href = "in/index.html";
        $('body').html('');
        return false;
    } else {
        $(".username-row, .password-row").velocity("callout.shake");
        return false;
    }
}


//////////////////////////////////////////////////////////////////////////
////////////////////////////// REGISTRARSE //////////////////////////////
/////////////////////////////////////////////////////////////////////////
/* Acciones a tomar al presionar el inicio de sesion  
 *  Escucha de Eventos
 *  Declaracion de Callbacks
 *  Validaciones de Formularios 
 */
$(document).on('click', '#reg-button', function (e) {
    e.preventDefault;
    var username = $('#newusername_input').val(),
            pass = $('#newpassword_input').val(),
            phone = $('#newphone_input').val(),
            self = this;

    // CHECK FOR EMPTY FIELDS
    if (username == '') {
        $(".username-row").velocity("callout.shake");
        return false;
    }
    if (pass == '') {
        $(".password-row").velocity("callout.shake");
        return false;
    }
    if (phone == '') {
        $(".phone-row").velocity("callout.shake");
        return false;
    }

    // LOADING IMPORTANT
//        $(self).find('.loadingimg').show();
//        $(self).find('.titlebtn').hide();

    $.ajax({
        url: "http://parkedwashed.burtonservers.com/api.php?meth=reg&phone=" + phone + "&username=" + username + "&password=" + pass,
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
    console.log("http://parkedwashed.burtonservers.com/api.php?meth=reg&phone=" + phone + "&username=" + username + "&password=" + pass);
});

//CALLBACK LUEGO DE INICIAR SESION
function validateReg(data) {
    if (data.scriptResp == 'regsuccess') {
        console.log('login usuario exitoso');
//        localStorage.setItem("userData", JSON.stringify(data.userIntel));
//        localStorage.setItem("panel", "newOrder"); // DEFAULT PANEL AFTER LOGIN
//        window.location.href = "in/index.html";
        $('body').html('');
        return false;
    }
    if (data.scriptResp == 'userAlreadyInDB') {
        $(".username-row, .password-row, .phone-row").velocity("callout.shake");
        return false;
    }
    if (data.scriptResp != 'regsuccess' && data.scriptResp != 'userAlreadyInDB') {
        $(".username-row, .password-row, .phone-row").velocity("callout.shake");
        return false;
    }
}

//SHAKE
//$("button").on("click", function () {
//  shake();
//});