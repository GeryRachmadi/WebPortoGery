import fileTextIcon from "../../assets/icons/file-text.svg";
import whatsappIcon from "../../assets/icons/whatsapp.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import webdesignIcon from "../../assets/icons/webdesign.svg";
import frontendIcon from "../../assets/icons/frontend.svg";

const skills = [
  { icon: frontendIcon, title: "Front-end Development", chips: ["React", "Tailwind CSS"] },
  { icon: webdesignIcon, title: "Web Design", chips: ["Figma"] },
];

const socials = [
  { icon: whatsappIcon, label: "WhatsApp", href: "https://wa.me/628993415875", size: 24 },
  { icon: instagramIcon, label: "Instagram", href: "https://www.instagram.com/samidarrr/", size: 24 },
  { icon: githubIcon, label: "GitHub", href: "https://github.com/GeryRachmadi", size: 32 },
  { icon: linkedinIcon, label: "LinkedIn", href: "#", size: 24 },
];

function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-[1440px] px-[90px] pb-[104px] pt-[66px]">
      <div className="flex items-start justify-between gap-[60px]">
        <div className="max-w-[668px]">
          <p className="font-heading text-4xl font-semibold text-brand-blue">
            Hello there,
          </p>
          <h1 className="mt-[10px] whitespace-nowrap font-heading text-[52px] font-bold leading-normal text-brand-blue">
            I am{" "}
            <span className="bg-brand-blue px-[12px] text-brand-yellow">
              Geresidi Rachmadi
            </span>{" "}
            !
          </h1>
          <p className="text-xl font-medium">
            Front-end Developer &amp; UI/UX Design Enthusiast
          </p>

          <div className="mt-[57px]">
            <div className="h-px w-[76px] rounded-full bg-[#151982]" />
            <p className="mt-[19px] max-w-[633px] text-justify text-xl">
              Final-year Information Systems student at ITS with a 3.57 GPA. My
              journey is defined by a unique blend of{" "}
              <span className="font-bold text-brand-accent">System Logic</span>{" "}
              and{" "}
              <span className="font-bold text-brand-accent">Creative Media</span>
              . Experienced in managing teams and analyzing operational
              workflows to drive efficiency.
            </p>
          </div>

          <div className="mt-[9px]">
            <h2 className="font-heading text-4xl font-semibold text-brand-blue">
              What I Do
            </h2>
            <div className="mt-[28px] flex gap-[95px]">
              {skills.map((skill) => (
                <div key={skill.title} className="flex items-start gap-[22px]">
                  <div className="flex size-[75px] shrink-0 items-center justify-center rounded-[5px] bg-brand-yellow">
                    <img src={skill.icon} alt="" className="size-[58px]" />
                  </div>
                  <div className="pt-[7px]">
                    <p className="whitespace-nowrap text-xl font-bold">
                      {skill.title}
                    </p>
                    <div className="mt-[6px] flex gap-[13px]">
                      {skill.chips.map((chip) => (
                        <span
                          key={chip}
                          className="bg-brand-chip px-[7px] font-heading text-[14.8px] font-semibold text-brand-light"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[34px] flex gap-[30px]">
            <a
              href="/cv-geresidi-rachmadi.pdf"
              download
              className="flex items-center gap-[10px] rounded-[5px] bg-brand-blue px-[20px] py-[15px] font-heading text-xl font-semibold text-white"
            >
              <img src={fileTextIcon} alt="" className="size-[16px]" />
              Download CV
            </a>
            <a
              href="#projects"
              className="flex w-[203px] items-center justify-center rounded-[5px] border border-brand-accent px-[20px] py-[15px] font-heading text-xl font-semibold text-brand-accent"
            >
              Projects
            </a>
          </div>

          <div className="mt-[35px]">
            <p className="font-heading text-xl font-semibold text-[#202020]">
              Find Me On
            </p>
            <div className="mt-[12px] flex items-center gap-[30px]">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex size-[50px] items-center justify-center rounded-full border border-[#0F0F0F]/10 bg-[#6F96D1]/10"
                >
                  <img
                    src={social.icon}
                    alt=""
                    style={{ width: social.size, height: social.size }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex h-[684px] w-[531px] shrink-0 items-center justify-center border border-black">
          <p className="text-xl text-black">My Photo + Element</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
