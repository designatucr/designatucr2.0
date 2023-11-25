import Link from "next/link";

const Button = ({ text, link, openInNewTab }) => {
  if (openInNewTab) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="bg-design-green text-xl w-fit px-3 py-2 text-white font-semibold rounded-xl hover:opacity-80 no-underline">
        {text}
      </a>
    );
  }

  return (
    <Link href={link}>
      <span className="bg-design-green text-xl w-fit px-3 py-2 text-white font-semibold rounded-xl hover:opacity-80 no-underline cursor-pointer" style={{ textDecoration: "none" }}>
        {text}
      </span>
    </Link>
  );
};

export default Button;
