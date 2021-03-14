import React, { useEffect, useState } from 'react';
import {CardHeader, Container, Label } from 'reactstrap'
import "../css/profile.css"
import axios from 'axios';


const Profile = ({ id }) => {
  console.log(id)
  const [user, setUser] = useState([]);
  const accessKey = "u7tQXBRBlaT_iJvWsMr6TEnoGuvqiI5qc7xgdDXaJe0";
  const apiuser = "https://api.unsplash.com/search/users?page=1&query=" + id + "&per_page=1&client_id=" + accessKey;

  
  useEffect(() => {
    axios.get(apiuser).then((response) => {
      console.log(response);
      setUser(response.data.results);
    });
  }, [id])

  return (
    <>
      <Container>
        {user.map(Users => (
          <>

            <CardHeader style={{ backgroundColor: "#FAFCDA" }} >
              <center>
                <img className="pimg" src={Users.profile_image.large} />
              </center>
              <h3>{Users.username}</h3>
              <hr className="hr" />
              <center>
                <Label><b>{Users.total_photos}</b> Photos&emsp;&emsp;<b>{Users.total_likes}</b> Likes&emsp;&emsp;<b>{Users.total_collections}</b> Collections</Label>
                <br /><br />
                <Label><b>{Users.name}</b>&emsp;{Users.bio}</Label>
              </center>
            </CardHeader>
          </>
        ))}
     
              
      </Container>
  </>
  )
}

export default Profile
