import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);
  return (
    <div className="my-container">
      <div className="overflow-x-auto my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>College Name</th>
              <th>Admission Date</th>
              <th>Get Admission</th>
            </tr>
          </thead>
          {colleges.map((college, index) => (
            <tbody key={college._id}>
              {/* row 1 */}
              <tr>
                <th>{index + 1}</th>
                <td>{college.college_name}</td>
                <td>{college.admission_date}</td>
                <td>
                  <Link
                    to={`/admissionForm/${college._id}`}
                    className="btn btn-success btn-sm"
                  >
                    Click For Admission
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Admission;
