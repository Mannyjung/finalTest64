import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardImg,Col, Container, Row } from 'reactstrap'
import axios from 'axios';

const PhotoList = ({ id }) => {
const [photobyuser, setPhotobyuser] = useState([]);
const accessKey = "u7tQXBRBlaT_iJvWsMr6TEnoGuvqiI5qc7xgdDXaJe0";
const apiuphotoByuser = "https://api.unsplash.com/users/" + id + "/photos?page=1&query=&per_page=15&client_id=" + accessKey;
useEffect(() => {
    axios.get(apiuphotoByuser).then((response) => {
      console.log(response);
      setPhotobyuser(response.data);
    });

  }, [id])
    return (
        
         <Container>
            <Card>
                <CardBody>
                    <Row>
                        {photobyuser.map(photo => (
                            <>

                                <Col sm="4">
                                    <Card inverse>
                                        <CardImg id="willll" src={photo.urls.raw} alt="Card image cap" />
                                    </Card><br />
                                </Col>

                            </>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Container>
  
    )
}

export default PhotoList
