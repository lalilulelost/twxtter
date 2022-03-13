import React from 'react'

import useUserProfile from '../hooks/useUserProfile.js'

function ProfileInfo({userId}) {
    const className = 'ProfileInfo'
    const { username, bio, fetchStatus } = useUserProfile({id: userId})

    const profileInfoDisplay = (
        <div>
            <h1>{username}</h1>
            <p>Bio: {bio}</p>
        </div>
    )

    const display = 
          fetchStatus === 'fetching'?
            <h1>Loading user data...</h1>
        : fetchStatus === 'done'?
            profileInfoDisplay
        : fetchStatus === 'not-found'?
            <h1>User not found</h1>
        :   <h1>Error fetching user data</h1>

    return (
        <div className={className}>
            {display}
        </div>
    )
}

export default ProfileInfo
