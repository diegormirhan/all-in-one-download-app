"use client"
import { useState } from "react";
import Image from "next/image";

export function InputLink() {
    const [link, setLink] = useState("");

    const handlePasteLink = async () => {
        try {
            const text = await navigator.clipboard.readText();
            setLink(text);
        } catch (error) {
            console.error("Failed to paste from clipboard", error)
        }
        
    }
    return (
        <>
            <div className="relative mb-8 w-11/12 md:w-2/3 mx-auto">
                <input type="text" id="input link" placeholder="Insert your link here" value={link} onChange={(e) => setLink(e.target.value)} className="w-full p-3 pl-6 pr-12 border-0 rounded-lg drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-main-color ease-in-out transition-all duration-100"></input>
                <div className="absolute right-3 top-0 bottom-0 flex items-center">
                    <Image src="/paste.svg" width={24} height={24} alt="paste from clipboardicon svg" onClick={handlePasteLink} className="cursor-pointer active:scale-90"></Image>
                </div>
            </div>
        </>
    )
}