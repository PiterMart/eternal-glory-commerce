import { useContext } from "react"
import NotificationContext from '../../context/NotificationContext'

const Notification = () => {
    const { notification,} = useContext(NotificationContext)

    if(notification.message === '') {
        return (
            <div className="marqueeContainer" >
                <marquee> Gracias por comprar en Eternal Glory</marquee>
            </div>
        )
    }

    return(
        <div className="marqueeContainer" style={{color: notification.severity === 'error' ? 'red' : 'white'}}>
            <marquee>Gracias por comprar en Eternal  * {notification.message}</marquee>
        </div>
    )
}

export default Notification