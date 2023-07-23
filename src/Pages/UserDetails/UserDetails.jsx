import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
const UserDetails = () => {
  const { user } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserDetails(data));
  }, [user?.email]);
  return (
    <div className="my-container">
      <SectionTitle title="Student Dashboard"></SectionTitle>
      <div className="mx-auto text-center">
        {userDetails.photo ? (
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={userDetails.photo} />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex justify-center my-8">
        <div>
          <h1>Student ID : {userDetails?._id}</h1>
          <h1>Name : {userDetails?.name}</h1>
          <h1>Email : {userDetails?.email}</h1>
          {userDetails.subject ? <h1>Subject : {userDetails?.subject}</h1> : ""}
          {userDetails.phoneNumber ? (
            <h1>Phone : {userDetails?.phoneNumber}</h1>
          ) : (
            ""
          )}
          {userDetails.address ? <h1>Address : {userDetails?.address}</h1> : ""}
          <Link
            // to={`/admissionForm/${college._id}`}
            className="btn btn-success btn-sm mt-8 "
          >
            Update Info <FaEdit></FaEdit>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
