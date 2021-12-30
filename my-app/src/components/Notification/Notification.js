import { useContext } from "react"
import NotificationContext from '../../context/NotificationContext'

const Notification = () => {
    const { notification } = useContext(NotificationContext)

    if(notification.message === '') {
        return null
    }

    return(
        <div style={{ color: notification.severity === 'error' ? 'red' : 'green'}}>
            {notification.message}
        </div>
    )
}

export default Notification