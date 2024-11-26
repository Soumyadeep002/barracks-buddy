import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './HomePage/HomePage';
import AboutSection from './AboutPage/AboutSection';
import NotesPage from './NotesPage/NotesPage';
import CoursePage from './AboutPage/CoursePage/CoursePage';
import AuthGuard from './AuthGuard/AuthGuard';
import TermsAndConditionsPage from './Terms and conditions/TermsAndConditionsPage';
import ContactPage from './ContactPage/ContactPage';
import AuthPage from './AuthPages/AuthPage'
import Footer from './components/Footer';

import CoursePayment from './AboutPage/CoursePage/CoursePayment';
import AuthOtp from './AuthPages/AuthOtp';
import CourseDetailsPage from './AboutPage/CoursePage/CourseDetailsPage';
import PageLoader from './components/PageLoader';
import ForgetPasswordPage from './AuthPages/ForgetPasswordPage';


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
          {/* <AuthGuard element={<CoursePage />} /> */}
          <CoursePage />
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
      path: '/payment',
      element: (
        <>
          <Navbar />
          <CoursePayment/>
          <Footer></Footer>
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
      path: '/resetpassword',
      element:(
        <>
        <ForgetPasswordPage></ForgetPasswordPage> 
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
    {

      path: '/preloader',
      element: (
        <>
          <Navbar />
          <PageLoader/>
          <Footer></Footer>
        </>
      ),
    },
    {
      path: '/coursedetails',
      element: (
        <>
          <Navbar />
          <CourseDetailsPage/>
          <Footer></Footer>
        </>)},

       {
      path: '/courses/:id',
      element: (
        <>
          <Navbar />
          <AuthGuard element={<CoursePayment></CoursePayment>} />
          
          <Footer></Footer>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}


export default App;
