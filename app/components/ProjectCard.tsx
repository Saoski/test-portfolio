import Card from "./Card";
import Image, { StaticImageData } from "next/image";
import SkillTag, { Skill } from "./SkillTag";

interface ProjectCardProps {
    title: string;
    description: string;
    image_src: StaticImageData;
    skills: Skill[];
}

export default function ProjectCard({
    title,
    description,
    image_src,
    skills,
}: ProjectCardProps) {
    return (
        <Card>
            <Image src={image_src} alt="Me eating mac and cheese." height={100}/>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="flex gap-3">
                    {skills.map((skill) => (
                        <SkillTag skill={skill} key={skill} />
                    ))}
                </div>
            </div>
        </Card>
    );
}
