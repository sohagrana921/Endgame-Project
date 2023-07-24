import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const ResearchPaper = () => {
  const [papers, setPapers] = useState([]);
  useEffect(() => {
    fetch("https://endgame-server-amber.vercel.app/researchPapers")
      .then((res) => res.json())
      .then((data) => setPapers(data));
  }, []);
  return (
    <div className="my-container">
      <SectionTitle title="Research Paper"></SectionTitle>
      <div className="md:grid grid-cols-3 gap-8">
        {papers.map((paper) => (
          <div
            key={paper._id}
            className="card  bg-base-100 shadow-xl mt-8 md:mt-0"
          >
            <div className="card-body">
              <h2 className="card-title">{paper.title}</h2>
              <p className="text-justify">{paper.description}</p>
              <div className="card-actions justify-end">
                <Link
                  to="https://www.researchgate.net/"
                  className="btn btn-primary"
                >
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
