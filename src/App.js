import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import {Navbar}  from "./components/Navbar";
import {Home} from "./pages/Home";
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { useState } from 'react';
import { PrivateRoute } from './components/PrivateRoute';


function App() {

  const [isLoggedIn , setLogin] = useState(false);

  const navigate = useNavigate();


  return (
    <div className="App">
       <Navbar isLoggedIn = {isLoggedIn} setLogin = {setLogin} ></Navbar>
       <Routes>
        <Route path = "/" element={<Home></Home>} ></Route>
        <Route path = "/login" element={<Login setLogin={setLogin} ></Login>} ></Route>
        <Route path = "/signup" element={<Signup setLogin={setLogin}></Signup>} ></Route>
        <Route path = "/dashboard" element={
          // isLoggedIn ? <Dashboard></Dashboard> : navigate("/login") 
          <PrivateRoute isLoggedIn = {isLoggedIn}>
            <Dashboard>
            </Dashboard>
          </PrivateRoute>
        }></Route>
        {/* <Route to = "*" element={<NotFound></NotFound>} ></Route> */}
        
       </Routes>
    </div>
  );
}

export default App;