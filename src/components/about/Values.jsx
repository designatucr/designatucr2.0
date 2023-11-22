import { CoreValues } from "@/data/values";
import Value from "./Value";

const Values = () => {
  return (
    <div className="w-full text-center bg-design-beige py-12 flex justify-center items-center flex-col">
      <div className="w-11/12">
        <p className="text-3xl font-bold">Our Values</p>

        <div className="grid grid-cols-3">
          {CoreValues.map((value, index) => (
            <Value
              key={index}
              title={value.title}
              description={value.description}
              img={value.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
