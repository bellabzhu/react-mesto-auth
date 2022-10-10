import { Route, Navigate } from "react-router-dom";

function ProtectedRoute({ loggedIn, children }) {
  return (
    <Route>
      {loggedIn ? children : <Navigate to="/sign-in" />}
    </Route>
  );
}

export default ProtectedRoute;