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

const menuContent = MenuContent()

export function SectionMenu() {
    return (
        <>
        {/* Drawer Mobile */}
      <Drawer>
        <DrawerTrigger asChild>
        <button className="flex md:hidden items-center bg-main-color text-white rounded-lg py-3 px-6 shadow-md shadow-main-color mb-10 m-auto text-left md:text-center group ease-in-out transition-all hover:scale-105">
            Explore All Social Media We Support
            <img src="/arrow_right.svg" className="ml-1 w-7 h-7 transform transition-transform duration-200 group-hover:translate-x-2"></img>
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
      <button className="hidden md:flex  items-center bg-main-color text-white rounded-lg py-3 px-6 shadow-md shadow-main-color mb-10 m-auto text-left md:text-center group ease-in-out transition-all hover:scale-105">
            Explore All Social Media We Support
            <img src="/arrow_right.svg" className="ml-1 w-7 h-7 transform transition-transform duration-200 group-hover:translate-x-2"></img>
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