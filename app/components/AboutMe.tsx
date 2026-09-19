import mac_and_cheese from "../assets/mac_and_cheese.jpg";
import Image from "next/image";
import Card from "./Card";

export default function AboutMe() {
    return (
        <Card>
            <div>
                <h2>Hello, I am Sean O'Donnell</h2>
                <div className="grid grid-cols-2">
                    <p>Role</p>
                    <p>Software Engineer</p>
                    <p>Education</p>
                    <p>B. S. Computer Science at RIT</p>
                </div>
            </div>
            <Image
                src={mac_and_cheese}
                alt="Me eating mac and cheese"
                width={150}
                className="rounded-2xl"
            ></Image>
        </Card>
    );
}
