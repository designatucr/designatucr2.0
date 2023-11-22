import Image from "next/image";

const Profile = ({ name, position, img }) => {
  return (
    <div className="text-center flex justify-center items-center flex-col">
      <Image src={img} className="rounded-3xl h-80 w-60 object-cover" />
      <p className="font-semibold text-xl mt-2 mb-1">{name}</p>
      <p>{position}</p>
    </div>
  );
};

export default Profile;
