import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import Image from "next/image"


export function TranslationCard() {
    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <Image width={32} height={32} className="cursor-pointer" alt="translate icon svg" src="/translate.svg"></Image>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Select another language</DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-3 gap-3 lg:grid-cols-5 lg:gap-4 max-h-80 lg:max-h-full overflow-y-scroll ">
                        <Button variant="ghost">English</Button>
                        <Button variant="ghost">Español</Button>
                        <Button variant="ghost">Français</Button>
                        <Button variant="ghost">Deutsch</Button>
                        <Button variant="ghost">Português</Button>
                        <Button variant="ghost">Italiano</Button>
                        <Button variant="ghost">中文</Button>
                        <Button variant="ghost">日本語</Button>
                        <Button variant="ghost">한국어</Button>
                        <Button variant="ghost">Русский</Button>
                        <Button variant="ghost">العربية</Button>
                        <Button variant="ghost">हिन्दी</Button>
                        <Button variant="ghost">Nederlands</Button>
                        <Button variant="ghost">Svenska</Button>
                        <Button variant="ghost">Norsk</Button>
                        <Button variant="ghost">Dansk</Button>
                        <Button variant="ghost">Suomi</Button>
                        <Button variant="ghost">Türkçe</Button>
                        <Button variant="ghost">Ελληνικά</Button>
                        <Button variant="ghost">Polski</Button>
                        <Button variant="ghost">עברית</Button>
                        <Button variant="ghost">ไทย</Button>
                        <Button variant="ghost">Bahasa</Button>
                        <Button variant="ghost">ภาษาไทย</Button>
                        <Button variant="ghost">Magyar</Button>
                        <Button variant="ghost">Čeština</Button>
                        <Button variant="ghost">Română</Button>
                        <Button variant="ghost">Українська</Button>
                        <Button variant="ghost">Tiếng Việt</Button>
                        <Button variant="ghost">বাংলা</Button>
                    </div>
                </DialogContent>
            </Dialog>


        </>
    )
}