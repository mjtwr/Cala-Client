import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import { getLoggedIn, logout } from "./services/auth";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";
import HomePage from "./pages/HomePage";
import LogIn from './pages/LogIn'
import Signup from "./pages/Signup";
import { Box, useBreakpointValue, Flex, Grid } from '@chakra-ui/react'
import Sidebar from './components/Sidebar'
import MainPage from "./pages/MainPage";
import Profile from "./pages/Profile"
import Projects from './pages/Projects'
import Dashboard from './pages/Dashbard'
import MainBacklog from './pages/MainBacklog'
import Pipeline from './pages/Pipeline'

export default function App() {
  const [user, setUser] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="App lilac-bg">
      <Navbar handleLogout={handleLogout} user={user} />
      
     
      <Routes>
        {/* {routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))} */}
        <Route path="/" element={<HomePage/>}/>
        <Route path="/" element={<MainPage  user={user} authenticate={authenticate}/>}>
          <Route path="profile" element={<Profile  user={user} authenticate={authenticate}/>}/>
          <Route path="projects" element={<Projects  user={user} authenticate={authenticate}/>}/>
          <Route path="dashboard" element={<Dashboard  user={user} authenticate={authenticate}/>}/>
          <Route path="backlog" element={<MainBacklog  user={user} authenticate={authenticate}/>}/>
          <Route path="pipeline" element={<Pipeline  user={user} authenticate={authenticate}/>}/>
        </Route>
        <Route path="/auth/login" element={<LogIn authenticate={authenticate}/>}/>
        <Route path="/auth/signup" element={<Signup authenticate={authenticate}/>}/>
        <Route path="/profile" element={<Profile user={user}/>}/>
      </Routes>
    </div>
  );
}
