import './SongGenre.css';

export function SongGenre({name, color}) {
    return (
        <div className='song-genre'>
            <p className='song-name'>{name}</p>
        </div>
    );
}