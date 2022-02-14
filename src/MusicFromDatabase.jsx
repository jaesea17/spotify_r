import React from "react";

const MusicFromDatabase = ({music}) => {
    return(
        <>
            <h2>My Library</h2>
            <div>{music.title}</div>
            <div className="text-muted">{music.artist}</div>
            <input type="button" value="remove" />
        </>
    )
}
export default MusicFromDatabase