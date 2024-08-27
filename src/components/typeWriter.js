"use client"
import { TypeAnimation } from "react-type-animation";

export function TypeWriterWords() {
    return (
        <>
            
            <TypeAnimation
            sequence={[
                "Instagram",
                2000,
                "Facebook",
                2000,
                "Tiktok",
                2000,
                "Reddit",
                2000,
                "Twitter",
                2000,
                "Youtube",
                2000,
                "Spotify",
                2000,
                "Pinterest",
                2000,
            ]}
            repeat={Infinity}
            className="text-main-color"
            />
        </>
    )

}