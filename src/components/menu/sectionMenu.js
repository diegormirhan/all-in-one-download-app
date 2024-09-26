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

import { useTranslations } from 'next-intl';
import { AdsBanner } from "../google/adsense";

const menuContent = MenuContent()

export function SectionMenu({ classes }) {
  const tDefault = useTranslations('Translations-Default');

  return (
    <>
      {/* Drawer Mobile */}
      <Drawer>
        <DrawerTrigger asChild>
          <button className={`flex md:hidden items-center ${classes} text-white rounded-lg py-3 px-6 shadow-md mb-10 m-auto text-left md:text-center group ease-in-out transition-all hover:scale-105`}>
            {tDefault('explore-button')}
            <Image src="/icons/arrow_right.svg" width={28} height={28} alt="arrow right icon svg" className="ml-1 transform transition-transform duration-200 group-hover:translate-x-2"></Image>
          </button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{tDefault('menu-title')}</DrawerTitle>
            <DrawerDescription>{tDefault('menu-description')}</DrawerDescription>
          </DrawerHeader>
          {menuContent}
        </DrawerContent>
      </Drawer>

      {/* Sheet Desktop */}
      <Sheet>
        <SheetTrigger asChild>
          <button className={`hidden md:flex  items-center ${classes} text-white rounded-lg py-3 px-6 shadow-md mb-10 m-auto text-left md:text-center group ease-in-out transition-all hover:scale-105`}>
            {tDefault('explore-button')}
            <Image src="/icons/arrow_right.svg" width={28} height={28} alt="arrow right icon svg" className="ml-1 transform transition-transform duration-200 group-hover:translate-x-2"></Image>
          </button>
        </SheetTrigger>
        <SheetContent className="flex flex-col overflow-auto fade-bottom">
          <SheetHeader>
            <SheetTitle>{tDefault('menu-title')}</SheetTitle>
            <SheetDescription>{tDefault('menu-description')}</SheetDescription>
          </SheetHeader>
          {menuContent}
        </SheetContent>
      </Sheet>
      <AdsBanner/>
    </>
  );
}