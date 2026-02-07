
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { FitnessProvider } from './context/FitnessContext';
import LoginScreen from './screens/LoginScreen';
import Dashboard from './screens/Dashboard';
import ClassesScreen from './screens/ClassesScreen';
import MembershipScreen from './screens/MembershipScreen';
import WeightTracker from './screens/WeightTracker';
import Layout from './components/Layout';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <FitnessProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="classes" element={<ClassesScreen />} />
              <Route path="weight" element={<WeightTracker />} />
              <Route path="membership" element={<MembershipScreen />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </FitnessProvider>
    </AuthProvider>
  );
};

export default App;
