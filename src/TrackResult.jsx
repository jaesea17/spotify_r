const TrackResult = ({ track }) => {
    console.log(track)
    return(
        <div className="m1-3">
            <div>{track.title}</div>
            <div className="text-muted">{track.artist}</div>
        </div>
    )
}
export default TrackResult