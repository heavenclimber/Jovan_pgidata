import React, { useEffect, useState, Component } from "react";

export default function Login({ islog, setuser, setpass, user, pass }) {
  const Masuk = () => {
    localStorage.setItem("User", JSON.stringify(user));
    localStorage.setItem("Password", JSON.stringify(pass));
    islog(true);
  };

  return (
    <div className="container">
      <input
        placeholder="Username"
        onInput={(e) => setuser(e.target.value)}
      ></input>
      <input
        placeholder="Password"
        onInput={(e) => setpass(e.target.value)}
      ></input>
      <button onClick={() => Masuk()}>Masuk</button>
    </div>
  );
}
