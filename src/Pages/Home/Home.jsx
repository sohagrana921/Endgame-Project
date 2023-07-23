import Banner from "./Banner";
import ImageGallery from "./ImageGallery";
import ResearchPaper from "./ResearchPaper";
import Review from "./Review";
import TopColleges from "./TopColleges";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopColleges></TopColleges>
      <ImageGallery></ImageGallery>
      <ResearchPaper></ResearchPaper>
      <Review></Review>
    </div>
  );
};

export default Home;
