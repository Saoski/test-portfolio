import AboutMe from "./components/AboutMe";
import Divider from "./components/Divider";
import ProjectCard from "./components/ProjectCard";
import macAndCheese from "./assets/mac_and_cheese.jpg"
import SkillTag, { Skill } from "./components/SkillTag";

export default function Home() {
    const macAndCheeseDescription =
        "I mean, its a classic. I spent 3 months designing and building this mac and cheese for the annual HACK.coms hackathon. Of course I got first place cuz I cheated an worked on it for 3 months. No one can compete with the quality of the mac and cheese I make.";

    return (
        <>
            <Divider text="About Me" />
            <AboutMe />
            <Divider text="Projects" />
            <ProjectCard
                title="Mac and Cheese"
                description={macAndCheeseDescription}
                image_src={macAndCheese}
                skills={[Skill.Python, Skill.MacAndCheese]}
            />
            <Divider />
            <Divider />
        </>
    );
}
