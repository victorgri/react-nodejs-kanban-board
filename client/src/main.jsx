import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import { Login } from './components/Login.jsx';
import { Task } from './components/Task.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/task',
    element: <Task />,
  },
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>,
)
