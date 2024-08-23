import { MenuContent } from "./menuContent";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";

const menuContent = MenuContent()

export function SectionMenu({classes}) {
    return (
        <>
        {/* Drawer Mobile */}
      <Drawer>
        <DrawerTrigger asChild>
        <button className={`flex md:hidden items-center ${classes} text-white rounded-lg py-3 px-6 shadow-md mb-10 m-auto text-left md:text-center group ease-in-out transition-all hover:scale-105`}>
            Explore All Social Media We Support
            <Image src="/icons/arrow_right.svg" width={28} height={28} alt="arrow right icon svg" className="ml-1 transform transition-transform duration-200 group-hover:translate-x-2"></Image>
          </button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Explore</DrawerTitle>
            <DrawerDescription>Search for other Social Media Platforms</DrawerDescription>
          </DrawerHeader>
          {menuContent}
        </DrawerContent>
      </Drawer>

      {/* Sheet Desktop */}
      <Sheet>
      <SheetTrigger asChild>
      <button className={`hidden md:flex  items-center ${classes} text-white rounded-lg py-3 px-6 shadow-md mb-10 m-auto text-left md:text-center group ease-in-out transition-all hover:scale-105`}>
            Explore All Social Media We Support
            <Image src="/icons/arrow_right.svg" width={28} height={28} alt="arrow right icon svg" className="ml-1 transform transition-transform duration-200 group-hover:translate-x-2"></Image>
          </button>
          </SheetTrigger>
        <SheetContent className="flex flex-col overflow-auto fade-bottom">
          <SheetHeader>
            <SheetTitle>Explore</SheetTitle>
            <SheetDescription>Search for other Social Media Platforms</SheetDescription>
          </SheetHeader>
          {menuContent}
        </SheetContent>
      </Sheet>
        </>
    );
}