import { Members } from "@/data/board";
import Profile from "./Profile";

const Board = () => {
  return (
    <div className="bg-design-brown w-full text-center py-12 flex justify-center items-center">
      <div className="w-11/12">
        <p className="text-3xl font-bold mb-4">Meet the Board</p>
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
      </div>
    </div>
  );
};

export default Board;
