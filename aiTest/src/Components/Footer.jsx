import Button from "../Constant/Button";
import Logo from "../assets/aiLogo.svg";
import Mail from "../assets/mailIcon.png";
const Footer = () => {
  const footerLinks = [
    "Quiz",
    "Help",
    "Privacy Policy",
    "Results",
    "FAQ",
    "Terms of Service",
    "Pricing",
    "Contact",
    "Cookies Policy",
  ];
  return (
    <div className="bg-black lg:max-w-[1440px] max-w-240px mt-28 mx-auto rounded-3xl lg:px-20 px-5 ">
      <div className="py-16 md:flex lg:justify-between justify-center mx-auto">
        <div className="lg:text-justify text-center">
          <img src={Mail} alt="" className="w-20 h-20 object-contain md:mx-0 mx-auto" />
          <p className="text-white text-7xl mt-10">
            Keep up with the <br /> latest
          </p>
          <p className="text-white text-xl mt-10">
            Join Our newsletter to stay up to date on features and releases.
          </p>
        </div>
        <div>
          <div className="md:flex md:justify-between justify-center md:text-justify text-center items-end gap-4">
            <div>
              <p className="text-white font-semibold text-2xl mb-10 mt-16 flex lg:justify-end justify-center">
                Stay Up to date
              </p>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="md:text-xl text-lg md:px-6 px-2 py-4 md:mb-0 mb-4 rounded-full lg:w-96 focus:outline-blue-500"
              />
            </div>
            <Button text="Subscribe" className="text-2xl py-3" />
          </div>
          <p className="text-lg text-white font-base mt-10 md:ms-14 text-center md:text-justify">By Subscribing you agree with our privacy policy.</p>
        </div>
      </div>
      <hr className="my-6 border-gray-200 lg:my-8 space-x-24" />
      <div className="">
        <div className="mx-auto w-full p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <div className="flex items-center mb-6">
                  <img src={Logo} alt="logo" className="pr-2 object-contain" />
                  <p className="cursor-pointer text-white text-3xl">
                    IQTEST.ai
                  </p>
                </div>
              </a>
              <p className="text-xl text-gray-500">
                Test your IQ in a very easy and simple
                <br /> step not complex.
              </p>
            </div>
            <div className="">
              <div>
                <ul className="text-white grid md:grid-cols-3 grid-cols-2 place-items-start gap-x-12 md:gap-x-32">
                  <li className="py-2">IQTEST</li>
                  <li className="py-2">Support</li>
                  <li className="py-2">Legal</li>
                </ul>
              </div>
              <ul className="grid md:grid-cols-3 grid-cols-2 place-items-start gap-x-12 md:gap-x-32">
                {footerLinks.map((item, index) => (
                  <li className="text-gray-500 text-md py-2" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
