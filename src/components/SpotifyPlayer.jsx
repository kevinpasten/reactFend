

/**
* Playlist component
*/
export const SpotifyPlayer = ({album, setFavorite}) => {
const {id, url, favorite} = album;
const urlSong = "https://open.spotify.com/embed/album/" + url;    
const newFavorite = () => setFavorite(id);

/**
* Render que se ejecuta si el album es favorito
*/
    if (favorite) {
    return (
    <div className="d-flex my-5" width="1000px">
        <iframe src={urlSong} width="100%" height="80" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <button onClick={newFavorite} className="btn">
            <i class="bi bi-star-fill"></i>
        </button>
    </div>
    )
    }
    /**
    * Render que se ejecuta si el album no es favorito
    */
    else {
    return (
    <div className="d-flex my-5" width="1000px">
        <iframe src={urlSong} width="100%" height="80" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <button className="btn">
            <i className="bi bi-star"></i>
        </button>
    </div>
    )
    }
}

// pagina 13