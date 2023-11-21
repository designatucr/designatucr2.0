import { Members } from "@/data/board";
import Profile from "./Profile";

const Board = () => {
  return (
    <div className="w-full grid grid-cols-5 gap-3">
      {Members.map((member, index) => (
        <Profile
          key={index}
          name={member.name}
          position={member.position}
          img={member.img}
        />
      ))}
    </div>
  );
};

export default Board;
