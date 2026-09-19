import Image, { StaticImageData } from "next/image";
import reactIcon from "../assets/react-svgrepo-com.svg";

export enum Skill {
    TypeScript = "TypeScript",
    React = "React",
    Python = "Python",
    RobotFramework = "Robot Framework",
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
    };

    const skillSrc = getSkillImageSrc[skill];

    return (
        <div className="flex gap-1 items-center text-primary-fg bg-gray-700 size-fit py-1 px-3 rounded-3xl">
            <Image src={skillSrc} alt={skill} width={30} />
            <span>{skill}</span>
        </div>
    );
}
