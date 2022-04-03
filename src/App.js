import React,{ useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateValue } from './StateProvider';
import Player from './Player';
import { getTokenFromUrl } from './Spotify';
import './app.css';
import Login from './Login';


const s = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue();

  // Runs code based on a given condition in this case getTokenFromUrl  
  useEffect(() => {
    // Set token 
    const hash = getTokenFromUrl()
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token) 

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      s.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      s.getPlaylist("37i9dQZEVXcCIwNhwxVq2H?si=3dea51af67d64149").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
      
      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });
      
    }
  }, [token, dispatch]);

  return (
    // BEM
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={s} />}
    </div>
  );
}

export default App;
 