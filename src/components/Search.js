import React, { useEffect, useState } from 'react'
import { Container } from '@material-ui/core';
import { Button, Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle} from 'reactstrap';
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
        <div >
            <Container className="search">


                <div className="app">
                    <div className="heading">
                        <h1 className="hh" >Manny Stagram</h1>
                    </div>

                    <div className="input">
                        <center>
                        <input onChange={handleChange} type="text" name="image" placeholder="Search for images" />
                        <Button className="btn-warning" onClick={handleSubmit} type="submit">Search</Button></center>
                    </div>
                    
                    <div className="result">
                        {result.map((image) => (
                            <div className="ss">
                                <Card >
                                    <CardBody >
                                        <CardTitle tag="h5"> <img className="profile" src={image.user.profile_image.medium} /> <a href={"/profile/"+ image.user.username}>{image.user.username}</a></CardTitle>

                                    </CardBody>
                                    <CardBody  >
                                        <img width="100%" className="photo" src={image.urls.thumb} alt="Card image cap" />
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
        </div>
    )
}

export default Search
