import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { useRef } from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

playlist = [{ url: '33qkK1brpt6t8unIpeM2Oy', favorite: true },
            { url: '0H6TddUF2M63ZSHGvhk5yy', favorite: true },
            { url: '3fn4HfVz5dhmE0PG24rh6h', favorite: true },
            { url: '0DQyTVcDhK9wm0f6RaErWO', favorite: true }];

<div>
  {
    playlist.map(song => <SpotifyPlayer url={song.url} favorite={song.favorite} />)
  }
</div>

const urlRef = useRef();
const favoriteRef = useRef();
