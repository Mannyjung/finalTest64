import React from 'react'
import Profile from '../components/Profile'


const Profiles = (props) => {
    return (
        <div>
            <Profile id={props.match.params.id}/>
        </div>
    )
}

export default Profiles
