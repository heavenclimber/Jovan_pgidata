import React, { useEffect, useState, Component } from "react";

export default function Dashboard({islog, user, pass}) {
    const Keluar = () => {
        localStorage.removeItem("User");
        localStorage.removeItem("Password");
        islog(false)
    }
    return (
        <div className="container">
          <h2>Selamat Datang {user}</h2>
          <button onClick={()=>Keluar()}>Logout</button>
        </div>
      );
}
