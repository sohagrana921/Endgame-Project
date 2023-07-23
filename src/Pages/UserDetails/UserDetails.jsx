import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const UserDetails = () => {
  const { user } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserDetails(data));
  }, [user?.email]);
  const [selectedCollege, setSelectedCollege] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/selectedColleges/${userDetails?.email}`)
      .then((res) => res.json())
      .then((data) => setSelectedCollege(data));
  }, [userDetails.email]);
  console.log(selectedCollege);
  return (
    <div className="my-container">
      <SectionTitle title="Student Dashboard"></SectionTitle>
      <div className="mx-auto text-center">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={userDetails.photo || selectedCollege.photoURL} />
          </div>
        </div>
      </div>
      <div className="flex justify-center my-8">
        <div>
          <h1>Student ID : {userDetails?._id}</h1>
          <h1>Name : {userDetails?.name}</h1>
          <h1>Email : {userDetails?.email}</h1>
          <h1>Subject : {selectedCollege?.subject}</h1>
          <h1>Phone : {selectedCollege?.phoneNumber}</h1>
          <h1>Address : {selectedCollege?.address}</h1>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
