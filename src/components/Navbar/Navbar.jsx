import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import { Button } from "@chakra-ui/react";
import { FiLogIn, FiLogOut} from "react-icons/fi";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <Link to={PATHS.HOMEPAGE} className="nav__projectName">
      <img src="'../../logocalaai-light.png" alt="Cala App Logo" />

      </Link>

      <div className="nav__authLinks">
      {/* ESTE ES EL MENU QUE SE MUESTRA CUANDO EL USUARIO INICIO SESION */}
        {props.user ? (
          <>
            
            <Button className="button__submit" onClick={props.handleLogout} 
            rightIcon={<FiLogOut />} colorScheme='purple' variant='outline'>
                  LOGOUT
            </Button>
          </>
        ) : (
          <>
            <Link to={"/auth/signup"} >
            <Button className="button__submit" onClick={props.handleLogout} 
            color='white' variant='outline'>
                  SIGNUP
            </Button>
            </Link>
            <Link to={"/auth/login"} >
            <Button ml='10px' className="button__submit" onClick={props.handleLogout} 
            rightIcon={<FiLogIn />} color='white' variant='outline'>
                  LOGIN
            </Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
