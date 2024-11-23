// import { useState } from 'react'
import AboutSection from './AboutPage/AboutSection'
import CoursePage from './AboutPage/CoursePage/CoursePage'
import './App.css'
import AuthPage from './AuthPages/AuthPage'
import Form from './components/Form'
import Navbar from './components/Navbar'
import HomePage from './HomePage/HomePage'
import NotesPage from './NotesPage/NotesPage'

import { createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {
  
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Navbar><HomePage/></Navbar>
  //   },
  //   {
  //     path: '/about',
  //     element: <Navbar><AboutSection/></Navbar>
  //   },
  //   {
  //     path: '/free-notes',
  //     element: <Navbar><NotesPage/></Navbar>
  //   },
  // ])

  return (
    <>
    {/* <Form/> */}
    {/* <HomePage/> */}
    {/* <AboutSection/> */}
    {/* <NotesPage/> */}
    {/* <CoursePage/> */}
    <AuthPage/>

      {/* <RouterProvider router={router}/> */}

    </>
  )
}

export default App
