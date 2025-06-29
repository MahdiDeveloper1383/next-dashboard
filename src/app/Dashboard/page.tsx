'use client'
import Getuser from "../Hooks/Getuser";
import styles from '../Dashboard/dashboard.module.scss'
import { use } from "react";
export default function Dashboard(){
    const {user,loading,error} = Getuser()
    return ( 
        <div className={styles.dashboard_container}>
        <div className={styles.user_card}>
            <img src={user?.picture.large} alt={user?.name.first} className={styles.user_avatar} />
            <div className={styles.user_name}>{user?.name.first}</div>
            <div className={styles.user_email}>{user?.email}</div>
            <div className={styles.user_phone}>{user?.phone}</div>
        </div>

    </div>
     );
}
 