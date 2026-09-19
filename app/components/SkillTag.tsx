import Image, { StaticImageData } from "next/image";
import reactIcon from "../assets/react-svgrepo-com.svg";
import macAndCheese from "../assets/mac_and_cheese.jpg";

export enum Skill {
    TypeScript = "TypeScript",
    React = "React",
    Python = "Python",
    RobotFramework = "Robot Framework",
    MacAndCheese = "Mac and Cheese",
    Rust = "Rust"
}

interface SkillProps {
    skill: Skill;
}
export default function SkillTag({ skill }: SkillProps) {
    const getSkillImageSrc: Record<Skill, StaticImageData> = {
        [Skill.TypeScript]: reactIcon,
        [Skill.React]: reactIcon,
        [Skill.Python]: reactIcon,
        [Skill.RobotFramework]: reactIcon,
        [Skill.MacAndCheese]: macAndCheese,
        [Skill.Rust]: reactIcon
    };

    const skillSrc = getSkillImageSrc[skill];

    return (
        <div className="flex gap-1 items-center text-primary-fg bg-gray-700 size-fit py-1 px-3 rounded-3xl">
            <div className="relative size-5 overflow-hidden rounded-md">
                <Image src={skillSrc} alt={skill} fill sizes="20px" />
            </div>
            <span>{skill}</span>
        </div>
    );
}
