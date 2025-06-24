export type Project = {
  title: string;
  description: string;
  githubUrl: string | null;
  websiteUrl: string | null;
  thumbnail: string;
  thumbnailAlt: string;
};

export const projectList: Project[] = [
  {
    title: "Minesweeper",
    description:
      "A recreation of Minesweeper in the terminal, using C and the ncurses library.",
    githubUrl: "https://github.com/CharlesKellogg/minesweeper",
    websiteUrl: null,
    thumbnail: "/project-thumbnails/minesweeper-screenshot.png",
    thumbnailAlt: "A game of Minesweeper in a terminal",
  },
  {
    title: "MSU Judo Club Website",
    description:
      "A website for the Michigan State University Judo Club. The website was not originally created by me but I have been responsible for updating it.",
    githubUrl: null,
    websiteUrl: "https://msujudoclub.com",
    thumbnail: "/project-thumbnails/msu-judo-club-website-screenshot.png",
    thumbnailAlt: "The home page of the MSU Judo Club website",
  },
  {
    title: "Launchpad",
    description:
      "A CLI tool that opens a menu to choose between scripts to launch. Written in TypeScript for Node.js using the shelljs and inquirer libraries.",
    githubUrl: "https://github.com/CharlesKellogg/launchpad",
    websiteUrl: null,
    thumbnail: "/project-thumbnails/launchpad-screenshot.png",
    thumbnailAlt: "A terminal with the launchpad program running",
  },
  {
    title: "Snake Game",
    description:
      "A simple snake game made using Python and the Pygame library.",
    githubUrl: "https://github.com/CharlesKellogg/Snake/",
    websiteUrl: null,
    thumbnail: "/project-thumbnails/snake-game-screenshot.png",
    thumbnailAlt: "A screenshot of a snake game",
  },
];
