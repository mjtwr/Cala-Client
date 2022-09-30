import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import { Button } from "@chakra-ui/react";
import { FiLogOut} from "react-icons/fi";

const Navbar = (props) => {
  return (
    <navbar>
      <Link to={PATHS.HOMEPAGE} className="nav__projectName">
        {CONSTS.CAPITALIZED_APP}
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
            <Link to={"/auth/signup"} className="authLink">
              Signup
            </Link>
            <Link to={"/auth/login"} className="authLink">
              Log In
            </Link>
          </>
        )}
      </div>
    </navbar>
  );
};

export default Navbar;
