import Image from "next/image";

const Value = ({ title, description, img }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image src={img} className="w-9/12" alt="Core Value" />
      <p className="mb-3 text-xl font-semibold">{title}</p>
      <p className="text-xl">{description}</p>
    </div>
  );
};

export default Value;
