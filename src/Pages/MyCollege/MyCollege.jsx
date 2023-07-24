import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "react-rating";
const MyCollege = () => {
  const { user } = useContext(AuthContext);
  const [selectedCollege, setSelectedCollege] = useState("");
  const [allColleges, setAllColleges] = useState([]);
  useEffect(() => {
    fetch(
      `https://endgame-server-amber.vercel.app/selectedColleges/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setSelectedCollege(data));
  }, [user?.email]);
  useEffect(() => {
    fetch(`https://endgame-server-amber.vercel.app/colleges`)
      .then((res) => res.json())
      .then((data) => setAllColleges(data));
  }, []);
  const myCollege = allColleges.find(
    (college) => college.college_name == selectedCollege?.college_name
  );

  return (
    <div className="my-container my-10">
      {myCollege ? (
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-[550px] h-full"
              src={myCollege?.college_image}
              alt=""
            />
          </figure>
          <div className="card-body md:w-1/3">
            <h2 className="card-title">{myCollege?.college_name}</h2>
            <div>
              <p>
                Admission Date :<span> {myCollege?.admission_date} (Fall)</span>
              </p>
              <p>
                <span>Rating : </span>
                <Rating
                  placeholderRating={myCollege?.college_rating}
                  readonly
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                ></Rating>
                <span> {myCollege?.college_rating}</span>
              </p>
              <p>
                Research Paper : {myCollege?.research_count} Paper Published
              </p>
              <p>
                Events:
                {myCollege?.events.map((event, index) => (
                  <li key={index}>{event}</li>
                ))}
              </p>
              <p>
                Sports:
                {myCollege?.sports.map((sport, index) => (
                  <li key={index}>{sport}</li>
                ))}
              </p>
            </div>
            <div className="card-actions justify-end">
              <Link to="/addReview" className="btn btn-primary">
                Add a Review
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-xl font-bold text-center md:mt-20">
          You not admitted any college
        </h1>
      )}
    </div>
  );
};

export default MyCollege;
