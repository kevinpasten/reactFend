import { SpotifyPlayer } from "./SpotifyPlayer"

/**
* Componente fusion entre Title y Form
*/
export const MyPlaylist = () => {
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
                <button className='btn btn-success ms-2'><i class="bi bi-plus-circle-fill"></i></button>
                <button className='btn btn-danger ms-2'><i class="bi bi-trash"></i></button>
            </div>
            <div>
                <SpotifyPlayer url="" favorite={true} />
            </div>
        </div>
    )
}
    