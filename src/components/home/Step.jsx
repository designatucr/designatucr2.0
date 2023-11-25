import Image from "next/image";

const Step = ({ title, description, img }) => {
  return (
    <div>
      <Image src={img} alt="Step to Apply" />
      <p className="font-semibold text-xl">{title}</p>
      <p className="text-xl">{description}</p>
    </div>
  );
};

export default Step;
