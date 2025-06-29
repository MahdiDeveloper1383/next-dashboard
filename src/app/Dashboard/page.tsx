'use client'
import Getuser from "../Hooks/Getuser";
import styles from '../Dashboard/dashboard.module.scss'
export default function Dashboard(){
    const {user,loading,error} = Getuser()
    return ( 
        <div className={styles.dashboard_container}>
            <h2 className={styles.welcome_message}>👋 Hi {user?.name.first}، Wellcome</h2>
            <img src={user?.picture.large} alt="User" className={styles.user_avatar} />
            <h1 className={styles.user_name}>{user?.name.first}</h1>
            <p className={styles.user_email}>{user?.email}</p>
            <p className={styles.user_phone}>{user?.phone}</p>
            <button
                className={styles.logout_btn}
            >
                خروج
            </button>
        </div>
     );
}
 