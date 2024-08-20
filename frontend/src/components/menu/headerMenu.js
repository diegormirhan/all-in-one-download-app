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

export function HeaderMenu() {
  return (
    <>
      {/* Drawer Mobile */}
      <Drawer>
        <DrawerTrigger asChild>
          <div className="md:hidden cursor-pointer">
            <Image width={32} height={32} alt="menu icon svg" src="/menu.svg"></Image>
          </div>
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
          <div className="hidden md:inline cursor-pointer">
            <Image width={32} height={32} alt="menu icon svg" src="/menu.svg"></Image>
          </div>
        </SheetTrigger>
        <SheetContent className="flex flex-col overflow-auto">
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