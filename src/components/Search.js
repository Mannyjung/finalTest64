import React, { useState } from 'react'
import { Container } from '@material-ui/core';
import { Button, Input, } from 'reactstrap';
import "../css/search.css";
import "../css/showphoto.css";
import axios from 'axios';
import ReactTypingEffect from 'react-typing-effect';
import Show from './Posts';

const Search = () => {
    const [image, setImage] = useState("");
    const accessKey = "u7tQXBRBlaT_iJvWsMr6TEnoGuvqiI5qc7xgdDXaJe0";
    const [allUser, setAllUser] = useState([]);
    const handleChange = (event) => {
        setImage(event.target.value);
    };
    const handleSubmit = () => {
        console.log(image);
        const api = "https://api.unsplash.com/search/photos?page=1&query=" + image + "&per_page=15&client_id=" + accessKey;
        axios.get(api).then((response) => {
            console.log(response);
            setAllUser(response.data.results);
        });
    };
    return (
        <>


            <center style={{ marginTop: "5%" }}>
                <img src="../img/123.gif" height="150px" />
            </center>

            <Container className="search">
                <div key="div" className="app">

                    <div key="div" className="heading" style={{ marginTop: "5%" }}>
                        <center>
                            <ReactTypingEffect text={'Final-Test'} speed="60" eraseSpeed="60" className="typingeffect"></ReactTypingEffect>
                        </center>
                    </div>

                    <div key="div" className="heading" style={{ marginTop: "3%" }} className="input">
                        <div key="div" align="center" >
                            <Input onChange={handleChange} type="text" name="image" placeholder="Search for images" style={{ width: "50%" }} />
                        </div>
                        <div key="div" align="center" style={{ marginTop: "2%" }}>
                            <Button className="btn-success" onClick={handleSubmit} type="submit">Search</Button>
                        </div>
                    </div>

                    <div className="result">
                        {allUser.map((image) => (
                            <div className="ss">
                                <Show image={image} />
                            </div>
                        ))}
                    </div>
                </div>

            </Container>
        </>
    )
}

export default Search
