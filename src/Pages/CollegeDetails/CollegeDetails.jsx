import { useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
  const college = useLoaderData();

  return (
    <div className="my-container my-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-[550px] h-full"
            src={college.college_image}
            alt=""
          />
        </figure>
        <div className="card-body w-1/3">
          <h2 className="card-title">{college.college_name}</h2>
          <div>
            <p>
              Admission Date :<span> {college.admission_date} (Fall)</span>
            </p>
            <p>Rating : {college.college_rating}</p>
            <p>Research Paper : {college.research_count} Paper Published</p>
            <p>
              Events:
              {college.events.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </p>
            <p>
              Sports:
              {college.sports.map((sport, index) => (
                <li key={index}>{sport}</li>
              ))}
            </p>
            <small className="text-justify">
              Admission Details : The admission process is the method through
              which individuals apply for entry to an educational institution,
              such as a college or university. It involves submitting an
              application with personal information, academic records, and often
              standardized test scores. Admissions officers carefully review the
              applications, and some candidates may be interviewed.{" "}
            </small>
          </div>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
