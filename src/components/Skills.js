import { skillsData } from "../assets/skillsData";

function Skills() {
  return (
    <div
      id="skills"
      className="min-h-screen my-5 flex flex-col align-middle justify-center"
    >
      <h1 className="text-center text-3xl mb-10">My Skills</h1>
      <div className="grid lg:grid-cols-3 items-start md:grid-cols-2 sm:grid-cols-1 self-center gap-10 ">
        {skillsData.map((item) => (
          <div class="card w-80 bg-primary text-primary-content">
            <div class="card-body">
              <h2 class="card-title self-center">{item.title}</h2>
              {item.items.map((skill) => (
                <>
                  <p>{skill.name}</p>
                  <progress
                    class="progress progress-accent w-auto"
                    value={skill.level}
                    max="100"
                  ></progress>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
