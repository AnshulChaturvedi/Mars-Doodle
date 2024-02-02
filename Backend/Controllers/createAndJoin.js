const Room = require("../models/room");


exports.createRoom = async (req, res) => {
    try {
        // Extract  data from request body
        const { nickname,email } = req.user;
        

        // Create a new room with admin data and join code
        const room = new Room({ 
            email
        });

        // Save the room to the database
        await room.save();

        // Respond with the room details
        res.status(201).json({ room,success:true });
    } catch (error) {
        console.error('Error creating room:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



exports.joinRoom = async (req, res) => {
    try {
        // Extract player data from request body
        const { nickname,email } = req.user;

        

        const data ={email}

        // Respond with the updated room details
        res.status(201).json({ data,success:true });
    } catch (error) {
        console.error('Error joining room:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

