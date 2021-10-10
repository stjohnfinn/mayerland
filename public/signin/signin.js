$(document).ready(() => {
    console.log('sign-in page loaded.');

    setup();
});

function setup() {
    $('#submit').click(retrieveData);
}

function retrieveData() {
    username = $('#username').val();
    password = $('#password').val();
    console.log('retrieving user data for ' + username + ' x ' + password);
}

