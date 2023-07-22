import Marquee from "react-fast-marquee";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const ImageGallery = () => {
  return (
    <>
      <SectionTitle title={"Image Gallery"}></SectionTitle>
      <div className=" my-container flex items-center bg-slate-100">
        <div>
          <Marquee speed={150} autoFill={true}>
            <div className="car">
              <img
                className="h-96 mr-2 rounded-lg"
                src="https://img.freepik.com/premium-photo/group-students-attending-graduation-ceremony-nice-day_115086-774.jpg?w=2000"
                alt=""
              />
            </div>
            <div className="card">
              <img
                className="h-96 mr-2 rounded-lg"
                src="https://img.freepik.com/free-photo/group-diverse-grads-throwing-caps-up-sky_53876-56031.jpg?size=626&ext=jpg&ga=GA1.2.1698391043.1681064499&semt=ais"
                alt=""
              />
            </div>

            <div className="card">
              <img
                className="h-96 mr-2 rounded-lg"
                src="https://img.freepik.com/free-photo/portrait-three-smiling-graduate-friends-graduation-robes-university-campus-with-diploma_496169-1363.jpg?size=626&ext=jpg&ga=GA1.2.1698391043.1681064499&semt=ais"
                alt=""
              />
            </div>
            <div className="car">
              <img
                className="h-96 mr-2 rounded-lg"
                src="https://img.freepik.com/free-photo/group-colleagues-with-diploma_23-2148522297.jpg?size=626&ext=jpg&ga=GA1.2.1698391043.1681064499&semt=ais"
                alt=""
              />
            </div>
            <div className="car">
              <img
                className="h-96 mr-2 rounded-lg"
                src="https://img.freepik.com/free-photo/low-angle-graduated-students_23-2148522181.jpg?size=626&ext=jpg&ga=GA1.2.1698391043.1681064499&semt=ais"
                alt=""
              />
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
