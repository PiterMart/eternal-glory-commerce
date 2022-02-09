import React, { useState } from 'react'

const NotificationContext = React.createContext()

export const NotificationContextProvider = ({children}) => {
    const [message, setMessage] = useState('')


    const setNotification = (message) => {
        setMessage(message)

        setTimeout(() => {
            setMessage('')
        }, 20000)
    }

    return (
        <NotificationContext.Provider value={{
            notification: {
                message
            },
            setNotification
        }}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext;