import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const ResearchPaper = () => {
  const [papers, setPapers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/researchPapers")
      .then((res) => res.json())
      .then((data) => setPapers(data));
  }, []);
  return (
    <div className="my-container">
      <SectionTitle title="Research Paper"></SectionTitle>
      <div className="md:grid grid-cols-3 gap-8">
        {papers.map((paper) => (
          <div key={paper._id} className="card  bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{paper.title}</h2>
              <p>{paper.description}</p>
              <div className="card-actions justify-end">
                <Link to={paper.paper_link} className="btn btn-primary">
                  Paper Link
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPaper;
