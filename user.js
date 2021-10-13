const badgeElements = {
    Blk_01: $('#blk01'),
    Silver_Sky: $('#ssky'),
    SRV_Signature: $('#srv'),
    Monterey_Strat: $('#mont'),
    Red_Gibson_SG: $('#sg'),
    Martin_DM3MD: $('#dm3md'),
    Martin_OM28JM: $('#om28jm'),
    Klon_Centaur: $('#klon'),
    Steel_String_Singer: $('#dumble'),
    Yellow_Telecaster: $('#tele'),
    Tube_Screamer: $('#ts'),
    Katana: $('#katana'),
    Heartbreak: $('#hbsc')
}

const JM_SONG_IDs = [
    '0tgBtQ0ISnMQOKorrN9HLX','3MthJpM1IEYp2ulZe00LvP','4T6FWA703h6H7zk1FoSARw','3hwjxbqGvTRUPi38fLgeM7','4VFGpluBaU1WcquEMzhSz6','239yM7BAQ2CkNc61ogPGXo','4Im6GRj17qa7NW76OsJh1s','4f0xBbWvKWmuB17yebh24a','4Szq4dulKN9bOvLRW6uMdZ','0wcEUeOslMI8dPB7QjUMiW','1LM6t24SjQr2bJHqeGIR4U','5ddXMXmXZ2FN4iliTG20nO','701DK0It9f7iurRnzKvF0y','0oiCeOPwm4zhwfyIpAE37y','77Y57qRJBvkGCUw9qs0qMg','6eIygPhGcBFKKcxlGTJlY0','1G4s7WkhgmdQvYaGCHjw1G','1crSsvtU9wZB15dIQXV2QH','1crSsvtU9wZB15dIQXV2QH','3TQbr3G3U5wlwEJejmqC1F','5KsLlcmWDoHUoJFzRw14wD','0Zrug5Ry3x6x60lohpEU0C','51lPx6ZCSalL2kvSrDUyJc','0QTCTu0CXv4X1JEE4gNpGv','5Aq5TIy9jVK70aL7xcE9oa','58ImA5yX8b5UkLy9MDXwWO','5FDh0G5oQ2UD9JxWiDCT1x','2c4FRqXnna2YeC4lShVONV','7IByJvSqRFltGyiiIiL4wn','05Ez6KwjICkscWQVTsT3f5','4wOYt5nULk1Cu8pwJWk26m','6zQ1OjnGS4GiEOHje3tDX3','4dnwtykvirYJPQOL0OgL6B','4Fz1WWr5o0OrlIcZxcyZtK','0CETmgFGt8Ne8vLnaLcduU','1RywwImkBFUEVcRTBmw7vL','3RgR3cFZ6xh7MlB9DURK6e','7cZ3yjXUsoDsSAUtnf0F8V','1aiDlPLPljMFUylWjMZras','5RYTpsSI7op7UZznXWqhIP','6Oi3mUl8WwfTVRqEwByZ7R','03XjpGGdsIPouALXem2Cku','5S3NpJBqacEUrxceiAy5lI','50YQFbfIVk2XMnVFKAuuib','601913bnwOH19HblKXMr2d','5pmEPJ1DnCLqQkUT4B2wAp','4gs07VlJST4bdxGbBsXVue','5DydMbw2U5Oh1OckJIsniN','7hR5toSPEgwFZ78jfHdANM','0HLWvLKQWpFdPhgk6ym58n','42dbDZX9bsEGqMZWYmnR7J','6OXt9aSIr4DSxSR3Qjrtgp','4WBmkMJyWubRXRLYk8t9SI','1Jc3tGa11ITNgph0yewlqn','5gbxzSqABThINGDb7vIiwe','7BgGj9choLPeJJOflkaAhB','1wkaoS4jTVXYMUWHKVFZTk','7AtsEX4pJqmAaIajlMwaPU','0HHdujGjOZChTrl8lJWEIq','0EUSbTvyZfo9QOcxunL9Ro','5bSPF76iSpI5p00BALV8uo','4LloVtxNZpeh7q7xdi1DQc','6yxobkt0REH26qbM4n9eDC','5SSqUpMby3y8W0qy3JME5E','5e7ati4Dx5ax2YapfnV5FS','1G7Gg1cH4VKBu3XaoCppzC','6V3Sd5FVnf83LLA6VMP15F','5WMKS1iDfugyLhfibIlR51','2pNllR1aL6MFh1npf0376T','72UCrt0G2z6QQkvzEw9dGQ','75LltETkbWa2OKmJ1AEoM3','4OT8GH9u9Gx7ydJ49ULunN','2Rvhjn78vg0rnuBHCdtz9P','15Ev5G9uLhXqjBH4t16GQq','4MeXE7YF459t1PbFTtAklF','68KdvPllp9Pug8ZG6AByFY','79H87DHga7uOxkvFRGa4a8','2vFYhHS8ycUITvZYownH5K','3oGRjCpV07tCM5mrYv6iQA','5imShWWzwqfAJ9gXFpGAQh','7peh6LUcdNPcMdrSH4JPsM','35LDid9nvuYrUyZk5qGD0i','3SktMqZmo3M9zbB7oKMIF7','78DwRIo6Vj6wqteyerGetr','1IdTIzkTK6CcpKKgMUGbg7','3E6iea9uEmB7gRru4lyP6h','2jdAk8ATWIL3dwT47XpRfu','50DMG6AvtNzbrxMc62w6ph','7keXdrB4mz57u4b8YkCwag','7MRn6wgG0ReDRNYV5wJeGX','0bYDebBlQxsDR4hCgbbpOW','46FiM7f4pSkAwVDZ8ikki4','1KQ6mxVLMaJDtf36A1XRMd','4NVQK1qNqgLYmFk90pE4vm','1pCPho2f47NuhzD7HnRc6t','3sCDePLRq8SLMqgJ1ZlKYN','733QXu4QpEgzcX4VaYdBPf','1DRvBeR62awPNhXZ71GsT3','6K0kZE3kdIJh1NeLdx2f0R','17XzFKjIqLmJHiq5k61x1v','40akG3NM0dfLmL5rWEQepG','6cc4XOqrB8qibHbAymBPSH','3i5tXM8BXtTiBDxAAy3MGc','3TZcKjWVkKqftRzGGZM4mi','6yzty3y4JAzaDB9GR26Wu7','2atxvRnv9niP7JETxBcF4h','1LTz7VhU0E4SXMw2ju0F6r','2nZX0BKd3hzOhh4TYL0BOI','6WkH8Otrh3Rb8Eh7iqhiKx','1DllSr1QGkvGHhyHEnKsBt','4JWxwiTAQWmydYqQMVZNmq','1wo3sPQ60rUkV0GMJioik9','2qGE8x9qNrxPNJZEdHibx0','4Zh8wefA6zKT1zhRvhqUUf','7L84XRpu8WsUOFCx95uTAh','09HcF30iAIUsqRZj4Nq5fO','32vVjPXwoTBctUcEIQmU1t','1Vis3NvnS2KmTz4QAB2wIz','5DIqePZRkBQ6uoMcPAannh','5gK3r2HLaNDIYzpUCoaVgx','2HqmzMSoYKIIxIo3IPDgtp','6yAshuL3hHBl7zyoTn0j3W','1fTZfLRD6E5snDW5YC7qk5','6T6O0Od0HcpJOD208yD0wr','5O1BIKBvlKw6JMLjGfvcQT','0YkaQ6bErWUqCSwiMS1BBF','7ntKde0RDt5FzvxjIMNptD','3rq2KEOjAiF79aNU5FYfUb','1C9TnfIII3cgOidiaIPWjc','46gxdLetkPEpmdetWwEgKX','4rG4naPzEGxPeVT1chpoHR','532deAZtYfScnNJD2Qx6e8','1S609dK1nzQrPqpNMU1Ytp','3UIqpyBiZ3uWNJLz4qlx1o','6ymCz9KI6dJjaRUlC7daPZ','1tRkKnzuQRoKIKcWGJx9MB','4zvPBP0HVsoizqNcAAqS5a','1qTXQwHB9eqAvAS7s194nk','0gaGfsSi1je2SHjkr1PWkQ','0mDtXKkRdK0WA4cSrN2And','3itFNxYqj0ZWf8CD4NhNAh','2lSA0yHBl9SWojDOi63xeq','6nziCDGUS6UJbm1ZCxRDuJ','4kcA6ZMuuqOUwGN0PXdTcK','18V8P4GpfI8oo7ZklTybgk','6FlByTWooCUp5sC75ejZhF','6atVS7UZBxoyJkkteM62u5','0Jh9EBGN205Yc7JN2zZ2f1','4ibzxSKw3a6rtIorruN5GO','7B2SMMslfm3Ocf7ZnTa5dS','1wU7z5XE8oa66ZvUlYAKfK','4UoJ14X24nu9YGwE1r0JOy','2eMVogxm08LgfgnWpahooV','5FPnjikbwlDMULCCCa6ZCJ','3Ngl8Fn5UtCl2K7UD7EF9e','2Jr39bnXx3WOUmdlI4S00f','0UVXkzxIKO5e4VXXM4ErjJ','2djWxCzgjnFvUbYZf4ep46','30pIk7qIOrhJsKnGuFSqzY','2gCr4ESYU3CrXbJ4vVRLjO','0QWK9SwHslfeSrDSJXMI4M','2auWdKsT2wvdGIXjxBYvpS','3ndvuL1lqZNTdb7yBxKQFR','3dC9btFVNotM5glH5pp3FG','3URla9tUUZvizosMCHB0OV','0mPdhLVNOYqP9zwvb7uUIi','1GLeSb7JwiSuIsXdrirkmU','74O2ijHJxPd6FJMgL6A4aq','79Q12zPPmbgWwfH9KFCSvL','4zmaLdhEGKtsbHmnF0BmZX','2Jqrf5JyW53Xnmk1QIvxYv','6Vecwo7AHst9V2CE3kmwr0','1c7UYTut2SBOPq64o2t0uN','3jFP1e8IUpD9QbltEI1Hcg','7vFv0yFGMJW3qVXbAd9BK9','7Kohy4v3KLWfUXlv9N3feB','5O3fUsQQBFxW8SH1kHthDH','0seE1aF8gzSPH79Dcvcbw2','2Knlcf82LF6hp6Bf0gldtN','2L4no3iw54gGX1ZwCNfYSL','3brCbW1KbGBUvMsqUhHQEy','2MCBSxOnkMcVkbaLplGYjX','24QhGejjYWG2CfbHRGLmEr','3W93koK957HaoaNHyA3dTm','2LfhnQyrBpRU0HgKIrC9VE','2hv6VI0I0BZDY15qsPOrjW','2Aw2LtgxU2vLoZRL6yktvc','25ueyWzih8QBtf7EzHc3aW','3EaMrRGeNLb0llMv2wylUr','34DLX2len1rusux53yqlRu','26PnyFUmYdeRG7nQrsTpHc','2Sdkwd9ptjUCcYR9uPECmx'
];

import config from './config.js';

const client_id = config.CLIENT_ID;
const client_secret = config.CLIENT_SECRET;
const redirect_uri = 'http://127.0.0.1:5500/user.html';
const authTokenEndpoint = 'https://accounts.spotify.com/api/token';

let access_token = null;
let badgeCount = 0;
let savedInLibrary = [];

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

    access_token = authResponse.access_token;

    getUserInfo();
}

function getUserInfo() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.spotify.com/v1/me', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
    xhr.send(null);
    xhr.onload = handleUserInfo;
}

function handleUserInfo() {
    let userData = JSON.parse(this.responseText);

    $('#username').text(userData.display_name);

    getUserBadges();
}

async function getUserBadges() {
    getRecentlyHeard();
    getTopArtists();
    getTopTracks();
    getJMLibraryCount();
    checkIfFollows();
}

async function getRecentlyHeard() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.spotify.com/v1/me/player/recently-played?limit=50', true);
    xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
    xhr.send(null);
    xhr.onload = handleRecentlyHeard
}

async function handleRecentlyHeard() {
    let data = JSON.parse(this.responseText);

    let songs = data.items;

    let JMSongs = 0;

    for (let i = 0; i < songs.length; i++) {
        let artist = songs[i].track.artists[0].name;
        if (artist == 'John Mayer') {
            JMSongs++;
        }
    }

    if (JMSongs >= 5) {
        badgeElements.Yellow_Telecaster.addClass('earned');
        updateBadgeCount(badgeCount+1);
    } if (JMSongs >= 1) {
        badgeElements.Katana.addClass('earned');
        updateBadgeCount(badgeCount+1);
    }
}

async function getTopArtists() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term');
    xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
    xhr.send(null);
    xhr.onload = handleTopArtists;
}

async function handleTopArtists() {
    let data = JSON.parse(this.responseText);
    let topArtists = data.items;

    let JMRank = null;

    for (let i = 0; i < topArtists.length; i++) {
        if (topArtists[i].name == 'John Mayer') {
            JMRank = i;
            break;
        }
    }

    if (JMRank == 0) {
        updateBadgeCount(badgeCount+1);
        badgeElements.Blk_01.addClass('earned');
    } if (JMRank <= 9) {
        updateBadgeCount(badgeCount+1);
        badgeElements.Martin_OM28JM.addClass('earned');
    } if (JMRank <= 19) {
        updateBadgeCount(badgeCount+1);
        badgeElements.Martin_DM3MD.addClass('earned');
    } if (JMRank <= 49) {
        updateBadgeCount(badgeCount+1);
        badgeElements.Red_Gibson_SG.addClass('earned');
    }
}

async function getTopTracks() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term', true);
    xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
    xhr.send(null);
    xhr.onload = handleTopTracks;
}

async function handleTopTracks() {
    let data = JSON.parse(this.responseText);
    let topTracks = data.items;

    let JMTrackCount = 0;

    for (let i = 0; i < topTracks.length; i++) {
        let trackName = topTracks[i].artists[0].name;
        if (trackName == 'John Mayer') {
            JMTrackCount++;
        }
    }

    if (JMTrackCount >= 10) {
        updateBadgeCount(badgeCount+1);
        badgeElements.Klon_Centaur.addClass('earned');
    } if (JMTrackCount >= 1) {
        updateBadgeCount(badgeCount+1);
        badgeElements.Heartbreak.addClass('earned');
    }
}

async function getJMLibraryCount() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.spotify.com/v1/me/tracks/contains?ids=' + getStringFromIDArray(0, 50));
    xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
    xhr.onload = handleLibraryCount;
    await xhr.send(null);
    xhr = null;

    xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.spotify.com/v1/me/tracks/contains?ids=' + getStringFromIDArray(50, 100));
    xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
    xhr.onload = handleLibraryCount;
    await xhr.send(null);
    xhr = null;

    xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.spotify.com/v1/me/tracks/contains?ids=' + getStringFromIDArray(100, 150));
    xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
    xhr.onload = handleLibraryCount;
    await xhr.send(null);
    xhr = null;

    xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.spotify.com/v1/me/tracks/contains?ids=' + getStringFromIDArray(150, 192));
    xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
    xhr.onload = handleLibraryCount;
    await xhr.send(null);
    xhr = null;

    let savedCount = 0;

    console.log(savedInLibrary);

    for (let i = 0; i < savedInLibrary.length; i++) {
        // for (let j = 0; j < savedInLibrary[i].length; j++) {
        //     if (savedInLibrary[i][j] == true) {
        //         savedCount++;
        //     }
        // }
        console.log(savedInLibrary[i]);
    }

    if (savedCount >= 50) {
        updateBadgeCount(badgeCount+1);
        badgeElements.Steel_String_Singer.addClass('earned');
    }if (savedCount >= 20) {
        updateBadgeCount(badgeCount+1);
        badgeElements.SRV_Signature.addClass('earned');
    } if (savedCount >= 10) {
        updateBadgeCount(badgeCount+1);
        badgeElements.Tube_Screamer.addClass('earned');
    }
}

function handleLibraryCount() {

    for (let i of JSON.parse(this.responseText)) {
        savedInLibrary.push(i);
        console.log(savedInLibrary);
    }
}

function getStringFromIDArray(a, b) {
    let outputStr = '';
    for (let i = a; i < b; i++) {
        let currId = JM_SONG_IDs[i];
        outputStr += currId + ',';
    }

    outputStr = outputStr.substring(0, outputStr.length - 1);

    return outputStr;
}

async function checkIfFollows() {

}

async function updateBadgeCount(num) {
    badgeCount = num;
    $('#badge-count').text(num + ' of 13');
}

// function pauseExec(ms) {
//     setTimeout(() => {}, ms);
// }