"use client";
import Image from "next/image";
import { useTransition, useEffect } from "react";
import { useTranslations } from "next-intl";
import { fetchData } from "@/app/api/server.js";
import { Loader2, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/navigation";
import { useFormik } from "formik";
import basicSchema from "./validationSchema";
import { useSearchParams } from "next/navigation";
import { Clipboard } from 'lucide-react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Link } from "@/navigation";
import { AdPage, AdsBanner } from "./google/adsense";


export function LinkInputwithBtn({ inputClasses, buttonClasses }) {
  const tDefault = useTranslations("Translations-Default");
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleSubmit();
    }
  };

  const handlePasteLink = async (setFieldValue) => {
    try {
      const text = await navigator.clipboard.readText();
      setFieldValue("link", text);
    } catch (error) {
      console.error("Failed to paste from clipboard", error);
    }
  };

  const submitHandler = (values) => {
    const link = values.link;
    const formattedLink = link.split("?")[0] || link;

    startTransition(async () => {
      const response = await fetchData(formattedLink);
      if (response.error) return;

      // Generate a unique UUID
      const uuid = crypto.randomUUID();

      // Store the data in local storage with a 30-minute expiration timestamp
      const expirationTime = new Date().getTime() + 30 * 60 * 1000;
      localStorage.setItem(
        "downloadedData",
        JSON.stringify({ data: response, uuid, expirationTime })
      );
      router.push(`/download/?id=${uuid}`);

    });

  };


  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        link: "",
      },
      validationSchema: basicSchema,
      onSubmit: submitHandler,
    });

  useEffect(() => {
    const linkFromUrl = searchParams.get('link');
    if (linkFromUrl) {
      setFieldValue('link', decodeURIComponent(linkFromUrl));  // Decodifica o valor da URL e define no campo
    }
  }, [searchParams, setFieldValue])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="relative mb-8 w-11/12 md:w-4/5 mx-auto">
          <input
            type="text"
            id="link"
            name="link"
            onBlur={handleBlur}
            placeholder={tDefault("introduction-input")}
            value={values.link}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={`w-full p-3 pl-6 pr-12 border-0 rounded-lg drop-shadow-lg focus:outline-none focus:ring-2 ease-in-out transition-all duration-100 ${errors.link && touched.link
              ? "ring-2 ring-red-500 text-red-500 placeholder:text-red-500"
              : inputClasses
              }`}
          />
          <div className="absolute right-3 top-0 bottom-0 flex items-center">

            <Clipboard
              onClick={() => handlePasteLink(setFieldValue)}
              className="cursor-pointer active:scale-90 size-6"
            />
          </div>
          {errors.link && touched.link && <p className={`absolute mt-1 ml-1 text-red-500`}>{errors.link}</p>}
        </div>

        <AdsBanner/>
        <AdPage/>

        <Button
          type="submit"
          disabled={isPending}
          className={`flex items-center m-auto ${buttonClasses} bg-transparent active:bg-transparent text-lg font-semibold py-2 mb-2 px-6 rounded-lg border-2 duration-600 transform transition-all active:scale-90 group relative overflow-hidden`}
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            <>
              <p className="group-hover:text-white transition-colors duration-300">
                {tDefault("introduction-button")}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-white ml-3 size-5 transition-colors duration-300"
                viewBox="0 0 512 512"
              >
                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
              </svg>
            </>
          )}
        </Button>
      </form>
      <Popover>
        <PopoverTrigger className="bg-yellow-200 font-semibold px-2 py-1 rounded-md text-xs inline-flex select-none cursor-pointer">
        <TriangleAlert className="size-3 mr-1 mt-[2px]"/>
        {tDefault("disclaimer-title")}
          </PopoverTrigger>
        <PopoverContent className="text-xs text-left p-3">
        {tDefault("disclaimer-content-part1")} <Link href="/terms-and-conditions" className="underline hover:text-blue-500">{tDefault("disclaimer-content-part2")}</Link> {tDefault("disclaimer-content-part3")} <Link href="/privacy-policy" className="underline hover:text-blue-500">{tDefault("disclaimer-content-part4")}</Link>.
        </PopoverContent>
      </Popover>
    </>
  );
}
