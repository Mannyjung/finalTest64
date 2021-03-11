import React, { useEffect, useState } from 'react'
import { Container } from '@material-ui/core';
import { Button, Card, CardBody, Col, CardLink, CardSubtitle, Row, Input, CardText, CardTitle } from 'reactstrap';
import "../css/search.css";
import "../css/showphoto.css";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
    const [image, setImage] = useState("");
    const clientId = "u7tQXBRBlaT_iJvWsMr6TEnoGuvqiI5qc7xgdDXaJe0";
    const [result, setResult] = useState([]);
    const handleChange = (event) => {
        setImage(event.target.value);
    };
    const handleSubmit = () => {
        console.log(image);
        const api = "https://api.unsplash.com/search/photos?page=1&query=" + image + "&client_id=" + clientId;
        axios.get(api).then((response) => {
            console.log(response);
            setResult(response.data.results);
        });

    };

    return (
        <>
            <Container className="search">
                <div key="div" className="app">
                    <div key="div" className="heading" style={{marginTop:"5%"}}>
                        <h1 className="hh" >Final-Exam</h1>
                    </div>

                    <div  key="div"className="heading" style={{marginTop:"3%"}} className="input">

                        <Row>

                            <Col sm={9} >
                                <div key="div" align="right" >
                                <Input onChange={handleChange} type="text" name="image" placeholder="Search for images" style={{width:"600px"}}/>
                                </div>
                            </Col>
                            <Col sm={3} >
                                <Button className="btn-success" onClick={handleSubmit} type="submit">Search</Button>
                            </Col>

                        </Row>
                    </div>

                    <div className="result">
                        {result.map((image) => (
                            <div className="ss">
                                <Card >
                                    <CardBody >
                                        <CardTitle tag="h5"> <img className="profile" src={image.user.profile_image.medium} /> <a href={"/profile/" + image.user.username}>{image.user.username}</a></CardTitle>

                                    </CardBody>
                                    <CardBody  >
                                        <img  key="img" width="100%" className="photo" src={image.urls.raw} alt="Card image cap" />
                                    </CardBody>
                                    <CardBody>
                                        <CardText><FontAwesomeIcon icon={faHeart} />{image.likes} Like <FontAwesomeIcon icon={faComment} /></CardText>
                                        <CardText><b>{image.user.username}</b> {image.description}</CardText>

                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

            </Container>
        </>
    )
}

export default Search
