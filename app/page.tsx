import AboutMe from "./components/AboutMe";
import Divider from "./components/Divider";
import ProjectCard from "./components/ProjectCard";
import macAndCheese from "./assets/mac_and_cheese.jpg";
import quackbox from "./assets/quackbox.png";
import { Skill } from "./components/SkillTag";
import NavBar from "./components/NavBar";

export default function Home() {
    const macAndCheeseDescription =
        "I mean, its a classic. I spent 3 months designing and building this mac and cheese for the annual HACK.coms hackathon. Of course I got first place cuz I cheated and worked on it for 3 months. No one can compete with the quality of the mac and cheese I make.";
    const otherProjectDescription =
        "lorem ipsum dolor sit amet consectetur adipiscing elit qui eum soluta est id quas in quis dolorum in quo dolor est sint laborum quo qui distinctio quibusdam et facilis dolore voluptas incididunt cumque dolor eu vero lorem at proident vero quis culpa excepturi nihil corrupti nihil sint sunt sed libero eum sint qui fuga voluptatum ullamco dignissimos iusto dolore veniam dolorum voluptas similique tempore fugiat quod quo cupiditate est ducimus cillum fugiat illum libero in animi quibusdam consequat elit irure deleniti excepteur qui provident ullamco atque optio aliquip culpa consequat vel voluptas id consequat autem omnis ut autem adipiscing irure";

    return (
        <>
            <div className="m-8"/>
            <Divider text="About Me" id="about"/>
            <AboutMe />
            <Divider text="Projects" id="projects"/>
            <div className="grid grid-cols-2 gap-6 px-5 items-stretch">
                <ProjectCard
                    title="Mac and Cheese"
                    description={macAndCheeseDescription}
                    image_src={macAndCheese}
                    skills={[Skill.TypeScript, Skill.MacAndCheese]}
                />
                <ProjectCard
                    title={"QuackBox"}
                    description={otherProjectDescription}
                    image_src={quackbox}
                    skills={[Skill.Python, Skill.Rust]}
                />
                <ProjectCard
                    title={"QuackBox"}
                    description={otherProjectDescription}
                    image_src={quackbox}
                    skills={[Skill.Python, Skill.Rust]}
                />
                <ProjectCard
                    title={"QuackBox"}
                    description={otherProjectDescription}
                    image_src={quackbox}
                    skills={[Skill.Python, Skill.Rust]}
                />
            </div>
            <Divider />
            <Divider />
        </>
    );
}
