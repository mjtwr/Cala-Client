// import Welcome from "../components/Welcome";
// import Feature from "../components/Feature";
// import Testimonials from "../components/Testimonials";

// export default function WelcomePage() {
//   return (
//     <div>
//       <Welcome />
//       <Feature />
//       <Testimonials />
//     </div>
//   );
// }
import Welcome from "../components/Welcome";
import Feature from "../components/Feature";
import Testimonials from "../components/Testimonials";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    let token = USER_HELPERS.getUserToken()
    if (token !== null) {
      console.log("go to project page")
      navigate("/projects");
    } else {
      navigate(PATHS.LOGINPAGE);
    }
  }, []);

  return (
    <div>
      <Welcome />
      <Feature />
      <Testimonials />
    </div>
  );
}
