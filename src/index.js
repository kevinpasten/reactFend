import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




<div>
  {
    playlist.map(song => <SpotifyPlayer url={song.url} favorite={song.favorite} key={song.id} />)
  }
</div>
