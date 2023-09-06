import React from "react";

function ListItem(props) {
    const {
        song, 
        editSong, 
        handleUpdateSong, 
        handleRemoveSong, 
        handleNewSongName, 
        setEditSong, 
        newSongName} = props
    return (
        <li key={song.id} 
            className="list-group-item list-group-item-info d-flex align-items-center justify-content-between mt-1">
                {
                    (editSong && editSong.id == song.id) ? (
                        <>
                            <input type="text" className="form-control w-75"
                                value={newSongName || song.name}
                                onInput={handleNewSongName}
                            />
                            <div>
                                <i role="button" className="fa fa-save text-success me-2"
                                    onClick={() => handleUpdateSong(song)}
                                />
                                <i role="button" className="fa fa-times text-warning"
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
    )
}

export default ListItem