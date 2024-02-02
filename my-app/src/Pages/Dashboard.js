import React from 'react'

import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div classNameName="grid h-screen place-items-center">
      <div className="container  relative flex flex-col lg:flex-row w-3/4 h-4/5 bg-gradient-to-r from-indigo-950
         to-indigo-950 p-8 rounded-md shadow-md">
        
        <div className="mx-auto flex flex-col items-center justify-between w-1/4 bg-gradient-to-r from-indigo-800
             to-indigo-950 p-8 rounded-l-lg shadow-md">
          <div className="space-y-4 lg:space-y-12 lg:flex flex-col items-center">
            <img src="./images/gamer-esport-mascot-logo-design_630803-47.jpg" alt="User Avatar"
              className="rounded-full"/>
              <a href="#" className="font-mullish text-2xl leading-7 text-white opacity-70">
                @Username
              </a>
              <button className="bg-blue-600 text-white py-3 px-4 rounded-md font-mullish font-bold
                     hover:bg-blue-700 transition-all duration-200">
                Log Out
              </button>
          </div>
        </div>

       
        <div className="space-y-4 my-auto mx-auto lg:my-0 justify-center items-center text-white w-3/4 h-full
             bg-gradient-to-r from-indigo-800 to-indigo-950 p-8 rounded-r-lg shadow-md">
          <h1 className="font-mullish font-extrabold text-4xl leading-10">
            Game History
          </h1>
          <div className="overflow-y-auto max-h-48">
            <ul>
              
              <li className="mb-1 bg-blue-950 p-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white">Game 1</span>
                  <span className="text-white">Date: 2023-11-11</span>
                </div>
                <p className="text-white">Player Ayushman vs Player Anshul</p>
                <p className="text-white">Result: Drawn </p>
              </li>
              <li className="mb-1 bg-blue-950 p-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white">Game 2</span>
                  <span className="text-white">Date: 2023-11-12</span>
                </div>
                <p className="text-white">Player Aviral vs Player Ayushman</p>
                <p className="text-white">Result: Aviral Wins</p>
              </li>
              <li className="mb-1 bg-blue-950 p-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white">Game 3</span>
                  <span className="text-white">Date: 2023-11-13</span>
                </div>
                <p className="text-white">Player Ayushman vs Player Aviral</p>
                <p className="text-white">Result: Ayushman Wins</p>
              </li>
              <li className="mb-1 bg-blue-950 p-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white">Game 4</span>
                  <span className="text-white">Date: 2023-11-14</span>
                </div>
                <p className="text-white">Player Anshul vs Player Aviral</p>
                <p className="text-white">Result: Anshul Wins</p>
              </li>
            </ul>
          </div>
          <button 
          onClick={()=>navigate('/dashboard/create')}
          className=" relative top-5 bottom-5 bg-blue-600 text-white py-3 px-4 rounded-md font-mullish font-bold
                 hover:bg-blue-700 transition-all duration-200">
            Play Again
          </button>
        </div>
      </div>
    </div>
  )
}
