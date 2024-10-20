import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routeMap } from '../utils/constants'
import { GlobalContext } from '../context/GLobalProvider';
import HomePage from '../pages/home/HomePage';
const AppRoutes = () => {
  const { authToken } = useContext(GlobalContext);
  return (
    <Routes>
      {routeMap.map((route, index) => {
        
        const Element = route.element;

        if (route.isProtected) {
          return (
            <Route
              key={route.__id}
              path={route.URL}
              element={authToken ? <Element /> : <Navigate to="/login" replace />}
            />
          );
        } else {
          return (
            <Route
              key={route.__id}
              path={route.URL}
              element={<Element />}
            
            />
            
          );
        }
      })}
      {/* Default route for unmatched paths */}
       <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
export default AppRoutes