import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './HomePage/HomePage';
import AboutSection from './AboutPage/AboutSection';
import NotesPage from './NotesPage/NotesPage';
import CoursePage from './AboutPage/CoursePage/CoursePage';
import Form from './components/Form';
import AuthGuard from './AuthGuard/AuthGuard';
import TermsAndConditionsPage from './Terms and conditions/TermsAndConditionsPage';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <HomePage />
        </>
      ),
    },
    {
      path: '/about',
      element: (
        <>
          <Navbar />
          <AboutSection />
        </>
      ),
    },
    {
      path: '/free-notes',
      element: (
        <>
          <Navbar />
          <NotesPage />
        </>
      ),
    },
    {
      path: '/course',
      element: (
        <>
          <Navbar />
          <AuthGuard element={<CoursePage />} />
        </>
      ),
    },
    {
      path: '/form',
      element: (
        <>
          <Navbar />
          <Form />
        </>
      ),
    },
    {
      path: '/login',
      element: <Form />, // Replace with your Login Component
    },
    {
      path: '/companypolicy',
      element: (
        <>
          <Navbar />
          <TermsAndConditionsPage/>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
