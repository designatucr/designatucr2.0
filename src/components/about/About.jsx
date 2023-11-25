import Image from "next/image";
import AboutGIF from "../../../public/About.gif";
import Logo from "../../../public/Logo.webp";

const About = () => {
  return (
    <div className="bg-design-lightgreen py-12 flex justify-center items-center">
      <div className="grid grid-cols-12 w-11/12">
        <div className="col-span-7 text-left flex justify-center items-center">
          <div className="w-10/12">
            <Image src={Logo} className="w-3/4 mb-3" alt="Logo" />
            <p className="text-2xl mb-4">
              We are UC Riverside’s first and only design club supporting
              students in design thinking.
            </p>
            <p className="text-2xl">
              Our mission is to provide students a community to learn more about
              design. Design@UCR hosts workshops, events, and connects you with
              career growth oportunities.
            </p>
          </div>
        </div>
        <Image src={AboutGIF} className="col-span-5" alt="About GIF" />
      </div>
    </div>
  );
};

export default About;
