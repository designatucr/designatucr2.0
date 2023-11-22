import Link from "next/link";

const Icon = ({ name, link, username, icon }) => {
  return (
    <Link
      className="flex items-center text-black hover:!text-design-green no-underline"
      href={link}
    >
      <div className="text-3xl mx-4">{icon}</div>
      <div className="text-xl">
        <p className="font-semibold">{name}</p>
        <p>{username}</p>
      </div>
    </Link>
  );
};

export default Icon;
