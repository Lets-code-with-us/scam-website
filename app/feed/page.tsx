import React from "react";
import Card from "@/components/Card";


export default function feed() {
    return (
        <>
        <div className="flex flex-col items-center justify-center">
            {Array.from({ length: 10 }).map((_, i) => (
                <div className="p-6">
                    
                <Card key={i} />
                </div>
            ))}
        </div>
        </>
    )
}