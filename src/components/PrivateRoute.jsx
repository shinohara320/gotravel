import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          <Component />
        ) : (
          <Navigate to="/login" replace state={{ from: rest.location.pathname }} />
        )
      }
    />
  );
};

export default PrivateRoute;
