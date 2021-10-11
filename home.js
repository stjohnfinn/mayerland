import config from './config.js';

let redirect_uri = 'http://127.0.0.1:5500/user.html';

let client_id = config.CLIENT_ID;
let client_secret = config.CLIENT_SECRET;

const AUTHORIZE = 'https://accounts.spotify.com/authorize';

$(document).ready(() => {
    console.log('home page loaded successfully!');

    $('#submit').click(requestAuth);
});

function handleRedirect() {
    let code = null;
    const queryString = window.location.search;
    if (queryString.length > 0) {
        const urlParams = new URLSearchParams(queryString);
        code = urlParams.get('code');
    }
    return code;
}

function requestAuth() {
    let url = AUTHORIZE;
    url += '?client_id=' + client_id;
    url += '&response_type=code';
    url += '&redirect_uri=' + encodeURI(redirect_uri);
    url += '&show_dialog=true';
    url += '&scope=user-library-read user-top-read user-read-playback-position playlist-read-private playlist-read-collaborative'
    window.location.href = url;
}

