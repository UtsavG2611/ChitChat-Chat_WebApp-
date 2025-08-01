import {io} from "socket.io-client";

let socket = null;

export const connectSocket = (userId)=>{
    socket = io(import.meta.env.MODE ==="developer" ? "http://localhost:4000":"/", {
        query: { userId: userId || "" },
    });

    return socket;
};

export const getSocket = ()=> socket;
export const disconnectSocket = ()=>{
    if(socket){
        socket.disconnect();
        socket = null;
    }
}