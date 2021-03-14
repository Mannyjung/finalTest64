import React from 'react'
import Profile from '../components/Profile'
import PhotoList from '../components/PhotoList'


const Profiles = (props) => {
    return (
        <div>
            <Profile id={props.match.params.id}/>
            <PhotoList id={props.match.params.id}  />
        </div>
    )
}

export default Profiles
