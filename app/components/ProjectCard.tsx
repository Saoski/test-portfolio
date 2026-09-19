import Card from "./Card";
import Image, { StaticImageData } from "next/image";
import SkillTag, { Skill } from "./SkillTag";
import Link from "next/link";
import placeholderImg from "../assets/placeholder.jpg";

interface ProjectCardProps {
    title: string;
    description: string;
    imageSrc: StaticImageData;
    skills: Skill[];
    githubLink?: string;
}

export default function ProjectCard({
    title,
    description,
    imageSrc: image_src,
    skills,
    githubLink,
}: ProjectCardProps) {
    return (
        <Card>
            <Image
                src={image_src}
                alt="Project image."
                width={150}
                className="h-fit self-center"
            />
            <div className="pl-3">
                <div className="flex justify-between items-center pb-2">
                    <h2>{title}</h2>
                    {githubLink && (
                        <Link href={githubLink}>
                            <div className="h-7 w-7">
                                <Image
                                    src={placeholderImg}
                                    alt={"Github logo."}
                                />
                            </div>
                        </Link>
                    )}
                </div>
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
