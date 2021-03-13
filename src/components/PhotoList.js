import React from 'react'
import { Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardLink, CardSubtitle, CardText, CardTitle, Col, Container, Label, Row } from 'reactstrap'


const PhotoList = ({ photo }) => {
    return (
        <>
            <Col sm="4">
                <Card inverse>
                    <CardImg id="willll" src={photo.urls.raw} alt="Card image cap" />
                </Card><br />
            </Col>
        </>
    )
}

export default PhotoList
