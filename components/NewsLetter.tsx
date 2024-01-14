"use client";
import React from 'react'
import { useState,useEffect } from 'react';
import {toast, Toaster } from 'react-hot-toast';
import axios from 'axios';





function NewsLetter() {
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if(email.length > 0){
      setDisabled(false);
    }
    else{
      setDisabled(true);
    }
  }, [email]);
  async function sendMail() {
  await axios.post('/api/email', {email})

  toast.success('Email sent successfully');
setEmail("");

}
 
   


  return (
    <div className="mx-auto max-w-7xl px-2 py-2 lg:px-0">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="text-3xl font-bold text-black">Sign up for our weekly newsletter</h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
            commodo posuere et sit amet ligula.
          </p>
          
          <form className="mt-6">
            <div className="flex w-full max-w-md flex-col space-y-4">
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ></input>
             <div>
             <button onClick={sendMail}
             disabled={disabled}
             type="button"
             className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
             >
      Subscribe
    </button>
             </div>
            </div>
          </form>
          <p className="mt-2">
            <span className="text-sm text-gray-600">
              By signing up, you agree to our terms of service and privacy policy.
            </span>
          </p>
        </div>
        <div className="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
          <img
            className="h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ld3NsZXR0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="Newsletter"
            />
        </div>
      </div>
<div><Toaster/></div>
    </div>
  )
}
export default NewsLetter