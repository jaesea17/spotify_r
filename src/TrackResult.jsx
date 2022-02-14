import axios from "axios"
import { baseUrl } from "./url"

const TrackResult = ({ track }) => {

let {title, artist} = track;
const add = () => {
       axios.post(`${baseUrl}/musics`, { title, artist })
       .then((res) => {
            if (res.data.alreadySaved) alert("already saved")
       })
       .catch((err) => {
           console.log(err)
       }) 
    }

    const remove = () => {
        
    }


    return(
        <div className="m1-3">
            <div>{title}</div>
            <div className="text-muted">{artist}</div>
            <input type="button" value="add" onClick={add}/>
            <input type="button" value="remove" />
        </div>
    )
}
export default TrackResult