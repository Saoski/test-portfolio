import Image, { StaticImageData } from "next/image";
import Card from "./Card";

interface ExperienceCardProps {
    logoSrc: StaticImageData;
    logoAlt: string;
    jobTitle: string;
    organization: string;
    startDate: string;
    endDate: string;
}

export default function ExperienceCard({
    logoSrc,
    logoAlt,
    jobTitle,
    organization,
    startDate,
    endDate,
}: ExperienceCardProps) {
    return (
        <Card>
            <div className="w-200 flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <div className="relative w-12 h-12">
                        <Image src={logoSrc} alt={logoAlt} />
                    </div>
                    <div>
                        <span>{jobTitle}</span> - <span>{organization}</span>
                    </div>
                </div>
                <div className="">
                    {startDate} – {endDate}
                </div>
            </div>
        </Card>
    );
}
