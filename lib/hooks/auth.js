import React from 'react'

export function useAuth() {
    const [loggedIn, setLoggedIn] = React.useState(false)
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        setLoading(true)
        fetch('/api/get-session')
            .then((res) => res.json())
            .then((data) => {
                if(data.loggedIn) {
                    setLoggedIn(true)
                    setUser(data.user)
                }
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return {
        user,
        loggedIn,
        loading,
        error
    }
}