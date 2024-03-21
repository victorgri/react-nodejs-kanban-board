const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const cors = require('cors');

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173"
  }
});


const UID = () => Math.random().toString(36).substring(2, 10);

let tasks = {
  pending: {
    title: "pending",
    items: [
      {
        id: UID(),
        title: "",
      },
    ],
  },
  ongoing: {
    title: "ongoing",
    items: [
      {
        id: UID(),
        title: "",
      },
    ],
  },
  completed: {
    title: "completed",
    items: [
      {
        id: UID(),
        title: "",
      },
    ],
  },
};
app.use(cors());
app.use(express.json())


const PORT = 5000;




app.get('/api', (req, res) => {
  res.json(tasks)
});

io.on('connection', (socket) => {
  console.log(`${socket.id} a user connected`);

  socket.on('createTask', (data) => {
    console.log(data);
    const newTask = { id: UID(), title: data };
    
    tasks['pending'].items.push(newTask)

    io.sockets.emit('tasks', tasks);

    console.log(tasks);
  });

  socket.on('taskDragged', (data) => {
    const { source, destination } = data;
    const itemMoved = {
      ...tasks[source.droppableId].items[source.index],
    };

    tasks[source.droppableId].items.splice(source.index, 1);
    tasks[destination.droppableId].items.splice(destination.index, 0, itemMoved);

    io.sockets.emit('tasks', tasks);
  });

  socket.on('disconnect', () => {
    socket.disconnect();
    console.log(`${socket.id} a user disconnected`);
  });
});



server.listen(PORT, () => {
  console.log('The server is running on: ' + PORT);
});