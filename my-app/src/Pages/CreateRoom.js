import React from 'react'
import { useState } from 'react';
import axios from 'axios';


export const CreateRoom = ({ socket, joinedUsers, setJoinedUsers }) => {


    const [generatedCode, setGeneratedCode] = useState('');
    const [joinRoomCode, setJoinRoomCode] = useState('');

    const genCode = () => {
        var S4 = () => {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (
            S4() +
            S4() +
            "-" +
            S4() +
            "-" +
            S4() +
            "-" +
            S4() +
            "-" +
            S4() +
            S4() +
            S4()
        );
    };

    const handleCreation = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/v1/create');
            const roomData = { generatedCode }
            if (response.status === 201) {
                roomData.userId = response.data.email

                socket.emit('userjoined', (roomData) => {
                    console.log(`user ${roomData.userId} joined`)
                })
                setJoinedUsers((joinedUsers) => [...joinedUsers, roomData.userId]);

            }
            else {
                console.log("Authentication failed! Make sure you are logged in Sirr!")
            }
        } catch (e) {
            console.log("Something went wrong try again . Make sure u r logged in sirr!")
            console.log(e);
        }



    }

    const handleJoin = async (e) => {
        e.preventDefault();
        try {
            
            const response = await axios.post('http://localhost:5000/api/v1/join',);
            const roomData = { generatedCode }
            if (response.status === 201) {
                roomData.userId = response.data.email

                socket.emit('userjoined', (roomData) => {
                    console.log(`user ${roomData.userId} joined`)
                })
                setJoinedUsers((joinedUsers) => [...joinedUsers, roomData.userId]);

            }
            else {
                console.log("Authentication failed! Make sure you are logged in Sirr!")
            }
        } catch (error) {

        }
    }

    const copyCodeToClipboard = () => {
        // Implement logic to copy the generated code to the clipboard
    };


    return (
        <div className='flex flex-row h-screen w-screen bg-gray-100 items-center justify-center'>
            <div className='flex flex-col w-[400px] h-[400px] border border-gray-300 shadow-md rounded-md p-6 bg-white items-center justify-center'>
                <h1 className='font-bold text-2xl mb-4'>Create Room</h1>
                <form className='flex flex-col items-center' onSubmit={handleCreation}>
                    <div className='mb-4'>
                        <label className='text-lg'>Generated Code:</label>
                        <input
                            type='text'
                            value={generatedCode}
                            readOnly
                            className='border border-gray-300 px-2 py-1 rounded w-64 focus:outline-none focus:border-blue-500'
                        />
                    </div>
                    <button
                        type='button'
                        onClick={() => setGeneratedCode(genCode())}
                        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none'
                    >
                        Generate Code
                    </button>
                    <button
                        onClick={copyCodeToClipboard}
                        className='mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none'
                    >
                        Copy Code
                    </button>
                    <button
                        type='submit'

                        className='mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none'
                    >
                        Create Room
                    </button>
                </form>
            </div>

            <div className='flex flex-col h-[400px] w-[400px] border border-gray-300 shadow-md rounded-md p-6 bg-white items-center justify-center ml-4'>
                <h1 className='font-bold text-2xl mb-4'>Join Room</h1>
                <form className='flex flex-col items-center'>
                    <div className='mb-4'>
                        <label className='text-lg'>Room Code:</label>
                        <input
                            type='text'
                            value={joinRoomCode}
                            onChange={(e) => setJoinRoomCode(e.target.value)}
                            className='border border-gray-300 px-2 py-1 rounded w-64 focus:outline-none focus:border-blue-500'
                        />
                    </div>
                    <button
                        onClick={handleJoin}
                        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none'
                    >
                        Join Room
                    </button>
                </form>
            </div>
        </div>
    )
}
