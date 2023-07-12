import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

const urlRef = useRef();
const favoriteRef = useRef();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

const [playlist, setPlaylist] = useState([{ id:uuid(), url: '33qkK1brpt6t8unIpeM2Oy', favorite: true },
                                          { id:uuid(), url: '0H6TddUF2M63ZSHGvhk5yy', favorite: true },
                                          { id:uuid(), url: '3fn4HfVz5dhmE0PG24rh6h', favorite: true },
                                          { id:uuid(), url: '0DQyTVcDhK9wm0f6RaErWO', favorite: true }]);



<div>
  {
    playlist.map(song => <SpotifyPlayer url={song.url} favorite={song.favorite} key={song.id} />)
  }
</div>
