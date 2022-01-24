import { useContext } from "react"
import NotificationContext from '../../context/NotificationContext'

const Notification = () => {
    const { notification,} = useContext(NotificationContext)

    if(notification.message === '') {
        return (
            <div className="marqueeContainer" >
                <marquee>Thank you for visiting Eternal Glory's Webpage</marquee>
            </div>
        )
    }

    return(
        <div className="marqueeContainer" style={{color: notification.severity === 'error' ? 'red' : 'white'}}>
            <marquee>Thank you for visiting Eternal Glory's Webpage     *     {notification.message}</marquee>
        </div>
    )
}

export default Notification