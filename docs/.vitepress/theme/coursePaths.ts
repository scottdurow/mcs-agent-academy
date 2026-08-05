export type CoursePath = {
  label: string;
  description: string;
  root: string;
};

export type CoursePathGroup = {
  course: string;
  paths: CoursePath[];
};

export const coursePathGroups: CoursePathGroup[] = [
  {
    course: "Recruit",
    paths: [
      {
        label: "Standard",
        description: "Uses the standard harness to build conversation logic with topics, triggers, nodes, and agent flows",
        root: "/recruit/",
      },
      {
        label: "New",
        description: "Uses the new GitHub Copilot harness to guide agent behavior with instructions, skills, tools, and workflows",
        root: "/recruit-nextgen/",
      },
    ],
  },
];