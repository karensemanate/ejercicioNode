import React from 'react';
import { BrowserRouter as RouterKYS, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProviderKYS } from './contexts/AuthContextKYS';
import LoginKYS from './pages/Auth/LoginKYS';
import HomeKYS from './pages/HomeKYS';
import PrivateRouteKYS from './components/common/PrivateRouteKYS';
import PetsDashboardKYS from './pages/Pets/PetsDashboardKYS';
import AddPetKYS from './pages/Pets/AddPetKYS';
import PetDetailsPageKYS from './pages/Pets/PetDetailsPageKYS';
import EditPetPageKYS from './pages/Pets/EditPetPageKYS';
import ReportsPageKYS from './pages/Pets/ReportsPageKYS';
import './App.css';

function AppKYS() {

  return (
    <RouterKYS>
      <AuthProviderKYS>
        <div className="app-container-KYS">
          <Routes>
            <Route path="/" element={<Navigate to="/pets" replace />} />
            <Route path="/home" element={<HomeKYS />} />
            <Route path="/login" element={<LoginKYS />} />
            
            <Route path="/pets" element={
              <PrivateRouteKYS>
                <PetsDashboardKYS />
              </PrivateRouteKYS>
            } />
            
            <Route path="/pets/new" element={
              <PrivateRouteKYS>
                <AddPetKYS />
              </PrivateRouteKYS>
            } />

            <Route path="/pets/:id" element={
              <PrivateRouteKYS>
                <PetDetailsPageKYS />
              </PrivateRouteKYS>
            } />
            
            <Route path="/pets/edit/:id" element={
              <PrivateRouteKYS>
                <AddPetKYS editMode={true} />
              </PrivateRouteKYS>
            } />

          <Route path="/pets/:id/edit" element={
            <PrivateRouteKYS>
              <EditPetPageKYS />
            </PrivateRouteKYS>
          } />
          

          <Route path="/pets/reports" element={
            <PrivateRouteKYS>
              <ReportsPageKYS />
            </PrivateRouteKYS>
          } />

            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </AuthProviderKYS>
    </RouterKYS>
  );
}

export default AppKYS;