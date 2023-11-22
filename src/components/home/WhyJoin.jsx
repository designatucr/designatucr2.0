import Image from "next/image";
import Why from "../../../public/Why.webp";
import Button from "../Button";

const WhyJoin = () => {
  return (
    <div className="bg-design-orange py-12 flex justify-center items-center">
      <div className="grid grid-cols-2 gap-3 w-11/12">
        <div className="flex justify-center flex-col">
          <p className="text-3xl font-semibold mb-3">Why Should I Join?</p>
          <p className="text-xl mb-3">
            Design@UCR offer various opportunities to help students learn more
            about design, build their portfolio, meet other designers, and
            prepare for their future careers.
          </p>
          <Button text="Our Events" link="/event" />
        </div>
        <div>
          <Image src={Why} />
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
