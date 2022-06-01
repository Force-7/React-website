const levels = {
  beginner: "25",
  competent: "50",
  proficient: "75",
  expert: "100",
};

export const skillsData = [
  {
    title: "Languages",
    items: [
      {
        name: "Python",
        level: levels.beginner,
      },
      {
        name: "HTML/CSS",
        level: levels.proficient,
      },
      {
        name: "JavaScript",
        level: levels.competent,
      },
      {
        name: "TypeScript",
        level: levels.beginner,
      },
    ],
  },
  {
    title: "Frameworks",
    items: [
      {
        name: "React",
        level: levels.competent,
      },
      {
        name: "NestJS",
        level: levels.expert,
      },
      {
        name: "Tailwind",
        level: levels.competent,
      },
      {
        name: "Flutter",
        level: levels.beginner,
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        name: "Visual Studio Code",
        level: levels.proficient,
      },
      {
        name: "MongoDB",
        level: levels.competent,
      },
    ],
  },
];
