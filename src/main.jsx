import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Card from './Card.jsx'
import SeperateCard from './SeperateCard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from './MainPage.jsx'
import Buttons from './Buttons.jsx'
const router = createBrowserRouter([
  {path: "/" ,
   element:<App /> ,
   
}, {
  path:'/products',
  element:<Card />
},{
  path:'/details/:id',
  element:<SeperateCard />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider  router ={router}/>
  </React.StrictMode>,
)
