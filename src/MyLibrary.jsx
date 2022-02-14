import axios from "axios";
import React, { useEffect, useState } from "react";
import MusicFromDatabase from "./MusicFromDatabase";
import { baseUrl } from "./url";

const MyLibrary = () => {
    const [allMusics, setAllMusics] = useState([]);

    useEffect(() => {
        axios.get(`${baseUrl}/musics`)
        .then((res) => {
            setAllMusics(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    
    return(
      <>{allMusics.map((music) => {
        return(
            <div key={music._id}>
                <MusicFromDatabase music={music} />
            </div>
        )
      })}</>
    )
}
export default MyLibrary