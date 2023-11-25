import Image from "next/image";
import Background from "../../../public/Landing.webp";
import LandingLogo from "../../../public/LandingLogo.webp";
import Button from "../Button";

const Landing = () => {
  return (
    <>
      <Image
        src={Background}
        className="absolute top-0 left-0 h-screen w-screen object-cover -z-10"
        alt="Background"
      />
      <div className="h-screen w-screen flex justify-center items-center flex-col text-center">
        <div className="w-9/12 flex justify-center items-center flex-col">
          <Image src={LandingLogo} alt="Logo" />
          <p className="text-3xl text-white font-semibold mb-4">
            Empowering students interested in UI/UX design, web design, and
            design thinking at the University of California, Riverside
          </p>
          <div className="flex items-center justify-center gap-2">
            <Button text="Apply" link="" />
            <Button text="Learn more" link="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
