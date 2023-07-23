import { useEffect, useState } from "react";

const Banner = () => {
  const [search, setSearch] = useState("");
  const searchQuery = "ABC University"; // Replace this with your desired search query

  useEffect(() => {
    fetch(`http://localhost:5000/colleges/search?name=${searchQuery}`)
      .then((res) => res.json())
      .then((data) => setSearch(data));
  }, [searchQuery]); // Add searchQuery as a dependency to useEffect

  console.log(search);
  return (
    <div>
      <div
        className="hero min-h-[400px]"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/architecture-independence-palace-ho-chi-minh-city_181624-21243.jpg?size=626&ext=jpg&ga=GA1.1.1698391043.1681064499&semt=sph",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-black">
            <div className="join">
              <input
                className="input input-bordered join-item w-[400px]"
                placeholder="Search by college name"
              />
              <button className="btn join-item bg-orange-500 rounded">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
