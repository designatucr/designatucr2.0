import Image from "next/image";
import WhoAreWe from "../../../public/WhoAreWe.gif";
import Button from "../Button";

const Who = () => {
  return (
    <div className="bg-design-beige py-12 flex justify-center items-center">
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-3 w-11/12">
        <Image src={WhoAreWe} alt="Who are we?" />
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl font-semibold mb-3 w-full">
            Why Should I Join?
          </p>
          <p className="text-xl mb-3">
            Design@UCR is UC Riverside’s first and only design club supporting
            students in UI/UX, web design, and design thinking. Check us out
            here!
          </p>
          <Button text="About Us" link="/about" />
        </div>
      </div>
    </div>
  );
};

export default Who;
