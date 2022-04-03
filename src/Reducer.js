// import { findAllByDisplayValue } from "@testing-library/react";

// Reducer's primary job is to listen to actions 

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    item: null,
    // REMOVE after finished deploying...
    // token: 'BQCBr4F-7Plv2f0dZ7xm4EPDkwtSVT_1iGYvr0a5DjY5RjkCTH…iKzT6jLkbTe95BIUxuq9Lvq-3q3XxC3BbDhgUu53xHDOPfliE',
};

const reducer = (state, action) => {
    console.log(action);
    // Action -> type, [payload]
    switch (action.type) {

        case 'SET_USER':
            return {
              ...state,
              user: action.user
            };

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
              
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };    

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };  
            
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            };

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        default:
            return state;
    }
};

export default reducer;