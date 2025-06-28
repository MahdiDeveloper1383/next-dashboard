'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (!phone.trim()) {
      alert('لطفاً شماره موبایل را وارد کنید.');
      return;
    }

    try {
      const res = await fetch('https://randomuser.me/api/?results=1&nat=us');
      const data = await res.json();
      localStorage.setItem('user', JSON.stringify(data.results[0]));
      router.push('/dashboard');
    } catch (error) {
      alert('مشکل در دریافت اطلاعات از سرور.');
    }
  };
  
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: '0 20px'
    }}>
      <h1 style={{ marginBottom: '20px' }}>ورود</h1>
      <input
        type="tel"
        placeholder="شماره موبایل"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          maxWidth: '300px',
          marginBottom: '10px',
          fontSize: '16px'
        }}
      />
      <button
        onClick={handleLogin}
        style={{
          padding: '10px',
          width: '100%',
          maxWidth: '300px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        ورود
      </button>
    </main>
  );
}
