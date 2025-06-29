"use client";
import axios from 'axios';
import styles from './page.module.scss';
import { useState } from 'react';
import Getuser from './Hooks/Getuser';
import { useRouter } from 'next/navigation';
export default function Home() {
  const [phone, setphone] = useState<string>('')
  const [Error, setError] = useState('')
  const router = useRouter()
  const { user, loading, refetch } = Getuser()
  const handlelogin = async () => {
    if (!phone.trim()) {
      setError('Enter phone number')
      return
    }
    if (!/^09\d{9}$/.test(phone)) {
      setError('invalid phone number');
      return;
    }
    await refetch();

    if (user && user.phone) {
      const userPhone = user.phone.replace(/\D/g, "");
      if (userPhone.endsWith(phone.slice(-7))) {
        setError("");

        const userData = {
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          phone: user.phone,
          picture: user.picture.large,
        };

        localStorage.setItem("user", JSON.stringify(userData));

        router.push("/Dashboard");
      } else {
        setError("Not founded phone number");
      }
    } else {
      setError("We can't get data from API");
    }
  }
  return (
    <main>
      <div className={styles.login_div}>
        <div className={styles.login_title_div}>
          <h1 className={styles.login_title}>Login</h1>
        </div>
        <div className={styles.login_form_div}>
          <input value={phone} className={styles.phonenumber_inp} onChange={(e) => setphone(e.target.value)} type="tel" placeholder='Please Enter Your number phone' />
          <h4>{Error}</h4>
          <button className={styles.login_but} onClick={handlelogin}>Login</button>
        </div>
      </div>
    </main>
  );
}
