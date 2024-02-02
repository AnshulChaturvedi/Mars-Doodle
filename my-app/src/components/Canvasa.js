import React from 'react'
import { useOnDraw } from '../hooks/useOnDraw'
import { ToolBoxa } from '../components/ToolBoxa';
import { useState } from 'react';



export const Canvasa = ({socket}) => {

    const { setCanvasRef, setUndoRef } = useOnDraw({
        onDraw,
        onUndo,
        socket
    },[]);

    const [color ,setColor] = useState();

    function colorChangeHandler(event){
        setColor(event.target.value)
    }


    const [inputType , setInputType] = useState();

    function changeHandler(event){
        setInputType(event.target.value)
    }

    function onDraw(ctx, point, prevPoint) {
        drawLine(prevPoint, point, ctx, color , 5);
    }


    function drawLine(start, end, ctx, color, width) {
        start = start ?? end;
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
        ctx.fill();
    }

    function onUndo (){
        console.log("Undo")
    }

    // function clearCanvas() {
    //     
    //     if(canvas){
    //         const ctx = canvas.getContext('2d');
    //         ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     }


    return (
        <div className='flex flex-col items-center'>
            <canvas id='canvas' className=" bg-white border-2 border-black w-5/6 h-[500px]"
                ref={setCanvasRef}
            ></canvas>

        <ToolBoxa setUndoRef={setUndoRef} colorChangeHandler={colorChangeHandler} changeHandler={changeHandler}/>
        </div>
    )
}
