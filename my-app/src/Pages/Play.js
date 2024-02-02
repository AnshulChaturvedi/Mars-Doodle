import React from 'react';
import { TopOfCanvas } from '../components/TopOfCanvas';
import { Players } from '../components/Players';
import { Canvasa } from '../components/Canvasa';
import { ChatBox } from '../components/ChatBox';



export const Play = ({socket,joinedUsers,setJoinedUsers}) => {


    return (
        <div className="w-full h-screen overflow-hidden bg-gray-700">

            <TopOfCanvas />


            <div className="bg-gray-700 flex justify-between w-4/5 mx-auto">

                <Players socket={socket} joinedUsers={joinedUsers} />

                
                <Canvasa socket = {socket}/>

                
                <ChatBox socket={socket}/>
            </div>


            
        </div>
    );
};
// useEffect(() => {
    //     const canvas = document.querySelector('canvas');
    //     const tools = document.querySelectorAll('tool')

    //     let ctx = canvas.getContext('2d');

    //     let isdrawing = false;
    //     let penWidth = 1;

    //     window.addEventListener("load", () => {
    //         canvas.width = canvas.offsetWidth;
    //         canvas.height = canvas.offsetHeight;
    //     })

    //     const startDraw = () => {
    //         isdrawing = true;
    //         ctx.beginPath();
    //         ctx.lineWidth = penWidth;
    //     }

    //     const drawing = (e) => {
    //         if (!isdrawing) return;
    //         ctx.lineTo(e.offsetX, e.offsetY);
    //         ctx.lineCap = 'round';
    //         ctx.lineJoin = 'round';
    //         ctx.stroke();
    //     }


    //     canvas.addEventListener("mousedown", startDraw);
    //     canvas.addEventListener("mousemove", drawing);
    //     canvas.addEventListener("mouseup", () => isdrawing = false)

    // }, []);