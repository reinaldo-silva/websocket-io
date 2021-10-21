import express from "express";
import "express-async-errors";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
app.use(express.json());

const serverHttp = createServer(app);

const io = new Server(serverHttp, { cors: { origin: "*" } });

interface IRoomUser {
  room: string;
  username: string;
  socket_id: string;
}

interface IMessage {
  room: string;
  text: string;
  createdAt: Date;
  username: string;
}

const users: IRoomUser[] = [];
const messages: IMessage[] = [];

io.on("connection", (socket) => {
  socket.on("room", (data) => {
    socket.join(data.room);

    const userInRoom = users.find(
      (user) => user.username === data.username && user.room === data.room
    );

    if (userInRoom) {
      userInRoom.socket_id = socket.id;
    } else {
      users.push({
        room: data.room,
        username: data.username,
        socket_id: socket.id,
      });
    }

    io.to(data.room).emit("message", messages);
  });

  socket.on("message", (data) => {
    const message: IMessage = {
      room: data.room,
      username: data.username,
      text: data.message,
      createdAt: new Date(),
    };

    messages.push(message);

    io.to(data.room).emit("message", messages);
  });

  socket.on("getMessages", (data) => {
    io.to(data.room).emit("message", messages);
  });

  socket.on("teste", (data) => {
    let i = 1;

    const timeout = (i: number) => {
      setTimeout(() => {
        io.to(data.room).emit("teste", { indice: i });
      }, 2000 * i);
    };

    for (i; i <= 10; i += 1) {
      timeout(i);
    }
  });
});

export { serverHttp };
