
import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardLink, CardSubtitle, CardText, CardTitle, Col, Container, Label, Row } from 'reactstrap'
import "../css/profile.css"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const Profile = ({ id }) => {
  console.log(id)

  const [result, setResult] = useState([]);
  const [photobyuser, setPhotobyuser] = useState([]);
  const clientId = "u7tQXBRBlaT_iJvWsMr6TEnoGuvqiI5qc7xgdDXaJe0";
  const apiuser = "https://api.unsplash.com/search/users?page=1&query=" + id + "&client_id=" + clientId;
  const apiuphotoByuser = "https://api.unsplash.com/users/" + id + "/photos?page=1&query=&client_id=" + clientId;
  
  useEffect(() => {
    axios.get(apiuser).then((response) => {
      console.log(response);
      setResult(response.data.results);
    });
    axios.get(apiuphotoByuser).then((response) => {
      console.log(response);
      setPhotobyuser(response.data);
    });

  }, [id])

  return (
    <>
      <Container>
        {result.map(Users => (
          <>

            <CardHeader style={{ backgroundColor: "#FAFCDA" }} >
              <center>
                <img className="pimg" src={Users.profile_image.large} />
              </center>
              <h3>{Users.username}</h3>
              <hr />
              <center>
                <Label><b>{Users.total_photos}</b> post&emsp;&emsp;<b>{Users.total_likes}</b> followers&emsp;&emsp;<b>{Users.total_collections}</b> follwing</Label>
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
              <Col sm="4">
                <Card inverse>
                  <CardImg width="100%" height="370px" src={photo.urls.raw} alt="Card image cap" />
                </Card><br/>
              </Col>
              
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
