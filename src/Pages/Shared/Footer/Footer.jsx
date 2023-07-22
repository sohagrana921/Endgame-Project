import { FaInbox, FaMobile } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-slate-950 bl py-6 px-12 md:px-20">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-20 text-start">
          <div>
            <p className="text-orange-500 font-semibold py-6">COMPANY</p>
            <p className="text-justify text-white">
              We seek promising students who will contribute to the Harvard
              community during their college years, and to society throughout
              their lives. While academic accomplishment is important, the
              Admissions Committee considers many other factors—strong personal
              qualities, special talents or excellences of all kinds.
            </p>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-orange-500 font-semibold py-6">Useful Links</p>

              <div className="text-white space-y-3">
                <p>
                  <Link to="/">Home</Link>
                </p>
                <p>
                  <Link to="/colleges">Colleges</Link>
                </p>
                <p>
                  <Link to="/admission">Admission</Link>
                </p>
                <p>
                  <Link to="/myCollege">My College</Link>
                </p>
              </div>
            </div>
            <div className="flex flex-col ">
              <p className="text-orange-500 font-semibold py-6">
                Contact With Us
              </p>
              <div className="space-y-3">
                <p className="flex items-center text-white gap-2">
                  {" "}
                  <FaMobile></FaMobile> +8801953392939
                </p>
                <p className="flex items-center text-white gap-2">
                  {" "}
                  <FaInbox></FaInbox> collegeadmisson.info@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly items-center my-8">
          <h3 className="md:text-xl mx-4 font-semibold text-orange-500">
            Follow Us With
          </h3>
          <div className="flex gap-6">
            <Link>
              <img
                className="h-8"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png"
                alt=""
              />
            </Link>
            <Link>
              <img
                className="h-8"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png"
                alt=""
              />
            </Link>
            <Link>
              <img
                className="h-8 rounded"
                src="https://img.freepik.com/free-psd/discord-logo-3d-social-media-icon-isolated_47987-11941.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>
        <p className="text-center my-4 text-white">
          <small>Copyright © 2023 LensMasters Academy</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
