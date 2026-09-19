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
            <Image src={image_src} alt="Project image."  width={150} className="h-fit self-center"/>
            <div className="pl-3">
                <h2>{title}</h2>
                <p className="max-h-40 overflow-y-auto">{description}</p>
                <div className="flex gap-3 pt-3">
                    {skills.map((skill) => (
                        <SkillTag skill={skill} key={skill} />
                    ))}
                </div>
            </div>
        </Card>
    );
}
