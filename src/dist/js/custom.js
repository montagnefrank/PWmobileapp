/*
 * ================
 * Custom JS file by BurtonTech.
 * It controls layout options and plugins.
 * @license MIT <http://opensource.org/licenses/MIT>
 */


// ADD SLIDEDOWN ANIMATION TO DROPDOWN-MENU
$('.dropdown').on('show.bs.dropdown', function (e) {
    $('.dropdown-menu').removeClass('invisible');
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});
// ADD SLIDEUP ANIMATION TO DROPDOWN-MENU
$('.dropdown').on('hide.bs.dropdown', function (e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

// BUILGIND USER DATA ARRAY FROM STORAGE JSON
function userParams(user) {
    var user = $.parseJSON(localStorage.getItem("userData"));
    return user;
}

// LOAD USER INFO INTO DE INTERFACE
function refreshUser(userData) {
    user = userParams();
    $('.userFullname').html(user.nombresUsuario);
    $('.userFullname_input').val(user.nombresUsuario);
    if (user.userImg != 'default') {
        $('.userImg').attr('src', 'http://parkedwashed.burtonservers.com/assets/img/users/' + user.nombreUsuario + '.jpg');
        $('.userImg').attr('alt', user.nombresUsuario);
    }
    $('.userNameEmail').html(user.nombresUsuario + ' <small>' + user.phoneUsuario + ' </small>');
    $('.userMobilePhone').html(user.phoneUsuario);
    $('.userMobilePhone_input').val(user.phoneUsuario);
    $('.userVehicle').html(user.vehiculoUsuario);
    $('.userVehicle_input').val(user.vehiculoUsuario);
    $('.userPlate').html(user.placaUsuario);
    $('.userPlate_input').val(user.placaUsuario);
    $('.userEmail').html(user.emailUsuario);
    $('.userEmail_input').val(user.emailUsuario);
    $('.userStatus').html(user.statusUsuario);
    $('.userRegistration').html(user.fechaingresoUsuario);
    $('.userUsername').html(user.nombreUsuario);
    $('.userId_input').val(user.idUsuario);
}

// PANEL NAVIGATION
function loadPanel(panelObj) {
    panel = $(panelObj).attr('gotopanel');
    panelTitle = $(panelObj).attr('paneltitle');
    $.when(
            localStorage.setItem("panel", panel),
            $('.mainPanels').slideUp('slow'))
            .then(function () {
                $('.mainpaneltitle').html(panelTitle);
                $('.breadcrumb_container').html('<li><a href="#">P&W</a></li<li><i class="fa fa-angle-right"></i> ' + panelTitle + '</li>');
                $('.panel_' + panel).slideDown('slow');
                $('body').removeClass('sidebar-open');
            });
}

// FETCH MODELS FROM SERVER
function getModels() {
    var formData = new FormData();
    formData.append('meth', 'updateModels');

    $.ajax({
        url: 'http://parkedwashed.burtonservers.com/api.php',
        type: 'POST',
        data: formData,
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.ajaxStatus == 'ok') {
                localStorage.setItem("models", JSON.stringify(data.vehmods));
                var options = '';
                $(data.vehmods).each(function (index, element) {
                    options += '<option value=' + element.idModel + '>' + element.titleModel + '</option>';
                });
                $('#vehicle_input').html(options);
                $('#newvehicle_input').html(options);
            } else {
                console.log(data);
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

// FETCH VEHICLES FROM SERVER
function getVehs() {
    var formData = new FormData(),
            userdata = userParams();
    formData.append('meth', 'getVehs');
    formData.append('idUsuario', userdata.idUsuario);

    $.ajax({
        url: 'http://parkedwashed.burtonservers.com/api.php',
        type: 'POST',
        data: formData,
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.ajaxStatus == 'ok') {
                var vehCode = '', newoVehs = '', lastw;
                if (JSON.stringify(data.vehicles) == null) {
                    vehCode += '<div class="col-lg-12 col-sm-12 col-xs-12 m-b-12 vehiclePreview width80" onclick="loadPanel($(\'.panelBtn[gotopanel=garage]\').get(0))"> ' +
                            '    <div class="card">' +
                            '      <div class="card-body box-rounded box-gradient-4"> <span class="info-box-icon bg-transparent"><i class="ti-face-sad text-white"></i></span>' +
                            '        <div class="info-box-content">' +
                            '          <h6 class="info-box-text text-white">There are no parked rides</h6>' +
                            '          <h1 class="text-white">Garage is empty</h1>' +
                            '          <span class="progress-description text-white"> Park your rides now! </span> </div>' +
                            '      </div>' +
                            '    </div>' +
                            '  </div>';

                    $('#vehiclespanels').html(vehCode);
                    $('#sliderslick').html(vehCode);
                } else {
                    localStorage.setItem("vehicles", JSON.stringify(data.vehicles));
                    $(data.vehicles).each(function (index, element) {
                        if (element.lastwashedVehicle == 'new') {
                            lastw = 'New in Garage';
                        } else {
                            lastw = element.lastwashedVehicle;
                        }
                        vehCode += '<div class=" col-lg-3 col-sm-6 m-b-3 "> ' +
                                '          <div class="col-img-hover margin">' +
                                '              <div class="img-hover-st-3">' +
                                '                  <div class="imgbox"><img src="http://parkedwashed.burtonservers.com/assets/img/model/' + element.imgModel + '.jpg" alt=""></div>' +
                                '                  <div class="text">' +
                                '                      <h3 class="f-20 m-b-2">' + element.nameVehicle + '</h3>' +
                                '                      <p>Plate: ' + element.plateVehicle + ' <br /> Last washed: ' + lastw + '</p>' +
                                '                      <a class="btn btn-default deleteVehBtn" href="#" vehicleid="' + element.idVehicle + '"> <span class="titlebtn"><i class="fa fa-trash"></i> Delete Vehicle </span><img class="loadingimg" src="../img/loading.gif" /></a></div>' +
                                '              </div>' +
                                '          </div>' +
                                '      </div>';
                        newoVehs += '<img class="vehicleImg" src="http://parkedwashed.burtonservers.com/assets/img/model/' + element.imgModel + '.jpg" vehicle="' + element.nameVehicle + '" vehicleid="' + element.idVehicle + '"/>';
                    });
                    $('#vehiclespanels').html(vehCode);
                    $('.vehiclesUserWiz').html(newoVehs);
                }
            } else {
                console.log(data);
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

// ALERT MESSAGES
function alertPopup(level, message) {
    $('.alertMessageBox').html(message);
    $('.alertbox')
            .removeClass(' alert-secondary alert-success alert-danger alert-warning alert-info alert-light alert-dark alert-primary')
            .addClass('alert-' + level);
    setTimeout(function () {
        $('.alertbox').slideDown('slow');
    }, 700);
    $('html, body').animate({scrollTop: 0}, 'slow');
}

// DELETE VEHICLE FROM DB
$(document).on('click', '.deleteVehBtn', function (e) {
    e.preventDefault();
    var self = this,
            formData = new FormData();

    $(self).find('.titlebtn').hide();
    $(self).find('.loadingimg').show();

    formData.append('idVehicle', $(self).attr('vehicleid'));
    formData.append('meth', 'deleteVeh');
    $.ajax({
        url: 'http://parkedwashed.burtonservers.com/api.php',
        type: 'POST',
        data: formData,
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.ajaxStatus == 'ok') {
                loadPanel($('.panelBtn[gotopanel=garage]').get(0));
                alertPopup('danger', 'Vehicle has been Deleted');
                getVehs(); // LIST OF VEHICLES
            } else {
                console.log(data);
            }
            $(self).find('.loadingimg').hide();
            $(self).find('.titlebtn').show();
        },
        error: function (error) {
            console.log(error);
            $(self).find('.loadingimg').hide();
            $(self).find('.titlebtn').show();
        }
    });
});

// UPDATE USER PROFILE
$(document).on('click', '.updateProfileBtn', function (e) {
    e.preventDefault();
    var fullname = $('#fullname_input').val(),
            phone = $('#phone_input').val(),
            vehicle = $('#vehicle_input').val(),
            plate = $('#plate_input').val(),
            pass = $('#pass_input').val(),
            passconf = $('#passConf_input').val(),
            email = $('#email_input').val(),
            profileImg = $('#input-file-max-fs').get(0).files[0],
            self = this,
            formData = new FormData(),
            userdata = userParams();

    $(self).find('.titlebtn').hide();
    $(self).find('.loadingimg').show();


    //CHECKING FOR EMPTY FIELDS
    if (fullname == '' || phone == '' || plate == '' || email == '' || vehicle == '') {
        alertPopup('danger', 'All fields are required');
        $(self).find('.loadingimg').hide();
        $(self).find('.titlebtn').show();
        return;
    } else {
        formData.append('fullname', fullname);
        formData.append('phone', phone);
        formData.append('plate', plate);
        formData.append('vehicle', vehicle);
    }

    // CHECK IF PASSWRODS MATCH
    if (pass == '') {
        formData.append('updatePass', 'false');
    } else {
        if (pass === passconf) {
            formData.append('updatePass', 'true');
            formData.append('pass', pass);
        } else {
            alertPopup('danger', 'Passwords do not match');
            $(self).find('.loadingimg').hide();
            $(self).find('.titlebtn').show();
            return;
        }
    }

    //CHECKING VALID EMAIL ADDRESS
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (!testEmail.test(email)) {
        alertPopup('danger', 'You must provide a valid Email address');
        $(self).find('.loadingimg').hide();
        $(self).find('.titlebtn').show();
        return;
    } else {
        formData.append('email', email);
    }

    // CHECK IF AN IMAGE WAS UPLOADED
    if (document.getElementById("input-file-max-fs").files.length == 0) {
        formData.append('uploadimage', 'false');
    } else {
        formData.append('uploadimage', 'true');
        formData.append('image', profileImg);
    }

    formData.append('meth', 'updateUser');
    formData.append('username', userdata.nombreUsuario);

    $.ajax({
        url: 'http://parkedwashed.burtonservers.com/api.php',
        type: 'POST',
        data: formData,
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.ajaxStatus == 'ok') {
                loadPanel($('.panelBtn[gotopanel=profile]').get(0));
                alertPopup('success', 'User has been updated');
                localStorage.setItem("userData", JSON.stringify(data.userIntel));
                refreshUser();
            } else {
                console.log(data);
            }
            $(self).find('.loadingimg').hide();
            $(self).find('.titlebtn').show();
        },
        error: function (error) {
            console.log(error);
            $(self).find('.loadingimg').hide();
            $(self).find('.titlebtn').show();
        }
    });
});

// SUBMIT NEW VEHICLE
$(document).on('click', '.newVehicleBtn', function (e) {
    e.preventDefault();
    var nameVeh = $('#nameVeh_input').val(),
            plateVeh = $('#plateVeh_input').val(),
            modelVeh = $('#newvehicle_input').val(),
            self = this,
            formData = new FormData(),
            userdata = userParams();

    $(self).find('.titlebtn').hide();
    $(self).find('.loadingimg').show();

    if (nameVeh == '' || plateVeh == '' || modelVeh == '') {
        alertPopup('danger', 'All fields are required');
        $(self).find('.loadingimg').hide();
        $(self).find('.titlebtn').show();
        return;
    } else {
        formData.append('nameVeh', nameVeh);
        formData.append('plateVeh', plateVeh);
        formData.append('modelVeh', modelVeh);
    }

    formData.append('meth', 'newVehicle');
    formData.append('userid', userdata.idUsuario);

    $.ajax({
        url: 'http://parkedwashed.burtonservers.com/api.php',
        type: 'POST',
        data: formData,
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.ajaxStatus == 'ok') {
                loadPanel($('.panelBtn[gotopanel=garage]').get(0));
                alertPopup('success', 'New vehicle parked in your Garage');
                getVehs(); // LIST OF VEHICLES
            } else {
                console.log(data);
            }
            $(self).find('.loadingimg').hide();
            $(self).find('.titlebtn').show();
        },
        error: function (error) {
            console.log(error);
            $(self).find('.loadingimg').hide();
            $(self).find('.titlebtn').show();
        }
    });
});

// ONCE THE APP IS DONE LOADING
$(document).ready(function () {
    refreshUser(); // LOAD USER DETAILS
    getModels(); // LIST OF VEHICLE MODELS
    getVehs(); // LIST OF VEHICLES
    loadPanel($('.panelBtn[gotopanel=' + localStorage.getItem("panel") + ']').get(0)); //FIRST PANEL TO SHOW

    // NEW CLASS TO CLOSE THE SIDEBAR
    $(document).on('click', '.closeSidebar', function () {
        $('body').removeClass('sidebar-open');
    });

    // HIDE THE ALERT WINDOW ON CLICK
    $(document).on('click', 'body', function () {
        $('.alert').slideUp('slow');
    });


    $(document).on('click', '.testEvent', function () {
//        refreshUser(); // LOAD USER DETAILS
//        $('html, body').animate({scrollTop: 0}, 'slow');
//        console.log($('.location_input').val());
    });

    // PANEL NAVIGATION EVENT LISTENER
    $(document).on('click', '.panelBtn', function () {
        var self, panel;
        self = this;
        loadPanel(self);
    });

    // New Order wizzard
    $('#demo').steps({
        onFinish: function () {
            
            var self = this,
                    formData = new FormData();

            loadPanel($('.panelBtn[gotopanel=history]').get(0));       
            formData.append('idUser_newo', $('#idnameConf').val());
            formData.append('veh_newo', $('#idvehConf').val());
            formData.append('gps_newo', $('#gpsConf').val());
            formData.append('price_newo', $('#priceConf').val());
            formData.append('payment_newo', $('#methodConf').val());
            formData.append('meth', 'newOrder');
            $.ajax({
                url: 'http://parkedwashed.burtonservers.com/api.php',
                type: 'POST',
                data: formData,
                dataType: "json",
                cache: false,
                contentType: false,
                processData: false,
                success: function (data) {
                    if (data.ajaxStatus == 'ok') {
                        loadPanel($('.panelBtn[gotopanel=history]').get(0));
                        alertPopup('success', 'Order successfully Placed');
                        getVehs(); // LIST OF VEHICLES
                    } else {
                        console.log(data);
                    }
                    $(self).find('.loadingimg').hide();
                    $(self).find('.titlebtn').show();
                },
                error: function (error) {
                    console.log(error);
                    $(self).find('.loadingimg').hide();
                    $(self).find('.titlebtn').show();
                }
            });
        }
    });

    // Blur other Vehicles on Tap
    $(document).on('click', '.vehicleImg', function () {
        $(this).removeClass('opa40').addClass('selectedVeh').siblings().addClass('opa40 ');
        $('.selectedVeh_name').html(' ' + $(this).attr('vehicle'));
    });

    // OBTENEMOS LA UBICACION EN COORDENADAS DEL DISPOSITIVO
    tryGeolocation();

    // CONFIRMAMOS LOS DATOS ANTES DE CARGAR EL PEDIDO
    $(document).on('click', 'button[data-direction=next]', function () {
        if ($('#step4').hasClass("active")) {
            //VALIDAMOS QUE HAYA SELECCIONADO EL VEHICULO
            if ($(".selectedVeh").length) {
                $('#vehConf').val($('.selectedVeh_name').html());
                $('#idvehConf').val($('.selectedVeh').attr('vehicleid'));
                $('button[data-direction=finish]').removeAttr('disabled');
                $('#vehConf').parent().removeClass('has-error');
            } else {
                $('#vehConf').parent().addClass('has-error');
                alertPopup('danger', 'You must select the vehicle');
                $('button[data-direction=finish]').attr('disabled', 'disabled');
            }
            $('#gpsConf').val($('.location_input').val());
            $('#priceConf').val($('.priceOrderContainer').html());
            $('#methodConf').val($('#confPaymentMeth').val());
        }
    });
});

// DROPIFY CUSTOM
$(document).ready(function () {
    // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-déposez un fichier ici ou cliquez',
            replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            remove: 'Supprimer',
            error: 'Désolé, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('#input-file-events').dropify();

    drEvent.on('dropify.beforeClear', function (event, element) {
        return confirm("Do you really want to delete \"" + element.file.name + "\" ?");
    });

    drEvent.on('dropify.afterClear', function (event, element) {
        alert('File deleted');
    });

    drEvent.on('dropify.errors', function (event, element) {
        console.log('Has Errors');
    });

    var drDestroy = $('#input-file-to-destroy').dropify();
    drDestroy = drDestroy.data('dropify')
    $('#toggleDropify').on('click', function (e) {
        e.preventDefault();
        if (drDestroy.isDropified()) {
            drDestroy.destroy();
        } else {
            drDestroy.init();
        }
    })
});


////    DEBUG LOCAL STORAGE
/*
//for (var key in localStorage) {
//    console.log(key + ':' + localStorage[key]);
//}
    */


//// LOCATION SERVICE
/*
//var apiGeolocationSuccess = function (position) {
//    alert("API geolocation success!\n\nlat = " + position.coords.latitude + "\nlng = " + position.coords.longitude);
//};
//var tryAPIGeolocation = function () {
//    jQuery.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDCa1LUe1vOczX1hO_iGYgyo8p_jYuGOPU", function (success) {
//        var mapOptions = {
//            zoom: 12,
//            scrollwheel: false,
//            center: new google.maps.LatLng(success.location.lat, success.location.lng), // QUITO
//            styles: [{"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "simplified"}, {"hue": "#00afff"}, {"saturation": "100"}, {"lightness": "0"}, {"weight": "4.03"}, {"gamma": "0.50"}]},
//                {"featureType": "poi.business", "elementType": "all", "stylers": [{"visibility": "on"}, {"hue": "#00afff"}, {"weight": "0.50"}]},
//                {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "on"}, {"hue": "#00afff"}, {"saturation": "67"}, {"lightness": "57"}]}]},
//                mapElement_VF = document.getElementById('map_small'),
//                map_VF = new google.maps.Map(mapElement_VF, mapOptions),
//                LatLng_VF = {lat: success.location.lat, lng: success.location.lng},
//                image_VF = {url: "https://cdn4.iconfinder.com/data/icons/peppyicons/512/660011-location-512.png", scaledSize: new google.maps.Size(50, 50)},
//                marker_VF = new google.maps.Marker({position: LatLng_VF, map: map_VF, title: 'Current Location', icon: image_VF});
//
//        $('.location_input').val(' ' + success.location.lat + ' ,' + success.location.lng);
//    })
//            .fail(function (err) {
//                alert("API Geolocation error! \n\n" + err);
//                console.log(err);
//            });
//};
//var browserGeolocationSuccess = function (position) {
//    alert("Browser geolocation success!\n\nlat = " + position.coords.latitude + "\nlng = " + position.coords.longitude);
//};
//var browserGeolocationFail = function (error) {
//    switch (error.code) {
//        case error.TIMEOUT:
//            alert("Browser geolocation error !\n\nTimeout.");
//            break;
//        case error.PERMISSION_DENIED:
//            if (error.message.indexOf("Only secure origins are allowed") == 0) {
//                tryAPIGeolocation();
//            }
//            break;
//        case error.POSITION_UNAVAILABLE:
//            alert("Browser geolocation error !\n\nPosition unavailable.");
//            break;
//    }
//};
//var tryGeolocation = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
                browserGeolocationSuccess,
                browserGeolocationFail,
                {maximumAge: 50000, timeout: 20000, enableHighAccuracy: true});
    }
};
*/

// TEST
if (navigator.geolocation) {
    console.log('aceptado');
}