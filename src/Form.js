import React, { useEffect } from "react";
import google from './Images/google.png' 
import facebook from './Images/facebook.png' 

function Form() {
  useEffect(()=>{
    document.title = "Login Form"
  },[])
  return (
    <div className="flex justify-center h-screen bg-slate-500">
      <div className="self-center h-[70%] w-[27%] bg-white p-4">
        <Heading />
        <Span />
        <Input inputType="email" name="Your Email" />
        <Input inputType="password" name="Password" />
        <Validation />
        <Button />
        <Lines />
        <Commands />
        <Footer />
      </div>
    </div>
  );
}



function Heading() {
  return (
    <div>
      <h1 className="text-slate-700 text-[2rem] font-bold">Welcome!</h1>
    </div>
  );
}

function Span() {
  return <span className="text-sm text-slate-400">Log in your account</span>;
}

function Input({ inputType, name }) {
  return (
    <div className="mt-4">
      <label htmlFor={name} className="text-sm text-slate-500">
        {name}
      </label>{" "}
      <br />
      <input
        type={inputType}
        name={name}
        className="border-2 border-black h-[2rem] w-[100%] rounded-md"
      />
    </div>
  );
}

function Validation() {
  return (
    <div className="flex flex-row gap-1 justify-between">
      <div className="flex gap-1">
        <input type="checkbox" name="remember" value="Bike" />
        <label htmlfor="remember" className="text-black text-sm">
          Remember Me
        </label>
      </div>
      <span className="text-sm text-slate-500">forget password?</span>
    </div>
  );
}

function Button() {
  return (
    <div className="flex bg-blue-600 rounded-md p-2 justify-center mt-5">
      <button className="self-center text-white">Login</button>
    </div>
  );
}

function Lines() {
  return (
    <div className="flex justify-evenly">
      <hr className="h-[2px] my-8 bg-gray-200 border-1 dark:bg-gray-800 w-[40%]"></hr>
      <span className="inline self-center text-slate-500 text-sm">or</span>
      <hr className="h-[2px] my-8 bg-gray-200 border-1 dark:bg-gray-800 w-[40%]"></hr>
    </div>
  );
}

function Commands(){
  return(
    <div className="flex justify-center gap-2">
      <button className="border-[1.5px] border-slate-400 p-2 rounded-md flex gap-1"><img src={google} alt="google" className="h-5 w-5 inline" /><span className="inline text-sm">Continue with Google</span></button> 
      <button className="border-[1.5px] border-slate-400 p-2 rounded-md flex gap-1"><img src={facebook} alt="google" className="h-5 w-5 inline" /><span className="inline text-sm">Continue with Facebook</span></button> 
    </div>
  )
}


function Footer(){
  return(
    <div className="flex justify-center pt-6">
      <div className="self-center">
        <span className="text-slate-500 text-sm">Don't have any account?</span>
        <a href="http://google.com" className="text-blue-600 text-sm">Sign Up</a>
      </div>
    </div>
  )
}



export default Form;