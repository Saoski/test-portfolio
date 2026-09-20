import AboutMe from "./components/AboutMe";
import Divider from "./components/Divider";
import ProjectCard from "./components/ProjectCard";
import macAndCheese from "./assets/mac_and_cheese.jpg";
import quackbox from "./assets/quackbox.png";
import placeholderImg from "./assets/placeholder.jpg";
import { Skill } from "./components/SkillTag";
import ExperienceCard from "./components/ExperienceCard";

export default function Home() {
    const macAndCheeseDescription =
        "I mean, its a classic. I spent 3 months designing and building this mac and cheese for the annual HACK.coms hackathon. Of course I got first place cuz I cheated and worked on it for 3 months. No one can compete with the quality of the mac and cheese I make.";
    const otherProjectDescription =
        "lorem ipsum dolor sit amet consectetur adipiscing elit qui eum soluta est id quas in quis dolorum in quo dolor est sint laborum quo qui distinctio quibusdam et facilis dolore voluptas incididunt cumque dolor eu vero lorem at proident vero quis culpa excepturi nihil corrupti nihil sint sunt sed libero eum sint qui fuga voluptatum ullamco dignissimos iusto dolore veniam dolorum voluptas similique tempore fugiat quod quo cupiditate est ducimus cillum fugiat illum libero in animi quibusdam consequat elit irure deleniti excepteur qui provident ullamco atque optio aliquip culpa consequat vel voluptas id consequat autem omnis ut autem adipiscing irure";

    return (
        <>
            <div className="m-8" />
            <Divider text="About Me" id="about" />
            <AboutMe />
            <Divider text="My Projects" id="projects" />
            <div className="grid grid-cols-2 gap-6 px-5 items-stretch">
                <ProjectCard
                    title="Mac and Cheese"
                    description={macAndCheeseDescription}
                    imageSrc={macAndCheese}
                    skills={[Skill.TypeScript, Skill.MacAndCheese]}
                />
                <ProjectCard
                    title={"QuackBox"}
                    description={otherProjectDescription}
                    imageSrc={quackbox}
                    skills={[Skill.Python, Skill.Rust]}
                    githubLink="https://github.com/rit-coms/COMS-Console"
                />
                <ProjectCard
                    title={"QuackBox"}
                    description={otherProjectDescription}
                    imageSrc={quackbox}
                    skills={[Skill.Python, Skill.Rust]}
                />
                <ProjectCard
                    title={"QuackBox"}
                    description={otherProjectDescription}
                    imageSrc={quackbox}
                    skills={[Skill.Python, Skill.Rust]}
                />
            </div>
            <Divider text="My Experience" />
            <div className="flex flex-col items-center gap-6">
                <ExperienceCard
                    logoSrc={placeholderImg}
                    logoAlt={"Radionix brand logo"}
                    jobTitle={"Software Testing Automation"}
                    organization={"Radionix"}
                    startDate={"June 2026"}
                    endDate={"Present"}
                />
                <ExperienceCard
                    logoSrc={placeholderImg}
                    logoAlt={"RIT logo"}
                    jobTitle={"Student Lab Intructor"}
                    organization={"Rochester Institute of Technology"}
                    startDate={"August 2025"}
                    endDate={"May 2026"}
                />
                <ExperienceCard
                    logoSrc={placeholderImg}
                    logoAlt={"Mac and cheese"}
                    jobTitle={"Master Chef"}
                    organization={"Society of Mac and Cheese"}
                    startDate={"October 2005"}
                    endDate={"Present"}
                />
            </div>
        </>
    );
}
