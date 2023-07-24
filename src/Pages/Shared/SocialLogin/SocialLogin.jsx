import { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn, githubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      // console.log(loggedInUser);
      // navigate(from, { replace: true });
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        status: "Student",
        photo: loggedInUser.photoURL,
      };
      fetch("https://endgame-server-amber.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {});
      navigate(from, { replace: true });
    });
  };
  const handleGithub = () => {
    githubSignIn()
      .then((result) => {
        const loggedUser = result.user;

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="divider">Or Login Using</div>
      <div className="flex justify-center gap-4">
        <div className="flex justify-center">
          <Link
            onClick={handleGoogleSignIn}
            className="flex justify-center items-center bg-slate-300 p-4 rounded-lg mb-5"
          >
            <img
              className="h-8 w-8"
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
              alt=""
            />
            <h1 className="text-2xl font-semibold ml-2">Google</h1>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link
            onClick={handleGithub}
            className="flex justify-center items-center bg-slate-300 p-4 rounded-lg mb-5"
          >
            <img
              className="h-8 w-8 rounded-xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSqOmGxT_9pxpgeZ1YpuaTbl1DT1G5qtJ66Q3GOH_amYnerxi0G1iekCdpIxnC6dw1EpU&usqp=CAU"
              alt=""
            />
            <h1 className="text-2xl font-semibold ml-2">Github</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
