import { useState } from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Banner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    fetch(
      `https://endgame-server-amber.vercel.app/colleges/search?search=${searchQuery}`
    )
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.error("Error searching colleges:", error));
  };
  console.log(searchResults);
  return (
    <div className="text-center mt-10">
      <div>
        <input
          type="text"
          className="input text-black input-bordered join-item md:w-[400px]"
          placeholder="Search by college name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="btn join-item bg-orange-500 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {/* <div
        className="hero min-h-[200px]"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/architecture-independence-palace-ho-chi-minh-city_181624-21243.jpg?size=626&ext=jpg&ga=GA1.1.1698391043.1681064499&semt=sph",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <input
            type="text"
            className="input text-black input-bordered join-item md:w-[400px]"
            placeholder="Search by college name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="btn join-item bg-orange-500 rounded"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div> */}
      <div className="flex justify-center mt-8">
        {searchResults.map((college) => (
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
              <div className="">
                <p>
                  <span>Rating : </span>
                  <Rating
                    placeholderRating={college.college_rating}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={
                      <FaStar className="text-warning"></FaStar>
                    }
                    fullSymbol={<FaStar></FaStar>}
                  ></Rating>
                  <span> {college.college_rating}</span>
                </p>

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

export default Banner;
// ===========
// Frontend code (App.js)

// import React, { useState } from "react";

// function App() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = () => {
//     fetch(`/colleges/search?search=${searchQuery}`)
//       .then((response) => response.json())
//       .then((data) => setSearchResults(data))
//       .catch((error) => console.error("Error searching colleges:", error));
//   };

//   return (
//     <div>
//       <h1>College Search</h1>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>

//       <div>
//         {searchResults.map((college) => (
//           <div key={college.id}>
//             <h3>{college.college_name}</h3>
//             <img src={college.college_image} alt="College" />
//             <p>Rating: {college.rating}</p>
//             <p>Admission Date: {college.admission_date}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
