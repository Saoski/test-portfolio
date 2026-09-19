import AboutMe from "./components/AboutMe";
import Divider from "./components/Divider";
import SkillTag, { Skill } from "./components/SkillTag";

export default function Home() {
    return (
        <>
            <Divider text="About Me"/>
            <AboutMe />
            <Divider text="Experience"/>
            <SkillTag skill={Skill.React}/>
            <Divider />
            <Divider />
        </>
    );
}
