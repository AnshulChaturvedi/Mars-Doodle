import React, { useState, useEffect } from 'react';


export const ChatBox = ({socket}) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    socket.on('chat message', (msg) => {
      console.log("mesg aya frontend pe ji")
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, );

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {//removing extra white spaces
      console.log("mesg gya front end se ji")
      socket.emit('chat message', inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div className="bg-blue-100 w-[250px] h-[500px] flex flex-col justify-between p-4 text-black ">

      <div className="flex-1 overflow-y-auto">
        {messages.map((message, index) => {
          console.log('message:', message);
          return <div key={index}>{message.msg}</div>;
        })}
      </div>
      <div className="p-4 text-black">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          Send
        </button>
      </div>
    </div>
  );
};
