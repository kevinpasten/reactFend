import { SpotifyPlayer } from "./SpotifyPlayer"
import { useRef, useState } from "react";
import { v4 as uuid } from 'uuid';

/**
* Componente fusion entre Title y Form
*/
export const MyPlaylist = () => {

    const [listadoAlbums, setListado] = useState([
        { id:uuid(), url: '33qkK1brpt6t8unIpeM2Oy', favorite: true },
        { id:uuid(), url: '0H6TddUF2M63ZSHGvhk5yy', favorite: true }
    ]);

    const urlRef = useRef();
    const favoriteRef = useRef();

    const [mensaje, setMensaje]

    const addAlbum = () => {
        const url = urlRef.current.value;
        const favorite = favoriteRef.current.checked;
        if(url.trim() === '') {
            setTimeout(() =>{
                setMensaje('');
            }, 3000)
            return 
        }
        
        const album = {url:url, favorite:favorite};

        setListado([...listadoAlbums, album]);
    }

    const deleteAlbums = () => {
        const newList = listadoAlbums.filter( album => album.favorite == true)
        setListado(newList);
    }

    const setFavorite = (id) => {
        const newList = [...listadoAlbums];
        const album = newList.find(a => a.id === id);
        album.favorite = !(album.favorite);
        setListado(newList);
    }

    return (
        <div className='container'>
            <h1 className='title text-center mt-5'>My favorite songs</h1>
            <div className='d-flex align-items-center'>
                <input ref={urlRef} type='text' className='form-control' placeHolder='Ingrese el codigo 
                    del album aqui...'></input>
                <div className='form-check ms-2'>
                    <input ref={favoriteRef} className='form-check-input' type='checkbox' />
                    <label className='form-check-label'>
                        Favorite
                    </label>
                </div>
                <button onClick={addAlbum} className='btn btn-success ms-2'><i class="bi bi-plus-circle-fill"></i></button>
                <button onClick={removeSong} className='btn btn-danger ms-2'><i class="bi bi-trash"></i></button>
            </div>
            <div>
                { listadoAlbums.map( album => <SpotifyPlayer album={album} key={album.id} setFavorite={setFavorite} />)}
            </div>
        </div>
    )
}

const addSong = () => {
    const url = urlRef.current.value;
    const favorite = favoriteRef.current.checked;
    
    setPlaylist(() => {
      const newSong = {
        id:uuid(),
        url: url,
        favorite: favorite
        };
      
      const newPlaylist = [...playlist, newSong];
      return newPlaylist;
    });
    
      playlist.push(newSong);
      console.log(playlist);
    }

    const removeSong = () => {
        setPlaylist(() => {
          const newPlaylist = playlist.filter((song) => song.favorite === true);
          return newPlaylist
        })
      }
      
      
      const setFavorite = (id) => {
          setPlaylist(() => {
              const newPlaylist = [...playlist];
              const song = newPlaylist.find((song) => song.id === id);
              
              song.favorite = !(song.favorite);
              return newPlaylist;
            });
        }

    const newPlaylist = [newSong];
    return newPlaylist;