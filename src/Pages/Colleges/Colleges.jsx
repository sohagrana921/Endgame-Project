import { Link } from "react-router-dom";

const Colleges = () => {
  const topColleges = {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04KnpBbbDRVq7xBhEtV2w5uq2lEbxqp62Cun2QHu1&s",
    name: "University of Exampleville",
    admission_dates: {
      fall: "September 2023",
      spring: "February 2024",
    },
    events: 22,
    rating: 4.5,
    research: 30,
    sports: 30,
  };
  return (
    <div className="my-container">
      <div className="card card-compact w-96 bg-base-100 shadow-xl ">
        <figure>
          <img className="w-full h-full" src={topColleges.image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{topColleges.name}</h2>

          <p>
            Admission Date :
            <span> {topColleges.admission_dates.fall} (Fall)</span>
          </p>
          <div className="flex">
            <p>Rating : {topColleges.rating}</p>
            <p>Number of Research : {topColleges.research} Paper Published</p>
          </div>

          <div className="card-actions justify-end">
            <Link to="/collegeDetails" className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colleges;
