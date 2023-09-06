import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";

function PlayList(){
    
    const [playlist, setPlaylist] = useState(() => {
        const storage = JSON.parse(localStorage.getItem('jPlaylist'))
        console.log(storage);
        return storage ?? []
    })

    const [songName, setSongName] = useState('')
    const [newSongName, setNewSongName] = useState()
    const [editSong, setEditSong] = useState(null)

    const handleAddSong = (e) => {
        e.preventDefault();
        setPlaylist((prev) => {
            let maxId = playlist.reduce((max, item) => {
                return item.id > max ? item.id : max
            }, 0)
            const newPlaylist = [
                ...prev,
                {
                    id: maxId +1,
                    name: songName
                }
            ]
            const jsonPlaylist = JSON.stringify(newPlaylist);
            localStorage.setItem('jPlaylist', jsonPlaylist);
            return newPlaylist
        })
        setSongName('')
    }

    const handleRemoveSong = (song) => {
        let confirm = window.confirm(`Bạn có muốn xóa bài hát: ${song.name} ?`)
        if (confirm){
            setPlaylist((prev) => {
                let newList = prev.filter((item) => item.id != song.id)

                return newList
            })
        } 
    }
    const handleNewSongName = (e) => {
        setNewSongName(e.target.value)
    }

    const handleUpdateSong = (song) => {
        
        setPlaylist((prev) => {
            let newList = prev.map((item) => {
                if(item.id == song.id ){
                    item.name = newSongName || song.name
                }
                return item;
            })
            return newList;
        })
        setEditSong()
        setNewSongName()
    }

    useEffect(()=>{
        localStorage.setItem('jPlaylist', JSON.stringify(playlist));
    })
    
    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-begin">
                <div className="col-sm-6">
                    <h1 className="text-primary alert alert-warning text-center">Playlist</h1>
                    <form onSubmit={handleAddSong} className="d-flex col-12">
                        <input type="text" className="form-control me-2" name="songName"
                        value={songName} 
                        onInput={(e) => setSongName(e.target.value)}
                        />
                        <button className="btn btn-sm btn-warning col-2">
                            <i className="fa fa-plus me-2"></i>
                            Add
                        </button>
                    </form>
                </div>
                <div className="col-sm-6 mt-3">
                    <ul className="list-group">
                        {
                            playlist.map((song) => (
                                <ListItem 
                                    key={song.id}
                                    song={song}
                                    editSong={editSong}
                                    handleUpdateSong={handleUpdateSong}
                                    setEditSong={setEditSong}
                                    handleRemoveSong={handleRemoveSong}
                                    handleNewSongName={handleNewSongName}
                                    newSongName={newSongName}
                                />
/**
 <li key={song.id} className="list-group-item list-group-item-info 
                                d-flex align-items-center justify-content-between mt-1">
                                {
                                    (editSong && editSong.id == song.id) ? (
                                        <>
                                            <input type="text" className="form-control w-75"
                                                value={newSongName || song.name}
                                                onInput={handleNewSongName}
                                            />
                                            <div>
                                                <i className="fa fa-save text-success me-2"
                                                    onClick={() => handleUpdateSong(song)}
                                                />
                                                <i className="fa fa-times text-warning"
                                                    onClick={() => setEditSong()}
                                                />
                                            </div>
                                    </>
                                    ) : (
                                        <>
                                            <span>{song.id}. {song.name}</span>
                                            <div>
                                                <i role="button" className="fa fa-trash me-2"
                                                    onClick={() => handleRemoveSong(song)}
                                                />
                                                <i role="button" className="fa fa-edit"
                                                    onClick={() => setEditSong(song)}
                                                />
                                            </div>
                                        </>
                                    )
                                }  
                                </li>
 */
                                
                            ))
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default PlayList