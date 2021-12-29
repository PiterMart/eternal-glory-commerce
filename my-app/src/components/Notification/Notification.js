// import { useContext } from "react"
// import NotificationContext from '../../context/NotificationContext'

// const Notification = () => {
//     const { notification, setNotification } = useContext(NotificationContext)

//     if(notification.message === '') {
//         return null
//     }

//     return(
//         <div style={{ color: notification.severity === 'error' ? 'red' : 'green'}} onClick={() => setNotification('succes', '')}>
//             {notification.message}
//         </div>
//     )
// }

// export default Notification