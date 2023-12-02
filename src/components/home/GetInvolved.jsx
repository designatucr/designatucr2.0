import { Steps } from "@/data/steps";
import Step from "./Step";

const GetInvolved = () => {
  return (
    <div className="bg-design-beige py-12 flex justify-center items-center">
      <div className="w-11/12">
        <p className="text-3xl font-bold mb-2">How Do I Get Involved?</p>
        <p className="text-xl">
          Open admission to <span className="font-semibold">all students</span>{" "}
          at the University of California, Riverside. Complete the following 4
          steps below to become a member.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {Steps.map((step, index) => (
            <Step
              key={index}
              title={step.title}
              description={step.description}
              img={step.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
