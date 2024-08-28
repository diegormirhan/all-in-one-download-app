"use client"

import { useRouter, usePathname as usePathname } from '@/navigation'
import { usePathname as customUsePathname } from 'next/navigation';
import { locales } from '@/config';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select"

import Image from "next/image"

export function TranslationToggle() {
    const pathname = usePathname();
    const custompathname = customUsePathname();
    const router = useRouter();

    const pathParts = custompathname.split('/');
    let currentLocale = pathParts[1]
    if(currentLocale.length !== 2) currentLocale = 'en'

    const handleLanguageChange = (value) => {
            router.replace(pathname, { locale: value });
    };
    
    return (
        <>
            <Select defaultValue={currentLocale} onValueChange={handleLanguageChange}>
                <SelectTrigger aria-label="Select language">
                    <Image width={28} height={28} className="md:w-8 md:h-8 cursor-pointer" alt="translate icon svg" src="/icons/translate.svg"></Image>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                    <SelectItem value="pt">Português</SelectItem>
                    <SelectItem value="it">Italiano</SelectItem>
                    <SelectItem value="zh">中文</SelectItem>
                    <SelectItem value="ja">日本語</SelectItem>
                    <SelectItem value="ko">한국어</SelectItem>
                    <SelectItem value="ru">Русский</SelectItem>
                    <SelectItem value="hi">हिन्दी</SelectItem>
                    <SelectItem value="tr">Türkçe</SelectItem>
                    <SelectItem value="ar" className="hidden">العربية</SelectItem>
                    <SelectItem value="nl" className="hidden">Nederlands</SelectItem>
                    <SelectItem value="sv" className="hidden">Svenska</SelectItem>
                    <SelectItem value="no" className="hidden">Norsk</SelectItem>
                    <SelectItem value="da" className="hidden">Dansk</SelectItem>
                    <SelectItem value="fi" className="hidden">Suomi</SelectItem> 
                    <SelectItem value="el" className="hidden">Ελληνικά</SelectItem>
                    <SelectItem value="pl" className="hidden">Polski</SelectItem>
                    <SelectItem value="he" className="hidden">עברית</SelectItem>
                    <SelectItem value="id" className="hidden">Bahasa Indonesia</SelectItem>
                    <SelectItem value="th" className="hidden">ภาษาไทย</SelectItem>
                    <SelectItem value="hu" className="hidden">Magyar</SelectItem>
                    <SelectItem value="cs" className="hidden">Čeština</SelectItem>
                    <SelectItem value="ro" className="hidden">Română</SelectItem>
                    <SelectItem value="uk" className="hidden">Українська</SelectItem>
                    <SelectItem value="vi" className="hidden">Tiếng Việt</SelectItem>
                    <SelectItem value="bn" className="hidden">বাংলা</SelectItem>
                </SelectContent>
            </Select>
        </>
    )
}