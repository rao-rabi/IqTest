import Insta from "../assets/insta.png";
import fb from "../assets/fb.png";
import X from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
const Authors = () => {
  const socialIcons = [Insta, fb, X, linkedin];
  return (
    <div className="flex justify-between flex-wrap items-center px-5 py-6">
      <p>&copy; 2023 IQTEST.ai</p>
      <div className="flex items-center gap-3 mt-4 sm:mt-0">
        {socialIcons?.map((item, index) => (
          <img key={index} src={item} alt="icon" className="" />
        ))}
      </div>
    </div>
  );
};

export default Authors;
