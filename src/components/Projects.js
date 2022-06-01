import photo from "../assets/portfolio3.jpg";

const data = [
  {
    photo: photo,
    title: "Project1",
    desc: "Lorem Ipsum, ",
  },
  {
    photo: photo,
    title: "Project2",
    desc: "Project_002",
  },
  {
    photo: photo,
    title: "Project3",
    desc: "Project_003",
  },
];

function Projects() {
  return (
    <div className="min-h-screen mt-20 m-16 flex flex-col gap-10" id="projects">
      {data.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <div className="card lg:card-side bg-base-100 shadow-xl ">
              <figure>
                <img src={photo} alt="Album" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">{item.title}</h2>
                <p>{item.desc}</p>
                <div class="card-actions justify-end"></div>
              </div>
            </div>
          );
        }
        return (
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">{item.title}</h2>
              <p>{item.desc}</p>
              <div class="card-actions justify-end"></div>
            </div>
            <figure>
              <img src={photo} alt="Album" />
            </figure>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
