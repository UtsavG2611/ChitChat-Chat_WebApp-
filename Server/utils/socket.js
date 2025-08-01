import {Server, Socket} from "socket.io";

const userSocketMap = {};

let io;

export function initSocket(server){
    io = new Server(server, {
        cors: {
            origin: [process.env.FRONTEND_URL],
        },
    });

    io.on("connection", (socket)=>{
        console.log("A user connected to the server", socket.id)

        const userId= socket.handshake.userId

        if(userId) userSocketMap[userId] = socket.id;

        io.emit("getOnlineUsers", Object.keys(userSocketMap));
        socket.on("disconnect", ()=>{
            console.log("A user disconnect", socket.io);
            delete userSocketMap[userId];
            io.emit("getOnlineUsers", Object.keys(userSocketMap));
        });
    });
}

export function getReceiverSocketId(userId){
    return userSocketMap[userId];
}
export {io};