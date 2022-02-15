import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap"
import { baseUrl } from "./url";
import { redirectUri } from "./url";



const Login = () => {
  
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${baseUrl}/credentials`, {
      clientId: clientId, clientSecret: clientSecret
    })
    .then((res) => {
      if (!res.data) return 
      window.location.href = AUTH_URL
    })
    .catch(err => console.log(err))
    
  }
  
  
    return(
        <>
          <form onSubmit={handleSubmit}>
            Client ID:
            <input 
              type="text" 
              value={clientId}
              onChange={e => setClientId(e.target.value)}
            />
            Client Secret:
            <input 
              type="text" 
              value={clientSecret}
              onChange={e => setClientSecret(e.target.value)}
            />

            <Container
              className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "100vh" }}
              >
              <input type="submit" value="Login with Spotify" 
                className="btn btn-success btn-lg"
              />
            </Container>
          </form>
        </>
        
    )
}
export default Login