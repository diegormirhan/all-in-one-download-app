import {
    SheetClose,
} from "@/components/ui/sheet"

import {
    DrawerClose,
} from "@/components/ui/drawer"


import { Link } from "@/navigation";
import Image from 'next/image';

export default function MenuItem({ href, iconSrc, text }) {
    return (
        <>
            <li>
                <Link href={href}>
                    <SheetClose asChild>
                        <DrawerClose asChild>
                            <div className="py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer flex items-center w-full">
                                <Image className="mr-2" alt={`${text} icon svg`} width={32} height={32} src={iconSrc}></Image>
                                {text}
                                <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
                            </div>
                        </DrawerClose>
                    </SheetClose>
                </Link>
            </li>
        </>
    );
}
