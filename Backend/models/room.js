const { bool } = require("joi");
const mongoose = require("mongoose");

// const playerSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//     },
//     // nickname: {
//     //     type: String,
//     //     required: true,
//     // },
//     // score:{
//     //     type:Number,
//     //     required:true,
//     // },
//     // admin:{
//     //     type:Boolean,
//     //     required:true,

//     // }
//     // Add other player-related fields as needed
// });

const roomSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
    }
    
    // admin_nickname:{
    //     type:String,
    //     required:true,
    // },
    // players: [playerSchema],
    // joincode:{
    //     type:Number,
    //     required:true,
    // }
})

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;