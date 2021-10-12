const badgeElements = {
    Blk_01: '#blk01',
    Silver_Sky: '#ssky',
    SRV_Signature: '#srv',
    Monterey_Strat: '#mont',
    Yellow_Telecaster: '#tele',
    Red_Gibson_SG: '#sg',
    Martin_DM3MD: '#dm3md',
    Martin_OM28JM: '#om28jm',
    Klon_Centaur: '#klon',
    Steel_String_Singer: '#dumble'
}

import config from './config.js';

const client_id = config.CLIENT_ID;
const client_secret = config.CLIENT_SECRET;
const redirect_uri = 'http://127.0.0.1:5500/user.html';
const authTokenEndpoint = 'https://accounts.spotify.com/api/token';

$(document).ready( () => {
    console.log('user page loaded successfully!');

    tippy('#badges-title', {
        content: 'Earn badges by listening to each of John Mayer\'s songs',
        placement: 'bottom',
        theme: 'custom'
    });

    if (window.location.search.length > 0) {
        handleRedirect();
    }
});

function handleRedirect() {
    let code = null;
    const queryString = window.location.search;
    if (queryString.length > 0) {
        const urlParams = new URLSearchParams(queryString);
        code = urlParams.get('code');
    }

    window.history.pushState('','', redirect_uri);

    fetchAccessToken(code);
}

function fetchAccessToken(code) {
    let body = 'grant_type=authorization_code';
    body += '&code=' + code;
    body += '&redirect_uri=' + encodeURI(redirect_uri);
    body += '&client_id=' + client_id;
    body += '&client_secret=' + client_secret;

    callAuthAPI(body);
}

async function callAuthAPI(body) {

    let xhr = new XMLHttpRequest();
    xhr.open('POST', authTokenEndpoint, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Basic ' + btoa(client_id + ':' + client_secret));
    xhr.send(body);
    xhr.onload = handleAuthorizationResponse;
}

function handleAuthorizationResponse() {
    if (this.status == 200) {
        console.log('successful authorization request.');
        let response = JSON.parse(this.responseText);
        // console.log(response);

        retrieveDataFromAPI(response);

    } else {
        console.log('Error');
    }
}

function retrieveDataFromAPI(authResponse) {

    getUserInfo(authResponse.access_token);
}

function getUserInfo(accessCode) {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.spotify.com/v1/me/top/artists', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessCode);
    xhr.send(null);
    xhr.onload = handleUserInfo;
}

function handleUserInfo() {
    console.log(JSON.parse(this.responseText));
}