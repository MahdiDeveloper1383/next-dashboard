'use client';
import axios from 'axios';
import styles from './page.module.scss';
import { useState } from 'react';
export default function Home() {
  const [phone,setphone] = useState<string>('')
  return (
    <main>
      <div className={styles.login_div}>
        <div className={styles.login_title_div}>
          <h1 className={styles.login_title}>Login</h1>
        </div>
        <div className={styles.login_form_div}>
          <form action="">
            <input className={styles.phonenumber_inp} onChange={(e)=>setphone(e.target.value)} type="tel" placeholder='Please Enter Your number phone'/>

          </form>
        </div>
      </div>
    </main>
  );
}
