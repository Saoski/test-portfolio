import React from "react";
import mac_and_cheese from "../assets/mac_and_cheese.jpg";
import Image from "next/image";

export default function AboutMe() {
    return (
        <div className="flex bg-primary space-x-2 text-primary-fg size-fit rounded-2xl overflow-hidden self-center shadow">
            <div className="card-body p-5">
                <h2>I am Sean O'Donnell</h2>
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
                className="rounded-2xl p-3"
            ></Image>
        </div>
    );
}
