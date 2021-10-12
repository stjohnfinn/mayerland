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
    url += '&scope=ugc-image-upload playlist-modify-private playlist-read-private playlist-modify-public playlist-read-collaborative user-read-private user-read-email user-read-playback-state user-modify-playback-state user-read-currently-playing user-library-modify user-library-read user-read-playback-position user-read-recently-played user-top-read app-remote-control streaming user-follow-modify user-follow-read';
    window.location.href = url;
}

