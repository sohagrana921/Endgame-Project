import { Carousel } from "react-responsive-carousel";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Slide } from "react-awesome-reveal";
import { useEffect, useState } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://endgame-server-amber.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-container">
      <SectionTitle title="College Review"></SectionTitle>
      <Carousel className="bg-green-300 p-8 rounded-lg mb-8">
        {reviews.map((testimonial, index) => (
          <Slide key={index}>
            <h3 className="text-xl font-bold">{testimonial.name}</h3>
            <h4 className="my-2 font-semibold">{testimonial.title}</h4>
            <p className="pb-10">{testimonial.quote}</p>
          </Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Review;
