import Link from "next/link";

const Sponsor = () => {
  return (
    <div className="text-center bg-design-pink py-12 w-full">
      <p className="font-semibold text-3xl mb-4">
        Interested in partnering with us?
      </p>
      <div className="text-xl">
        Check out our{" "}
        <a
          href="https://drive.google.com/file/d/14EPXS4O_yO0O_sql82-G0_SZbO0aIFST/view?pli=1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-design-green font-semibold no-underline"
        >
          Sponsorship Packet
        </a>
      </div>
    </div>
  );
};

export default Sponsor;
