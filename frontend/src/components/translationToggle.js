"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import Image from "next/image"

import { usePathname, useRouter} from '@/navigation'

export function TranslationToggle() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLanguageChange = (value) => {
        router.replace(pathname, { locale: value });
      };
    return (
        <>
            <Select onValueChange={handleLanguageChange}>
                <SelectTrigger aria-label="Select language">
                    <Image width={28} height={28} className="md:w-8 md:h-8 cursor-pointer" alt="translate icon svg" src="/translate.svg"></Image>
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
                    <SelectItem value="ar">العربية</SelectItem>
                    <SelectItem value="hi">हिन्दी</SelectItem>
                    <SelectItem value="nl">Nederlands</SelectItem>
                    <SelectItem value="sv">Svenska</SelectItem>
                    <SelectItem value="no">Norsk</SelectItem>
                    <SelectItem value="da">Dansk</SelectItem>
                    <SelectItem value="fi">Suomi</SelectItem>
                    <SelectItem value="tr">Türkçe</SelectItem>
                    <SelectItem value="el">Ελληνικά</SelectItem>
                    <SelectItem value="pl">Polski</SelectItem>
                    <SelectItem value="he">עברית</SelectItem>
                    <SelectItem value="id">Bahasa Indonesia</SelectItem>
                    <SelectItem value="th">ภาษาไทย</SelectItem>
                    <SelectItem value="hu">Magyar</SelectItem>
                    <SelectItem value="cs">Čeština</SelectItem>
                    <SelectItem value="ro">Română</SelectItem>
                    <SelectItem value="uk">Українська</SelectItem>
                    <SelectItem value="vi">Tiếng Việt</SelectItem>
                    <SelectItem value="bn">বাংলা</SelectItem>
                </SelectContent>
            </Select>
        </>
    )
}