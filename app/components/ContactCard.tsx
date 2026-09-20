import Card from "./Card";
import placeholderImg from "../assets/placeholder.jpg";
import Image from "next/image";

export default function ContactCard() {
    const contacts = [
        {
            logoSrc: placeholderImg,
            link: "https://www.linkedin.com/in/sean-odonn/",
        },
        {
            logoSrc: placeholderImg,
            link: "https://github.com/Saoski",
        },
        {
            logoSrc: placeholderImg,
            link: "sao3216@rit.edu",
        },
    ];

    return (
        <Card>
            <div className="flex flex-col justify-center px-3">
                <h1>SEAN</h1>
                <p>O'Donnell</p>
            </div>
            <div className="flex flex-col gap-4">
                {contacts.map(({ logoSrc, link }) => {
                    return (
                        <div className="flex items-center gap-2">
                            <div className="relative w-10 h-10">
                                <Image src={logoSrc} alt={"Contact logo"} />
                            </div>
                            <a href={link}>{link}</a>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
}
