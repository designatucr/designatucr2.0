import { Links } from "@/data/links";
import Icon from "./Icon";

const Contact = () => {
  return (
    <div className="flex justify-center items-center bg-design-beige w-full py-12">
      <div className="w-11/12">
        <p className="text-3xl font-bold mb-8">Get in touch with us!</p>
        <div className="grid grid-cols-3 gap-3">
          {Links.map((link, index) => (
            <Icon
              key={index}
              name={link.name}
              link={link.link}
              username={link.username}
              icon={link.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
