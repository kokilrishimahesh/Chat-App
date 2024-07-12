import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Chat, Login, Signup } from "./Screens";
import { SocketContextProvider } from "./context/SocketContext";
import PageNotFound from "./Screens/404Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path : "*",
    element : <PageNotFound />
  }
]);

function App() {
  return (
    <SocketContextProvider>
      <RouterProvider router={router} />
    </SocketContextProvider>
  );
}

export default App;
