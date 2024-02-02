import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import {Dashboard} from "./Pages/Dashboard"
import { Play } from "./Pages/Play";
import { SignUp } from "./Pages/SignUp";
import { CreateRoom } from "./Pages/CreateRoom";
import { useState } from "react";

import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');


function App() {

  const [joinedUsers,setJoinedUsers] = useState([]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/play" element={<Play socket={socket} joinedUsers={joinedUsers} setJoinedUsers={setJoinedUsers}/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/dashboard/create" element={<CreateRoom socket={socket} joinedUsers={joinedUsers} setJoinedUsers={setJoinedUsers}/>} />
        
      </Routes>
    </div>
  );
}

export default App;
