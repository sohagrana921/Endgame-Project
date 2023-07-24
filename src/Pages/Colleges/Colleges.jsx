import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/colleges")
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
      <div className="md:grid grid-cols-2 gap-4">
        {colleges.map((college) => (
          <div
            key={college.id}
            className="card card-compact  bg-base-100 shadow-xl mt-8 md:mt-0"
          >
            <figure>
              <img
                className="w-full h-[250px]"
                src={college.college_image}
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{college.college_name}</h2>

              <p>
                Admission Date :<span> {college.admission_date} (Fall)</span>
              </p>
              <div className="flex">
                <p>Rating : {college.college_rating}</p>
                <p>
                  Number of Research : {college.research_count} Paper Published
                </p>
              </div>

              <div className="card-actions justify-end">
                <Link
                  to={`/collegeDetails/${college._id}`}
                  className="btn btn-primary"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
