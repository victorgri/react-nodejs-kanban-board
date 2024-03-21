import { AddTask } from "./AddTask";
import { Nav } from "./Nav";
import { TaskContainer } from "./TaskContainer";

import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:5000')

export const Task = () => {
  return (
    <>
      <Nav />
      <AddTask socket={socket} />
      <TaskContainer socket={socket} />
    </>
  )
}

