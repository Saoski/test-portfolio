import AboutMe from "./components/AboutMe";
import Divider from "./components/Divider";

export default function Home() {
    return (
        <>
            <Divider text="About Me"/>
            <AboutMe />
            <Divider text="Experience"/>
            <Divider />
            <Divider />
        </>
    );
}
