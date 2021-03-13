import React from 'react'
import { Button, Card, CardBody, Col, CardLink, CardSubtitle, Row, Input, CardText, CardTitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
const Show = ({image}) => {
    return (
        <>
            <Card >
                <CardBody >
                    <CardTitle tag="h5">
                        <img className="profile" src={image.user.profile_image.medium} />{" "}
                        <a style={{textDecoration:"none"}} href={"/profile/" + image.user.username}>{image.user.username}</a>
                    </CardTitle>
                </CardBody>
                <CardBody  >
                    <img key="img" width="100%" className="photo" src={image.urls.raw} alt="Card image cap" />
                </CardBody>
                <CardBody>
                    <CardText><FontAwesomeIcon icon={faHeart} />{" "}{image.likes} Like <FontAwesomeIcon icon={faComment} /></CardText>
                    <CardText><b>{image.user.username}</b> {image.description}</CardText>
                </CardBody>
            </Card>
        </>
    )
}

export default Show
