import Image from "next/image";

const Profile = ({ name, position, img }) => {
  return (
    <div className="text-center">
      <Image src={img} />
      <p className="font-semibold text-xl mb-2">{name}</p>
      <p>{position}</p>
    </div>
  );
};

export default Profile;
