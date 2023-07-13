import { SpotifyPlayer } from "./SpotifyPlayer"
import { useRef, useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';


const key = 'storage-playlist';
/**
* Componente fusion entre Title y Form
*/
export const MyPlaylist = () => {

    const [listadoAlbums, setListado] = useState([
        { id:uuid(), url: '33qkK1brpt6t8unIpeM2Oy', favorite: true },
        { id:uuid(), url: '0H6TddUF2M63ZSHGvhk5yy', favorite: false }
    ])

    const urlRef = useRef();
    const favoriteRef = useRef();

    const [mensaje, setMensaje] = useState('')

    const addAlbum = () => {
        const url = urlRef.current.value;
        const favorite = favoriteRef.current.checked;
        if(url.trim() === ''){
            setMensaje('Campos vacios');
            setTimeout(() => {
            setMensaje('');
            }, 3000);
            return
        }
        const album = { id: uuid(), url: url, favorite: favorite };
        setListado([...listadoAlbums, album]);
        urlRef.current.value = '';   
    }

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem(key));

        if(storage){
            setListado(storage);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(listadoAlbums));
    },[listadoAlbums]);


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
                <button onClick={deleteAlbums} className='btn btn-danger ms-2'><i class="bi bi-trash"></i></button>
            </div>
            <div>
                { listadoAlbums.map( album => <SpotifyPlayer album={album} key={album.id} setFavorite={setFavorite} />)}
            </div>
        </div>
    )
}

