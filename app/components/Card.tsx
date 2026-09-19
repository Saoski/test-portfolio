import React from "react";

interface CardProps {
    children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
    return (
        <div className="flex bg-primary space-x-2 text-primary-fg size-fit rounded-2xl overflow-hidden self-center shadow p-5 h-full">
            {children}
        </div>
    );
}
