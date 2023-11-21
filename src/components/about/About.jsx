import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="w-7/12 text-center">
        <Image src={""} />
        <p className="text-xl mb-4">
          We are UC Riverside’s first and only design club supporting students
          in design thinking.
        </p>
        <p className="text-xl">
          Our mission is to provide students a community to learn more about
          design. Design@UCR hosts workshops, events, and connects you with
          career growth oportunities.
        </p>
      </div>
    </div>
  );
};

export default About;
