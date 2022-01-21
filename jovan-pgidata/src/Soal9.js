import React, { useEffect, useState, Component } from "react";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";

export default function Soal9() {
  const [isLogin, setLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      {isLogin === true ? (
        <div>
          <Dashboard islog={setLogin} user={username} pass={password} />
        </div>
      ) : (
        <div>
          <Login islog={setLogin} setuser={setUsername} setpass={setPassword} user={username} pass={password} />
        </div>
      )}
    </div>
  );
}
