import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://endgame-server-amber.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center my-28">
        <progress className="progress w-1/2"></progress>
      </div>
    );
  }
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
