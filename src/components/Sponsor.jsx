import Link from "next/link";

const Sponsor = () => {
  return (
    <div className="text-center bg-design-pink py-12 w-full">
      <p className="font-semibold text-3xl mb-4">
        Interested in parterning with us?
      </p>
      <div className="text-xl">
        Check out our{" "}
        <Link
          href="https://drive.google.com/file/d/14EPXS4O_yO0O_sql82-G0_SZbO0aIFST/view?pli=1"
          className="text-design-green font-semibold"
        >
          Sponsorship Packet
        </Link>
      </div>
    </div>
  );
};

export default Sponsor;
