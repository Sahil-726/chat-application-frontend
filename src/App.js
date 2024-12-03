
import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import HomePage from "./Components/HomePage.jsx"
import Login from "./Components/Login.jsx"
import Signup from "./Components/Signup.jsx"
const router=createBrowserRouter([
  {
    path:"/",
    element: <HomePage/>
  },
  {
    path:"/register",
    element: <Signup/>
  },
  {
    path:"/login",
    element: <Login/>
  }
])
function App() {
  return (
    <div className="p-4 vh-100 align-items-center justify-content-center">
     <RouterProvider router={router} 
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
    }} />
    </div>
  );
}

export default App;
