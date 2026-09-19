import placeholderImg from "../assets/placeholder.jpg";
import Image from "next/image";

export default function NavBar() {
    return (
        <div className="flex justify-between fixed top-0 w-screen p-3 bg-secondary items-center">
            <div className="relative w-10 h-10">
                <Image src={placeholderImg} alt="Sean logo." fill />
            </div>
            <nav className="flex gap-3 pr-3">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact Me</a>
            </nav>
        </div>
    );
}
