"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AddProduct from '/components/AddProduct'

export default function Account () {
  const router = useRouter();
  const [session, setSession] = useState('');

  useEffect(() => {
    const storedSession = window.localStorage.getItem('session');
    const session = JSON.parse(storedSession);
      
    setSession(session);
  },[]);

  const [activeTab, setActiveTab] = React.useState('tab1');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const signOut = () => {
    window.localStorage.removeItem('session');
    router.push('/');
  }

  return (
    <div className="flex flex-col p-10">
      <div className="mb-5">
        <h1 className="text-xl font-bold mb-5 inline"> {session.username} </h1>
        <button className="ms-5 inline border rounded p-2 px-3" onClick={signOut}>Çıkış Yap</button>
      </div>
      
      <ul className="flex flex-row mb-4">
        <li className={`px-4 py-2 rounded-md cursor-pointer ${activeTab === 'tab1' ? 'dark:bg-zinc-900': ''}`} onClick={() => handleTabChange('tab1')}>
          Siparişlerim
        </li>
        <li className={`px-4 py-2 rounded-md cursor-pointer ${activeTab === 'tab2' ? 'dark:bg-zinc-900': ''}`} onClick={() => handleTabChange('tab2')}>
          Ürünlerim
        </li>
        <li className={`px-4 py-2 rounded-md cursor-pointer ${activeTab === 'tab3' ? 'dark:bg-zinc-900': ''}`} onClick={() => handleTabChange('tab3')}>
          Ürün Ekle
        </li>
      </ul>

      <hr />

      <div className="flex flex-col">
        {activeTab === 'tab1' && (
          <div className="p-4 rounded-md">
            <p></p>
          </div>
        )}
        {activeTab === 'tab2' && (
          <div className="p-4 rounded-md">
            <p></p>
          </div>
        )}
        {activeTab === 'tab3' && (
          <div className="p-4 rounded-md">
            <AddProduct />
          </div>
        )}
      </div>
    </div>
  );
};