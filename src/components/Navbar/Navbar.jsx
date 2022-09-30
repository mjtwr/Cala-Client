import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import { Button } from "@chakra-ui/react";
import { FiLogIn, FiLogOut} from "react-icons/fi";

const Navbar = (props) => {
  return (
    <navbar>
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
            <Link to={"/auth/signup"} className="authLink" ml='20px'>
            <Button className="button__submit" onClick={props.handleLogout} 
            colorScheme='white' variant='outline'>
                  SIGNUP
            </Button>
            </Link>
            <Link to={"/auth/login"} className="authLink">
            <Button ml='10px' className="button__submit" onClick={props.handleLogout} 
            rightIcon={<FiLogIn />} colorScheme='white' variant='outline'>
                  LOGIN
            </Button>
            </Link>
          </>
        )}
      </div>
    </navbar>
  );
};

export default Navbar;
