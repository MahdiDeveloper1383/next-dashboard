'use client';
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage(){
    const [phone, setPhone] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (!phone.trim()) {
      alert('لطفا شماره موبایل را وارد کنید.');
      return;
    }
    // فراخوانی API
    const res = await fetch('https://randomuser.me/api/?results=1&nat=us');
    const data = await res.json();

    // ذخیره اطلاعات کاربر در localStorage
    localStorage.setItem('user', JSON.stringify(data.results[0]));

    // ریدایرکت به داشبورد
    router.push('/dashboard');
  };

    return(
        <div>
            <div>
      <input
        type="tel"
        placeholder="شماره موبایل"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleLogin}>ورود</button>
    </div>
        </div>
    )
}