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
function refreshUser(userData){
    
}



$( document ).ready(function() {
    userData = userParams();
    
});