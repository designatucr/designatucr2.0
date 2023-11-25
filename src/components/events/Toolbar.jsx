import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const CustomToolbar = ({ onNavigate, date }) => {
  return (
    <div className="flex justify-center items-center mt-[8vh]">
      <FaChevronLeft
        onClick={() => onNavigate("PREV")}
        className="hover:cursor-pointer mx-2"
      />
      <p className="mb-0 text-3xl font-semibold">
        {date.toLocaleString("default", { month: "short" })}{" "}
        {date.getFullYear()}
      </p>
      <FaChevronRight
        onClick={() => onNavigate("NEXT")}
        className="hover:cursor-pointer mx-2"
      />
    </div>
  );
};

export default CustomToolbar;
