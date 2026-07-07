import SectionHeading from "../SectionHeading";
import marseloImg from "../../assets/projects/marselo.png";
import priormeImg from "../../assets/projects/priorme.png";
import rentalqImg from "../../assets/projects/rentalq.png";
import itsparkImg from "../../assets/projects/itspark.png";
import laravoteImg from "../../assets/projects/laravote.png";
import nutricoreImg from "../../assets/projects/nutricore.png";

const projects = [
  {
    title: "Marselo - Mari Sewa Loker",
    image: marseloImg,
    chips: ["UI/UX Design", "Figma"],
    description:
      "An IoT-based Smart Locker system designed to restore traveler mobility. Features include CCTV security, app-based monitoring, and integrated cashless payments for a seamless station experience.",
  },
  {
    title: "Priorme",
    image: priormeImg,
    chips: ["Web Development", "HTML5", "CSS3", "JavaScript"],
    description:
      "Priorme is a responsive task and event manager designed to boost daily productivity. It delivers a seamless planning experience with dynamic calendar views, persistent data, and an intuitive five-level priority system for better focus",
  },
  {
    title: "RentalQ",
    image: rentalqImg,
    chips: ["Web Development", "Next.Js", "Tailwind", "TypeScript", "MySQL"],
    description:
      "A specialized vehicle rental platform designed to streamline the leasing process. Delivers a practical, fast, and enjoyable booking experience for seamless user mobility. Features include responsive catalog, real-time availability, and secure booking management.",
  },
  {
    title: "ITSPark",
    image: itsparkImg,
    chips: ["UI/UX Design", "Figma"],
    description:
      "ITS Park is a RFID-integrated parking reservation system designed for the ITS campus environment. Features include smart parking spot reservation and recommendations based on user destination. Includes a dedicated Lost & Found community to report missing items.",
  },
  {
    title: "Laravote",
    image: laravoteImg,
    chips: [
      "Web Development",
      "DevOps",
      "Laravel",
      "Docker",
      "SonarCloud",
      "Grafana",
      "AzureVM",
      "GitHub Actions",
    ],
    description:
      "A specialized vehicle rental platform designed to streamline the leasing process. Delivers a practical, fast, and enjoyable booking experience for seamless user mobility. Features include responsive catalog, real-time availability, and secure booking management.",
  },
  {
    title: "NutriCore",
    image: nutricoreImg,
    chips: ["Web Development", "Next.Js", "Tailwind", "TypeScript", "MySQL"],
    description:
      "A specialized vehicle rental platform designed to streamline the leasing process. Delivers a practical, fast, and enjoyable booking experience for seamless user mobility. Features include responsive catalog, real-time availability, and secure booking management.",
  },
];

function ProjectCard({ project }) {
  return (
    <article className="w-[610px]">
      <img
        src={project.image}
        alt={`${project.title} thumbnail`}
        className="h-[297px] w-full object-cover"
      />
      <h3 className="mt-[10px] font-heading text-3xl font-semibold text-brand-blue">
        {project.title}
      </h3>
      <div className="mt-[8px] flex flex-wrap items-center gap-[10px]">
        {project.chips.map((chip, i) => (
          <span
            key={chip}
            className={`px-[7px] font-heading text-[14.8px] font-semibold ${
              i === 0
                ? "bg-brand-yellow text-brand-blue"
                : "bg-brand-blue text-brand-light"
            }`}
          >
            {chip}
          </span>
        ))}
      </div>
      <p className="mt-[15px] text-justify text-xl">{project.description}</p>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects">
      <SectionHeading watermark="MY PROJECTS SO FAR" label="Projects" />
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-[40px] gap-y-[79px] px-[90px] pb-[78px] pt-[60px]">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
