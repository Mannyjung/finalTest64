import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardLink, CardSubtitle, CardText, CardTitle, Col, Container, Label, Row } from 'reactstrap'
import "../css/profile.css"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import PhotoList from "./PhotoList";

import axios from 'axios';


const Profile = ({ id }) => {
  console.log(id)

  const [user, setUser] = useState([]);
  const [photobyuser, setPhotobyuser] = useState([]);
  const accessKey = "u7tQXBRBlaT_iJvWsMr6TEnoGuvqiI5qc7xgdDXaJe0";
  const apiuser = "https://api.unsplash.com/search/users?page=1&query=" + id + "&per_page=1&client_id=" + accessKey;
  const apiuphotoByuser = "https://api.unsplash.com/users/" + id + "/photos?page=1&query=&per_page=15&client_id=" + accessKey;
  
  useEffect(() => {
    axios.get(apiuser).then((response) => {
      console.log(response);
      setUser(response.data.results);
    });
    axios.get(apiuphotoByuser).then((response) => {
      console.log(response);
      setPhotobyuser(response.data);
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
                <Label><b>{Users.total_photos}</b> post&emsp;&emsp;<b>{Users.total_likes}</b> Likes&emsp;&emsp;<b>{Users.total_collections}</b> Collections</Label>
                <br /><br />
                <Label><b>{Users.name}</b>&emsp;{Users.bio}</Label>
              </center>
            </CardHeader>
          </>
        ))}
        <br />
        
        <Card>
          <CardBody>
            <Row>
            {photobyuser.map(photo => (
          <>

             <PhotoList photo={photo}  />
              
              </>
        ))}
            </Row>
          </CardBody>
        </Card>
       

      </Container>





    </>
  )
}

export default Profile
