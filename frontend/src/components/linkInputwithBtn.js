"use client"
import Image from "next/image";
import { useState } from "react";

export function LinkInputwithBtn({inputClasses, buttonClasses}) {
    const [ link, setLink ] = useState("");

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleSubmit();
      }
    };
  
    const handlePasteLink = async () => {
      try {
        const text = await navigator.clipboard.readText();
        setLink(text);
      } catch (error) {
        console.error("Failed to paste from clipboard", error);
      }
    };

    const handleSubmit = () => {
      if (link) {
        console.log("Submitted link:", link);
        // Adicione a lógica de envio aqui, como redirecionar ou processar o link
      }
    };

    return (
        <>
            <div className="relative mb-8 w-11/12 md:w-2/3 mx-auto">
                <input type="text" id="input link" name="input link" placeholder="Insert your link here" value={link} onChange={(e) => setLink(e.target.value)} onKeyDown={handleKeyDown} className={`w-full p-3 pl-6 pr-12 border-0 rounded-lg drop-shadow-lg focus:outline-none focus:ring-2 focus:${inputClasses} ease-in-out transition-all duration-100`}></input>
                <div className="absolute right-3 top-0 bottom-0 flex items-center">
                    <Image src="/icons/paste.svg" width={24} height={24} alt="paste from clipboardicon svg" onClick={handlePasteLink} className="cursor-pointer active:scale-90"></Image>
                </div>
            </div>

            <button type="button" onClick={handleSubmit} className={`flex items-center m-auto ${buttonClasses} bg-transparent text-lg font-semibold py-2 px-6 rounded-full mb-10 border-2  duration-600 transform transition-all active:scale-90 group`}>
                <p className="group-hover:text-white transition-colors duration-300">Download</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:fill-white ml-4 w-5 h-5 transition-colors duration-300" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>
            </button>
        </>
    )
}