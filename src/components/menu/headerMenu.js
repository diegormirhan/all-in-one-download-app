

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

const menuContent = MenuContent()

export function HeaderMenu() {
  const tDefault = useTranslations('Translations-Default');

  return (
    <>
      {/* Drawer Mobile */}
      <Drawer>
        <DrawerTrigger asChild>
            <Image width={28} height={28} alt="mobile menu icon svg" src="/icons/menu-mobile.svg" className="md:hidden cursor-pointer"></Image>
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
          <Image width={40} height={40} alt="desktop menu icon svg" src="/icons/menu-desktop.svg" className="hidden md:inline cursor-pointer"></Image>
        </SheetTrigger>
        <SheetContent className="flex flex-col overflow-auto">
          <SheetHeader>
            <SheetTitle>{tDefault('menu-title')}</SheetTitle>
            <SheetDescription>{tDefault('menu-description')}</SheetDescription>
          </SheetHeader>
          {menuContent}
        </SheetContent>
      </Sheet>
    </>
  );
}