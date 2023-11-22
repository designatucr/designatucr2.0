import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="bg-design-green text-xl w-fit px-3 py-2 text-white font-semibold rounded-xl hover:opacity-80 no-underline"
    >
      {text}
    </Link>
  );
};

export default Button;
