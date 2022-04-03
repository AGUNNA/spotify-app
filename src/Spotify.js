//https;//developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndpoint =
"https://accounts.spotify.com/authorize";

const  redirectUri = "http://localhost:3000/";
const clientId = "03858d12bdaa4b56944d873d5169ec18";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// This block of code pulls the token from the url using a callbackfn 
export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item ) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial;
        }, {});
}


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;