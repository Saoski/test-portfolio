import React from "react";

interface CardProps {
    children: React.ReactNode;
    id?: string;
}

export default function Card({ children, id }: CardProps) {
    return (
        <div
            className="flex bg-primary space-x-2 text-primary-fg size-fit rounded-2xl overflow-hidden self-center shadow p-5 h-full"
            id={id}
        >
            {children}
        </div>
    );
}
