function fetch_spotify(oauth_token) {
    return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
            accept: 'application/json',
            authorization: `Bearer ${oauth_token}`
        }
    }).then(response => response.json())
}

function fetch_spotify_poll(oauth_token, callback, timeout = 60000) {
    setInterval(() => fetch_spotify(oauth_token).then(callback), timeout);
    return fetch_spotify(oauth_token);
}
