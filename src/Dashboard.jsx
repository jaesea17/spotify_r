import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import TrackResult from "./TrackResult";
import { useAuth } from "./useAuth";
import { Container, Form } from "react-bootstrap"
import { Link } from "react-router-dom";

const spotifyApi = new SpotifyWebApi({
    clientId: '4b13f2c955414aad8b1ba27add81a93c'
})

const Dashboard = ({ code }) => {
    const accessToken = useAuth(code)

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]) 

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return

        let cancel = false
        spotifyApi.searchTracks(search).then((res) => {
            if (cancel) return;
            setSearchResults(res.body.tracks.items.map( track => {
                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    url: track.uri
                } 
            }))
        })
        return () => (cancel = true)
    }, [search, accessToken])

    
    return(
        <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
            <div className="container-sec">
                <div>
                    <input
                        type="search" placeholder="Search Songs"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    
                        />
                </div>
                <div>
                    <button><Link to="/mylibrary">My Library</Link></button>
                </div>
                
                
            </div>
            
            <div>
                <h3>New Release</h3>
                <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
                    {searchResults.map(track => {
                    return(
                        <div key={track.url}>
                            <TrackResult track={track} />
                        </div>
                    )
                
                })}</div>
            </div>
            
        </Container>
        

        
    )
}
export default Dashboard