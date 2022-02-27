import React, { useEffect, useState } from 'react'
import axios from 'axios'


function useUserProfile(userId) {
    const [userProfile, setUserProfile] = useState({fetchStatus: "fetching"})

    useEffect(async () => {
        try {
            const user = await axios.get(`http://localhost:3000/users/${userId}`)
            setUserProfile({...user.data, fetchStatus: "done"})
        }
        catch(err) {
            console.log(`Error fetching user: ${err}`)
            return {fetchStatus: "error"}
        }
    }, [userId])

    return userProfile
}

export default useUserProfile
