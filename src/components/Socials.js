import { skillsData } from "../assets/socialData";

function Socials() {
  return (
    <>
      <div className="hidden md:flex sticky bottom-10 left-10 flex-row">
        <ul className="list-none">
          {skillsData.map((item) => (
            <li className="lg:text-2xl bottom-5 mb-5 ml-4">
              <a
                className=""
                href={item.url}
                aria-label={item.name}
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
        <div className="fixed w-1 h-10 bg-white bottom-0 left-6"></div>
      </div>
    </>
  );
}
export default Socials;
