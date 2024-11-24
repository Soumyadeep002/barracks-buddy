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
import ContactPage from './ContactPage/ContactPage';
import AuthPage from './AuthPages/AuthPage'
import Footer from './components/Footer';
import AuthOtp from './AuthPages/AuthOtp';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <HomePage />
          <Footer></Footer>
        </>
      ),
    },
    {
      path: '/about',
      element: (
        <>
          <Navbar />
          <AboutSection />
          <Footer></Footer>
        </>
      ),
    },
    {
      path: '/free-notes',
      element: (
        <>
          <Navbar />
          <NotesPage />
          <Footer></Footer>
        </>
      ),
    },
    {
      path: '/courses',
      element: (
        <>
          <Navbar />
          <AuthGuard element={<CoursePage />} />
          <Footer></Footer>
        </>
      ),
    },
    {
      path: '/contact',
      element: (
        <>
          <Navbar />
          <ContactPage ></ContactPage>
          <Footer></Footer>
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
      element:(
        <>
        <AuthPage></AuthPage>, 
        <Footer></Footer>
        </>
      )
        
      
    },
    {
      path: '/otp',
      element:(
        <>
        <AuthOtp></AuthOtp>, 
        <Footer></Footer>
        </>
      )
        
      
    },
    {
      path: '/companypolicy',
      element: (
        <>
          <Navbar />
          <TermsAndConditionsPage/>
          <Footer></Footer>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}


export default App;
