import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Snackbar, Alert } from '@mui/material';

import useSnackBar from './hooks/useSnackBar';

import HomeScreen from './feature-home/ui/HomeScreen.jsx';
import SignInScreen from './feature-auth/ui/SignInScreen';
import SignInModesScreen from './feature-auth/ui/SignInModesScreen';
import CoursesScreen from './feature-courses/ui/CoursesScreen';
import ApplicantScreen from './feature-applicant/ui/ApplicantScreen';
import StaffMemberScreen from './feature-staffMember/ui/StaffMemberScreen';
import AddmissionScreen from './feature-admission/ui/AdmissionScreen';
import AdmissionCommitteeScreen from './feature-admissionCommittee/ui/AdmissionCommitteeScreen';
import RequireAuth from './common/components/RequireAuth';
import AboutUsScreen from './feature-aboutUs/AboutUsScreen';
import ContactUsScreen from './feature-contact-us/ContactUsScreen';

function App() {

  const { isVisible, handleCloseSnackbar, message, severity } = useSnackBar();

  return (
    <React.Fragment>


      <BrowserRouter>
        <Routes>

          <Route path='/'
            element={
              <RequireAuth>
                <HomeScreen />
              </RequireAuth>
            } />

          <Route path='/sign-in' element={<SignInModesScreen />} />
          <Route path='/sign-in/:mode' element={<SignInScreen />} />
          {/* <Route path='/sign-up' element={<SignUpScreen />} /> */}
          <Route path='/courses' element={
            <RequireAuth>

              <CoursesScreen />
            </RequireAuth>
          } />

          <Route path='/applicants'
            element={
              <RequireAuth>
                <ApplicantScreen />
              </RequireAuth>
            } />

          <Route path='/staff-members' element={
            <RequireAuth>
              <StaffMemberScreen />
            </RequireAuth>
          } />

          <Route path='/admissions' element={
            <RequireAuth>

              <AddmissionScreen />
            </RequireAuth>
          } />

          <Route path='/admission-committee' element={
            <RequireAuth>
              <AdmissionCommitteeScreen />
            </RequireAuth>
          } />

          <Route path='/about-us' element={<AboutUsScreen />} />

          <Route path='/contact-us' element={<ContactUsScreen />} />
        </Routes>
      </BrowserRouter>

      <Snackbar open={isVisible}
        onClose={handleCloseSnackbar}
        autoHideDuration={4000}
      >
        <Alert severity={severity}
          onClose={handleCloseSnackbar}
          sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>

    </React.Fragment>
  );
}

export default App;
